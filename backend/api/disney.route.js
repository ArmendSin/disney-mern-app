import express from "express";
import DisneyController from "./disney.controller.js";

const router = express.Router();

router.get("/", DisneyController.getData);

export default router;
