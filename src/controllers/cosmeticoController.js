const cosmeticoModel = require("../models/cosmeticoModel")

const getAllCosmeticos = async (req, res) => {
    try {
        const { type, price, amount } = req.query
        const cosmeticos = await cosmeticoModel.getCosmeticos({type, price, amount});
        return res.status(200).json(cosmeticos);
    } catch (error) {
        console.error("Erro ao buscar Cosméticos:", error);
        res.status(400).json({ message: "Erro ao buscar Cosméticos" });
    }
};

const getCosmeticos = async (req, res) => {
    try {
        const cosmeticos = await cosmeticoModel.getCosmeticosById(req.params.id);
        if(!cosmeticos){
            return res.status(404).json({message: "Cosmético não encontrado"})
        }
        res.json(cosmeticos)
    } catch (error) {
        res.status(500).json({ message: "Erro ao buscar cosmético." });
    }
};

const createCosmetico = async (req, res) => {
    try {
        const { type, price, amount, marca_id } = req.body;
        const photo = req.file ? req.file.filename : null;

        if (!type || !price || !amount || !marca_id) {
            return res.status(400).json({ message: "Todos os campos obrigatórios devem ser preenchidos." });
        }

        const newCosmetico = await cosmeticoModel.createCosmetico(type, price, amount, marca_id, photo);

        res.status(201).json({
            message: "Cosmético criado com sucesso!",
            data: newCosmetico,
        });
    } catch (error) {
        res.status(500).json({
            message: "Erro ao criar cosmético.",
            error: error.message,
        });
    }
};

const updateCosmetico = async (req, res) => {
    try {
        const {type, price, amount, photo, marca_id} = req.body;
        const updatedCosmetico = await cosmeticoModel.updateCosmetico(req.params.id, type, price, amount, photo, marca_id);
        if(!updatedCosmetico){
            return res.status(404).json({message: "Cosmético não encontrado"})
        }
        res.json(updatedCosmetico)
    } catch (error) {
        res.status(400).json({ message: "Erro ao atualizar Cosmético" });
    }
};

const deleteCosmetico = async (req, res) => {
    try {
        const message = await cosmeticoModel.deleteCosmetico(req.params.id);
        res.json(message);
    } catch (error) {
        res.status(500).json({message: "Erro ao deletar Cosmético"})
    }
};


module.exports = {getAllCosmeticos, getCosmeticos, createCosmetico, updateCosmetico, deleteCosmetico}