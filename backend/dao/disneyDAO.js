import { client } from "../index.js";

class DisneyDAO {
    static async getData({ itemsPerPage, pageNumber, filterText }) {
        try {
            const collection = client.db("it302").collection("Disney_Characters_as554"); 

            const query = filterText ? { name: { $regex: `^${filterText}`, $options: "i" }
        } : {};

            const data = await collection
                .find(query)
                .skip((pageNumber - 1) * itemsPerPage)
                .limit(itemsPerPage)
                .toArray();

            return data;
        } catch (error) {
            console.error("Error retrieving data:", error);
            return { error: "Unable to retrieve data" };
        }
    }

    static async getDisneyById(id) {
        try {
            const collection = client.db("it302").collection("Disney_Characters_as554");

            const record = await collection.findOne({ _id: parseInt(id) });

            return record;
        } catch (error) {
            console.error("Error retrieving single record:", error);
            return null;
        }
    }
}

export default DisneyDAO
