import express from "express";
import DisneyController from "./disney.controller.js";
import FeedbackController from "./feedback.controller.js"; 

const router = express.Router();

router.get("/", DisneyController.getData);

router.post("/feedback", FeedbackController.apiPostFeedback);
router.put("/feedback", FeedbackController.apiUpdateFeedback);
router.delete("/feedback", FeedbackController.apiDeleteFeedback);

export default router;
