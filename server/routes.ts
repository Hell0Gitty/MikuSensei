import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertUserSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // User routes
  app.get("/api/user/:id", async (req, res) => {
    try {
      const user = await storage.getUser(req.params.id);
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
      res.json(user);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch user" });
    }
  });

  app.post("/api/users", async (req, res) => {
    try {
      const userData = insertUserSchema.parse(req.body);
      const user = await storage.createUser(userData);
      res.status(201).json(user);
    } catch (error) {
      res.status(400).json({ message: "Invalid user data" });
    }
  });

  app.put("/api/user/:id/progress", async (req, res) => {
    try {
      const { progress, completedLessons } = req.body;
      const user = await storage.updateUserProgress(req.params.id, progress, completedLessons);
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
      res.json(user);
    } catch (error) {
      res.status(500).json({ message: "Failed to update progress" });
    }
  });

  // Lesson routes
  app.get("/api/lessons", async (req, res) => {
    try {
      const level = req.query.level ? parseInt(req.query.level as string) : undefined;
      const lessons = await storage.getLessons(level);
      res.json(lessons);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch lessons" });
    }
  });

  app.get("/api/lesson/:id", async (req, res) => {
    try {
      const lesson = await storage.getLesson(parseInt(req.params.id));
      if (!lesson) {
        return res.status(404).json({ message: "Lesson not found" });
      }
      res.json(lesson);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch lesson" });
    }
  });

  app.put("/api/lesson/:id/complete", async (req, res) => {
    try {
      const { score } = req.body;
      const lesson = await storage.updateLessonCompletion(parseInt(req.params.id), true, score);
      if (!lesson) {
        return res.status(404).json({ message: "Lesson not found" });
      }
      res.json(lesson);
    } catch (error) {
      res.status(500).json({ message: "Failed to update lesson" });
    }
  });

  // Level routes
  app.get("/api/levels", async (req, res) => {
    try {
      const levels = await storage.getLevels();
      res.json(levels);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch levels" });
    }
  });

  app.get("/api/level/:id", async (req, res) => {
    try {
      const level = await storage.getLevel(parseInt(req.params.id));
      if (!level) {
        return res.status(404).json({ message: "Level not found" });
      }
      res.json(level);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch level" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
