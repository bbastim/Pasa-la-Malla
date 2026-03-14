import "dotenv/config";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../src/generated/prisma/client";
import { courses } from "../src/data/courses";
import { questions } from "../src/data/questions";
import { BADGES } from "../src/lib/gamification";

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL! });
const prisma = new PrismaClient({ adapter });

async function main() {
  console.log("Seeding courses...");
  for (const c of courses) {
    await prisma.course.upsert({
      where: { id: c.id },
      update: {},
      create: {
        id: c.id,
        malla: c.malla,
        name: c.name,
        description: c.description,
        manualSummary: c.manualSummary,
      },
    });
  }
  console.log(`  ${courses.length} courses seeded.`);

  console.log("Seeding questions...");
  for (const q of questions) {
    await prisma.question.upsert({
      where: { id: q.id },
      update: {},
      create: {
        id: q.id,
        malla: q.malla,
        courseId: q.course,
        difficulty: q.difficulty,
        text: q.text,
        options: q.options,
        correctAnswerIndex: q.correctAnswerIndex,
        explanation: q.explanation,
      },
    });
  }
  console.log(`  ${questions.length} questions seeded.`);

  console.log("Seeding badges...");
  for (const b of BADGES) {
    await prisma.badge.upsert({
      where: { id: b.id },
      update: {},
      create: {
        id: b.id,
        name: b.name,
        description: b.description,
        icon: b.icon,
        color: b.color,
        bg: b.bg,
        border: b.border,
      },
    });
  }
  console.log(`  ${BADGES.length} badges seeded.`);

  console.log("Seeding complete!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
