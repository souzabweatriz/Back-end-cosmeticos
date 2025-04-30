const marcaModel = require("../models/marcaModel");

const getAllMarcas = async (req, res) => {
    try {
        const marcas = await marcaModel.getMarca();
        res.json(marcas)
    } catch (error) {
        res.status(400).json({ message: "Erro ao buscar Marca"});
    }
};

const getMarca = async (req, res) => {
    try {
        const marcas = await marcaModel.getMarcaById(req.params.id);
        if(!marcas){
            return res.status(404).json({message: "Marca não encontrada"});
        }
        return res.status(200).json(marcas);
    } catch (error) {
        res.status(400).json({ message: "Erro ao buscar Marcas" });
    }
};

const createMarca = async (req,res) => {
    try {
        const newMarca = await marcaModel.createNewMarca(req.body);
        return res.status(201).json(newMarca);
    } catch (error) {
        res.status(400).json({message: "Erro ao criar marca"})
    }
};

const updateMarca = async (req, res) => {
    try {
        const updatedMarca = await marcaModel.updateMarca(req.params.id, req.body);
        
        if (!updatedMarca) {
            return res.status(404).json({ message: "Marca não encontrada para atualizar" });
        }

        return res.status(200).json(updatedMarca);
    } catch (error) {
        res.status(400).json({ message: "Erro ao atualizar Marca", error: error.message });
    }
};

const deleteMarca = async (req, res) => {
    try {
        const deleted = await marcaModel.deleteMarca(req.params.id);
        res.json(deleted)
    } catch (error) {
        res.status(400).json({ message: "Erro ao deletar Marca" });
    }
};

module.exports = { getAllMarcas, getMarca, createMarca, updateMarca, deleteMarca}
