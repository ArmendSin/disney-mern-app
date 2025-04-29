import FeedbackDAO from "../dao/feedbackDAO.js";

export default class FeedbackController {
    static async apiPostFeedback(req, res) {
        try {
            let { disneyId, text, user_name, user_id } = req.body;
            const date = new Date();

            disneyId = parseInt(disneyId);

            const response = await FeedbackDAO.addFeedback({
                disneyId,
                text,
                user_name,
                user_id,
                date,
            });

            res.json({ status: "success", feedback: response });
        } catch (error) {
            console.error("Error in apiPostFeedback:", error); 
            res.status(500).json({ error: error.message });
        }
    }

    static async apiUpdateFeedback(req, res) {
        try {
            const { feedbackId, text, user_id } = req.body;
            const date = new Date();

            const response = await FeedbackDAO.updateFeedback({
                feedbackId,
                text,
                user_id,
                date,
            });

            res.json({ status: "success", feedback: response });
        } catch (error) {
            console.error("Error in apiUpdateFeedback:", error); 
            res.status(500).json({ error: error.message });
        }
    }

    static async apiDeleteFeedback(req, res) {
        try {
            const { feedbackId, user_id } = req.body;

            const response = await FeedbackDAO.deleteFeedback({
                feedbackId,
                user_id,
            });

            res.json({ status: "success", feedback: response });
        } catch (error) {
            console.error("Error in apiDeleteFeedback:", error); 
            res.status(500).json({ error: error.message });
        }
    }
}
