const express = require("express");
const router = express.Router();
const marcaController = require("../controllers/cosmeticoController");
const apiKeyMiddleware = require("../config/apiKey")

router.use(apiKeyMiddleware);


router.get("/marcas", marcaController.getAllCosmeticos);
router.get("/marcas/:id", marcaController.getCosmeticos);
router.post("/marcas", marcaController.createCosmetico);
router.put("/marcas/:id", marcaController.updateCosmetico);
router.delete("/marcas/:id", marcaController.deleteCosmetico);

