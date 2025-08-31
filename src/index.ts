import express, { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const app = express();
const prisma = new PrismaClient();
const PORT = 3000;

app.use(express.json());

// Root route
app.get("/", (req: Request, res: Response) => {
  res.send("Hello! Server is running.");
});

// GET all users
app.get("/users", async (req: Request, res: Response) => {
  const users = await prisma.user.findMany();
  res.json(users);
});

// Create a user
app.post("/users", async (req: Request, res: Response) => {
  const { name, email } = req.body;
  const user = await prisma.user.create({ data: { name, email } });
  res.json(user);
});

app.listen(PORT, () => console.log(`🚀 Server running at http://localhost:${PORT}`));
