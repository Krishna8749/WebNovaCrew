import { type User, type InsertUser, type Lead, type InsertLead } from "../shared/schema";
import { randomUUID } from "crypto";
import fs from "fs/promises";
import path from "path";

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
    const lead: Lead = { ...insertLead, id, createdAt };
    this.leads.set(id, lead);

    // Also write to data/leads.json as a local file backup
    try {
      const dataDir = path.resolve(process.cwd(), "data");
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
      console.log(`[Storage] Saved lead to local file backup: ${filePath}`);
    } catch (err) {
      console.error("[Storage] Failed to save lead to local file backup:", err);
    }

    return lead;
  }
}

export const storage = new MemStorage();
