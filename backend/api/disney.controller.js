import DisneyDAO from "../dao/disneyDAO.js";

class DisneyController {
    static async getData(req, res) {
        try {
            const filterText = req.query.filter || "";

            const data = await DisneyDAO.getData({ filterText }); 

            res.json(data);
        } catch (error) {
            console.error("Error in getData:", error);
            res.status(500).json({ error: "An error occurred while fetching data" });
        }
    }

    static async apiGetDisneyById(req, res) {
        try {
            const id = req.params.id;
            const record = await DisneyDAO.getDisneyById(id);

            if (!record) {
                return res.status(404).json({ message: "Record not found" });
            }

            res.json(record);
        } catch (e) {
            console.error("Error in apiGetDisneyById:", e);
            res.status(500).json({ error: "An error occurred while fetching the record" });
        }
    }
}

export default DisneyController;
