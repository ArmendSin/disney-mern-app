import { ObjectId } from "mongodb";

let feedback;

export default class FeedbackDAO {
    static async injectDB(conn) {
        if (feedback) return;
        try {
            feedback = conn.collection("feedback");
        } catch (error) {
            console.error(`Unable to establish feedback collection: ${error}`);
        }
    }

    static async addFeedback({ disneyId, text, user_name, user_id, date }) {
        try {
            const feedbackDoc = {
                disneyId: disneyId, 
                text,
                user_name,
                user_id,
                lastModified: date,
            };
            return await feedback.insertOne(feedbackDoc);
        } catch (error) {
            console.error(`Error adding feedback: ${error}`);
            return { error };
        }
    }

    static async updateFeedback({ feedbackId, text, user_id, date }) {
        try {
            return await feedback.updateOne(
                { _id: new ObjectId(feedbackId), user_id },
                { $set: { text, lastModified: date } }
            );
        } catch (error) {
            console.error(`Error updating feedback: ${error}`);
            return { error };
        }
    }

    static async deleteFeedback({ feedbackId, user_id }) {
        try {
            return await feedback.deleteOne({
                _id: new ObjectId(feedbackId),
                user_id,
            });
        } catch (error) {
            console.error(`Error deleting feedback: ${error}`);
            return { error };
        }
    }
}
