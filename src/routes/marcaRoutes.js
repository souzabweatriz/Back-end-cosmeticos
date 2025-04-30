const express = require("express");
const router = express.Router();
const marcaController = require("../controllers/marcaController");
const apiKeyMiddleware = require("../config/apiKey")

router.use(apiKeyMiddleware);


router.get("/marcas", marcaController.getAllMarcas);
router.get("/marcas/:id", marcaController.getMarca);
router.post("/marcas", marcaController.createMarca);
router.put("/marcas/:id", marcaController.updateMarca);
router.delete("/marcas/:id", marcaController.deleteMarca);

module.exports = router;