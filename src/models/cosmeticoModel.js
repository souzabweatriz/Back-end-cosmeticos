const pool = require("../config/database");

const getCosmeticos = async () =>{
    const result = await pool.query("SELECT * FROM cosmeticos");
    return result.rows;
};

const getCosmeticosById = async (id) => {
    const result = await pool.query("SELECT * FROM cosmeticos WHERE id = $1", [id]);
    return result.rows[0];
};

const createCosmetico = async (type, price, amount, photo, marca_id) => {
    const result = await pool.query(
        "INSERT INTO cosmeticos (type, price, amount, photo, marca_id) VALUES ($1, $2, $3, $4, $5) RETURNING *", 
        [type, price, amount, photo, marca_id]
    );
    return result.rows[0];
};

const updateCosmetico = async (id, type, price, amount, photo, marca_id) => {
    const result = await pool.query(
        "UPDATE cosmeticos SET type = $1, price = $2, amount = $3, marca_id = $4 WHERE id = $5 RETURNING *",
        [type, price, amount, photo, marca_id, id]
    );
    return result.rows[0];
};

const deleteCosmetico = async (id) => {
    const result = await pool.query(
        "DELETE FROM cosmeticos WHERE id = $1 RETURNING *", 
        [id]    
    );
    return result.rows;
    return { message: "Usuário deletado com sucesso." };
};

module.exports = {getCosmeticos, getCosmeticosById, createCosmetico, updateCosmetico, deleteCosmetico}