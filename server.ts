import express from "express";
import { createServer as createViteServer } from "vite";
import Database from "better-sqlite3";

const db = new Database("app.db");

// Create tables for feedback and reports
db.exec(`
  CREATE TABLE IF NOT EXISTS feedback (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    message TEXT NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );
  CREATE TABLE IF NOT EXISTS reports (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    question_id TEXT NOT NULL,
    question_text TEXT NOT NULL,
    message TEXT NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );
`);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Routes
  app.post("/api/feedback", (req, res) => {
    const { message } = req.body;
    if (!message) return res.status(400).json({ error: "Message is required" });
    
    try {
      const stmt = db.prepare("INSERT INTO feedback (message) VALUES (?)");
      stmt.run(message);
      res.json({ success: true });
    } catch (error) {
      res.status(500).json({ error: "Database error" });
    }
  });

  app.post("/api/reports", (req, res) => {
    const { questionId, questionText, message } = req.body;
    if (!message) return res.status(400).json({ error: "Message is required" });
    
    try {
      const stmt = db.prepare("INSERT INTO reports (question_id, question_text, message) VALUES (?, ?, ?)");
      stmt.run(questionId, questionText, message);
      res.json({ success: true });
    } catch (error) {
      res.status(500).json({ error: "Database error" });
    }
  });

  app.get("/api/admin/messages", (req, res) => {
    try {
      const feedback = db.prepare("SELECT * FROM feedback ORDER BY created_at DESC").all();
      const reports = db.prepare("SELECT * FROM reports ORDER BY created_at DESC").all();
      res.json({ feedback, reports });
    } catch (error) {
      res.status(500).json({ error: "Database error" });
    }
  });

  // Vite middleware setup
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
