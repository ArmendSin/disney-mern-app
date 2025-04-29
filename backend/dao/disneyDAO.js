/**
 * Name: Armend Sinanovic  
 * Date: April 28, 2025  
 * Course: IT-302  
 * Section: 454  
 * Assignment: IT302-Project Phase 5 
 * Email: as554@njit.edu  
 */

import { client } from "../index.js";

class DisneyDAO {
  static async getData({ filterText }) {
    try {
      const collection = client.db("it302").collection("Disney_Characters_as554");

      const query = filterText
        ? { name: { $regex: `^${filterText}`, $options: "i" } }
        : {};

      const data = await collection.find(query).toArray(); // ✅ No pagination, return everything

      return data;
    } catch (error) {
      console.error("Error retrieving data:", error);
      return { error: "Unable to retrieve data" };
    }
  }

  static async getDisneyById(id) {
    try {
      const disneyCollection = client.db("it302").collection("Disney_Characters_as554");
      const feedbackCollection = client.db("it302").collection("feedback");

      const disneyRecord = await disneyCollection.findOne({ _id: parseInt(id) });

      if (!disneyRecord) {
        return null;
      }

      // ✅ Match the feedback using the integer id (NOT ObjectId)
      const feedback = await feedbackCollection
        .find({ disneyId: parseInt(id) })
        .toArray();

      disneyRecord.feedback = feedback;

      return disneyRecord;
    } catch (error) {
      console.error("Error retrieving single record with feedback:", error);
      return null;
    }
  }
}

export default DisneyDAO;
