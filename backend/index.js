import { MongoClient } from "mongodb";
import dotenv from "dotenv";
import express from "express";

import disneyRoutes from "./api/disney.route.js";
import FeedbackDAO from "./dao/feedbackDAO.js";

dotenv.config();

const app = express();
app.use(express.json());

app.use("/api/disney", disneyRoutes);

const client = new MongoClient(process.env.MONGO_URI);

async function connectDB() {
    try {
        await client.connect();
        const db = client.db(process.env.DB_NAME);

        await FeedbackDAO.injectDB(db);

        console.log("Connected to MongoDB and FeedbackDAO initialized");
    } catch (error) {
        console.error("MongoDB connection error:", error);
        process.exit(1);
    }
}

await connectDB(); // ✅ This is critical

export { app, connectDB, client }; // ✅ Required by disneyDAO and server.js
