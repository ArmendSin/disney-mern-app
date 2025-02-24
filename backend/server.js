import express from "express";
import cors from "cors";
import { connectDB } from "./index.js";
import disneyRoutes from "./api/disney.route.js"; 
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/v1/as554/disney", disneyRoutes);

const PORT = process.env.PORT || 5001;

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`🚀 Server running on port ${PORT}`);
    });
});
