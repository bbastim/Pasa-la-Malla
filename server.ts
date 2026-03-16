import "dotenv/config";
import express from "express";
import { createServer as createViteServer } from "vite";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "./src/generated/prisma/client";

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL! });
const prisma = new PrismaClient({ adapter });

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // --- API: Courses ---

  app.get("/api/courses", async (req, res) => {
    try {
      const { malla } = req.query;
      const where = malla ? { malla: String(malla) } : {};
      const courses = await prisma.course.findMany({
        where,
        orderBy: { name: "asc" },
      });
      res.json(courses);
    } catch (error) {
      res.status(500).json({ error: "Database error" });
    }
  });

  app.get("/api/courses/:id", async (req, res) => {
    try {
      const course = await prisma.course.findUnique({
        where: { id: req.params.id },
      });
      if (!course) return res.status(404).json({ error: "Course not found" });
      res.json(course);
    } catch (error) {
      res.status(500).json({ error: "Database error" });
    }
  });

  app.get("/api/courses/:id/questions", async (req, res) => {
    try {
      const questions = await prisma.question.findMany({
        where: { courseId: req.params.id },
      });
      const mapped = questions.map((q) => ({
        id: q.id,
        malla: q.malla,
        course: q.courseId,
        difficulty: q.difficulty,
        text: q.text,
        options: q.options as string[],
        correctAnswerIndex: q.correctAnswerIndex,
        explanation: q.explanation,
      }));
      res.json(mapped);
    } catch (error) {
      res.status(500).json({ error: "Database error" });
    }
  });

  // --- API: Badges ---

  app.get("/api/badges", async (_req, res) => {
    try {
      const badges = await prisma.badge.findMany();
      res.json(badges);
    } catch (error) {
      res.status(500).json({ error: "Database error" });
    }
  });

  // --- API: Feedback ---

  app.post("/api/feedback", async (req, res) => {
    const { message } = req.body;
    if (!message) return res.status(400).json({ error: "Message is required" });

    try {
      await prisma.feedback.create({ data: { message } });
      res.json({ success: true });
    } catch (error) {
      res.status(500).json({ error: "Database error" });
    }
  });

  // --- API: Reports ---

  app.post("/api/reports", async (req, res) => {
    const { questionId, questionText, message } = req.body;
    if (!message) return res.status(400).json({ error: "Message is required" });

    try {
      await prisma.report.create({
        data: {
          questionId: questionId || "unknown",
          questionText: questionText || "",
          message,
        },
      });
      res.json({ success: true });
    } catch (error) {
      res.status(500).json({ error: "Database error" });
    }
  });

  // --- API: Admin ---

  app.get("/api/admin/messages", async (_req, res) => {
    try {
      const feedback = await prisma.feedback.findMany({
        orderBy: { createdAt: "desc" },
      });
      const reports = await prisma.report.findMany({
        orderBy: { createdAt: "desc" },
      });
      res.json({ feedback, reports });
    } catch (error) {
      res.status(500).json({ error: "Database error" });
    }
  });

  // --- Vite middleware ---

  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static("dist"));
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
