const express = require("express");
const router = express.Router();
const cosmeticoController = require("../controllers/cosmeticoController");
const apiKeyMiddleware = require("../config/apiKey")

router.use(apiKeyMiddleware);

router.get("/cosmeticos", cosmeticoController.getAllCosmeticos);
router.get("/cosmeticos/:id", cosmeticoController.getCosmeticos);
router.post("/cosmeticos", cosmeticoController.createCosmetico);
router.put("/cosmeticos/:id", cosmeticoController.updateCosmetico);
router.delete("/cosmeticos/:id", cosmeticoController.deleteCosmetico);


module.exports = router;