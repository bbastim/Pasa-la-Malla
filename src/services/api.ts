import { Course, Question, Badge } from "../types";

const API = "/api";

export async function getCourses(malla?: string): Promise<Course[]> {
  const url = malla ? `${API}/courses?malla=${malla}` : `${API}/courses`;
  const res = await fetch(url);
  if (!res.ok) throw new Error("Failed to fetch courses");
  return res.json();
}

export async function getCourseQuestions(courseId: string): Promise<Question[]> {
  const res = await fetch(`${API}/courses/${courseId}/questions`);
  if (!res.ok) throw new Error("Failed to fetch questions");
  return res.json();
}

export async function getBadges(): Promise<Badge[]> {
  const res = await fetch(`${API}/badges`);
  if (!res.ok) throw new Error("Failed to fetch badges");
  return res.json();
}
