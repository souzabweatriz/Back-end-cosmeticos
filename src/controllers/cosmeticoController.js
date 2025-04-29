const cosmeticoModel = require ("../models/cosmeticoModel");

const getAllCosmeticos = async (req, res) => {
    try {
        const cosmeticos = await cosmeticoModel.getCosmeticos();
        res.json(cosmeticos);
    } catch (error) {
        res.status(400).json({error: "Erro ao buscar cosméticos"});
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

const createCosmetico = async (req, res) =>{
    try {
        const {type, price, amount} = req.body;
        const newCosmetico = await cosmeticoModel.createCosmetico(type, price, amount);
        res.status(201).json(newCosmetico)
    } catch (error) {
        console.log(error);
        res.status(400).json({ message: "Erro ao criar Cosmético" });
    }
};

const updateCosmetico = async (req, res) => {
    try {
        const {type, price, amount} = req.body;
        const updatedCosmetico = await cosmeticoModel.updateCosmetico(req.params.id, type, price, amount);
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