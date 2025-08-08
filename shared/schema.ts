import { sql } from "drizzle-orm";
import { pgTable, text, varchar, integer, boolean, jsonb } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  email: text("email").notNull().unique(),
  currentLevel: integer("current_level").default(1),
  completedLessons: jsonb("completed_lessons").$type<number[]>().default([]),
  progress: jsonb("progress").$type<{
    completed: number;
    total: number;
    characters: number;
    vocabulary: number;
    quizScore: number;
  }>().default({
    completed: 0,
    total: 24,
    characters: 0,
    vocabulary: 0,
    quizScore: 0,
  }),
});

export const lessons = pgTable("lessons", {
  id: integer("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  level: integer("level").notNull(),
  content: jsonb("content").$type<{
    characters: string[];
    vocabulary: string[];
    concepts: string[];
  }>().notNull(),
  isCompleted: boolean("is_completed").default(false),
  score: integer("score").default(0),
});

export const levels = pgTable("levels", {
  id: integer("id").primaryKey(),
  name: text("name").notNull(),
  description: text("description").notNull(),
  color: text("color").notNull(),
  features: jsonb("features").$type<string[]>().notNull(),
  isUnlocked: boolean("is_unlocked").default(false),
});

export const insertUserSchema = createInsertSchema(users).omit({
  id: true,
});

export const insertLessonSchema = createInsertSchema(lessons).omit({
  id: true,
});

export const insertLevelSchema = createInsertSchema(levels).omit({
  id: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
export type InsertLesson = z.infer<typeof insertLessonSchema>;
export type Lesson = typeof lessons.$inferSelect;
export type InsertLevel = z.infer<typeof insertLevelSchema>;
export type Level = typeof levels.$inferSelect;
