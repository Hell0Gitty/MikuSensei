import { type User, type InsertUser, type Lesson, type InsertLesson, type Level, type InsertLevel } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByEmail(email: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  updateUserProgress(id: string, progress: User['progress'], completedLessons: number[]): Promise<User | undefined>;
  
  getLessons(level?: number): Promise<Lesson[]>;
  getLesson(id: number): Promise<Lesson | undefined>;
  createLesson(lesson: InsertLesson): Promise<Lesson>;
  updateLessonCompletion(id: number, isCompleted: boolean, score: number): Promise<Lesson | undefined>;
  
  getLevels(): Promise<Level[]>;
  getLevel(id: number): Promise<Level | undefined>;
  createLevel(level: InsertLevel): Promise<Level>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private lessons: Map<number, Lesson>;
  private levels: Map<number, Level>;
  private nextLessonId: number = 1;

  constructor() {
    this.users = new Map();
    this.lessons = new Map();
    this.levels = new Map();
    this.initializeData();
  }

  private initializeData() {
    // Initialize levels
    const levelsData = [
      {
        id: 1,
        name: "Newcomers",
        description: "Complete Beginners",
        color: "#FFE66D",
        features: ["Hiragana & Katakana", "Basic Greetings", "Numbers 1-100", "Essential Vocabulary"],
        isUnlocked: true,
      },
      {
        id: 2,
        name: "Beginners",
        description: "Basic Conversation",
        color: "#39C5BB",
        features: ["Simple Sentences", "Basic Kanji (50)", "Self Introduction", "Present Tense"],
        isUnlocked: false,
      },
      {
        id: 3,
        name: "Intermediate",
        description: "Everyday Communication",
        color: "#FF6B9D",
        features: ["Past & Future Tense", "Kanji (200+)", "Complex Sentences", "Cultural Context"],
        isUnlocked: false,
      },
      {
        id: 4,
        name: "Advanced",
        description: "Professional Level",
        color: "#8B5CF6",
        features: ["Business Japanese", "Kanji (500+)", "Formal Speech", "Literature"],
        isUnlocked: false,
      },
      {
        id: 5,
        name: "Fluent",
        description: "Native-like Proficiency",
        color: "#F59E0B",
        features: ["Native Expressions", "Kanji Mastery", "Regional Dialects", "Cultural Nuances"],
        isUnlocked: false,
      },
    ];

    levelsData.forEach(level => {
      this.levels.set(level.id, level);
    });

    // Initialize Level 1 lessons
    const lessonsData = [
      {
        id: 1,
        title: "Introduction & あいうえお",
        description: "Basic Greetings & First Characters",
        level: 1,
        content: {
          characters: ["あ", "い", "う", "え", "お"],
          vocabulary: ["こんにちは", "おはよう", "こんばんは"],
          concepts: ["Basic Greetings", "Pronunciation", "Writing Practice"],
        },
        isCompleted: true,
        score: 95,
      },
      {
        id: 2,
        title: "かきくけこ & Numbers",
        description: "Numbers 1-10 & K-sounds",
        level: 1,
        content: {
          characters: ["か", "き", "く", "け", "こ"],
          vocabulary: ["いち", "に", "さん", "よん", "ご"],
          concepts: ["Numbers 1-10", "K-sound characters", "Writing Practice"],
        },
        isCompleted: true,
        score: 88,
      },
      {
        id: 3,
        title: "さしすせそ & Family",
        description: "Family Members & S-sounds",
        level: 1,
        content: {
          characters: ["さ", "し", "す", "せ", "そ"],
          vocabulary: ["おかあさん", "おとうさん", "あね", "あに"],
          concepts: ["Family Members", "S-sound characters", "Cultural Context"],
        },
        isCompleted: false,
        score: 0,
      },
      {
        id: 4,
        title: "たちつてと & Time",
        description: "Time Expressions & T-sounds",
        level: 1,
        content: {
          characters: ["た", "ち", "つ", "て", "と"],
          vocabulary: ["あさ", "ひる", "よる", "いま"],
          concepts: ["Time Expressions", "T-sound characters", "Daily Schedule"],
        },
        isCompleted: false,
        score: 0,
      },
      {
        id: 5,
        title: "なにぬねの & Food",
        description: "Food Vocabulary & N-sounds",
        level: 1,
        content: {
          characters: ["な", "に", "ぬ", "ね", "の"],
          vocabulary: ["ごはん", "みず", "おちゃ", "たべもの"],
          concepts: ["Food Vocabulary", "N-sound characters", "Restaurant Phrases"],
        },
        isCompleted: false,
        score: 0,
      },
    ];

    lessonsData.forEach(lesson => {
      this.lessons.set(lesson.id, lesson);
      this.nextLessonId = Math.max(this.nextLessonId, lesson.id + 1);
    });
  }

  // User methods
  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByEmail(email: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(user => user.email === email);
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { 
      ...insertUser, 
      id,
      currentLevel: 1,
      completedLessons: [1, 2],
      progress: {
        completed: 2,
        total: 24,
        characters: 10,
        vocabulary: 8,
        quizScore: 91,
      },
    };
    this.users.set(id, user);
    return user;
  }

  async updateUserProgress(id: string, progress: User['progress'], completedLessons: number[]): Promise<User | undefined> {
    const user = this.users.get(id);
    if (!user) return undefined;

    const updatedUser = { ...user, progress, completedLessons };
    this.users.set(id, updatedUser);
    return updatedUser;
  }

  // Lesson methods
  async getLessons(level?: number): Promise<Lesson[]> {
    const allLessons = Array.from(this.lessons.values());
    return level ? allLessons.filter(lesson => lesson.level === level) : allLessons;
  }

  async getLesson(id: number): Promise<Lesson | undefined> {
    return this.lessons.get(id);
  }

  async createLesson(insertLesson: InsertLesson): Promise<Lesson> {
    const id = this.nextLessonId++;
    const lesson: Lesson = { ...insertLesson, id };
    this.lessons.set(id, lesson);
    return lesson;
  }

  async updateLessonCompletion(id: number, isCompleted: boolean, score: number): Promise<Lesson | undefined> {
    const lesson = this.lessons.get(id);
    if (!lesson) return undefined;

    const updatedLesson = { ...lesson, isCompleted, score };
    this.lessons.set(id, updatedLesson);
    return updatedLesson;
  }

  // Level methods
  async getLevels(): Promise<Level[]> {
    return Array.from(this.levels.values());
  }

  async getLevel(id: number): Promise<Level | undefined> {
    return this.levels.get(id);
  }

  async createLevel(insertLevel: InsertLevel): Promise<Level> {
    const id = Math.max(...Array.from(this.levels.keys())) + 1;
    const level: Level = { ...insertLevel, id };
    this.levels.set(id, level);
    return level;
  }
}

export const storage = new MemStorage();
