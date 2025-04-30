const express = require("express");
const router = express.Router();
const cosmeticoController = require("../controllers/cosmeticoController");
const reportController = require("../controllers/reportController.js");
const apiKeyMiddleware = require("../config/apiKey");
const upload = require("../config/upload.js");

router.use(apiKeyMiddleware);

router.get("/cosmeticos", cosmeticoController.getAllCosmeticos);
router.get("/cosmeticos/:id", cosmeticoController.getCosmeticos);
router.post("/cosmeticos", upload.single("photo"), cosmeticoController.createCosmetico);
router.put("/cosmeticos/:id", cosmeticoController.updateCosmetico);
router.delete("/cosmeticos/:id", cosmeticoController.deleteCosmetico);
router.get('/api/export-pdf', reportController.exportCosmeticoPDF);

module.exports = router;