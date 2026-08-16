import { type User, type InsertUser, type Lead, type InsertLead } from "../shared/schema";
import { randomUUID } from "crypto";
import fs from "fs/promises";
import path from "path";
import os from "os";

// modify the interface with any CRUD methods
// you might need

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createLead(lead: InsertLead): Promise<Lead>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private leads: Map<string, Lead>;

  constructor() {
    this.users = new Map();
    this.leads = new Map();
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createLead(insertLead: InsertLead): Promise<Lead> {
    const id = randomUUID();
    const createdAt = new Date().toISOString();
    const lead: Lead = {
      id,
      name: insertLead.name,
      email: insertLead.email,
      phone: insertLead.phone ?? null,
      service: insertLead.service,
      budget: insertLead.budget ?? null,
      message: insertLead.message,
      createdAt,
    };
    this.leads.set(id, lead);

    // Also write to leads backup file safely
    try {
      const isServerless = Boolean(process.env.VERCEL || process.env.AWS_LAMBDA_FUNCTION_NAME);
      const dataDir = isServerless ? os.tmpdir() : path.resolve(process.cwd(), "data");
      await fs.mkdir(dataDir, { recursive: true });
      const filePath = path.join(dataDir, "leads.json");
      
      let currentLeads: Lead[] = [];
      try {
        const fileContent = await fs.readFile(filePath, "utf-8");
        currentLeads = JSON.parse(fileContent);
      } catch {
        // File does not exist or invalid JSON, start fresh
      }
      
      currentLeads.push(lead);
      await fs.writeFile(filePath, JSON.stringify(currentLeads, null, 2), "utf-8");
      console.log(`[Storage] Saved lead to backup: ${filePath}`);
    } catch (err) {
      console.error("[Storage] Failed to save lead to backup:", err);
    }

    return lead;
  }
}

export const storage = new MemStorage();
