import DisneyDAO from "../dao/disneyDAO.js";

class DisneyController {
    static async getData(req, res) {
        try {
            const itemsPerPage = parseInt(req.query.itemsPerPage) || 10;
            const pageNumber = parseInt(req.query.pageNumber) || 1;
            const filterText = req.query.filter || "";

            const data = await DisneyDAO.getData({ itemsPerPage, pageNumber, filterText });

            res.json(data);
        } catch (error) {
            res.status(500).json({ error: "An error occurred while fetching data" });
        }
    }
}

export default DisneyController;
