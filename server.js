require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");
const marcaRoutes = require("./src/routes/marcaRoutes");
const cosmeticoRoutes = require("./src/routes/cosmeticoRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", cosmeticoRoutes);
app.use("/api", marcaRoutes);
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
});
