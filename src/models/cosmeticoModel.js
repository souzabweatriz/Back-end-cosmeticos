const pool = require("../config/database");

const getCosmeticos = async () =>{
    const result = await pool.query("SELECT * FROM cosmeticos");
    return result.rows;
};

const getCosmeticosById = async (id) => {
    const result = await pool.query("SELECT * FROM cosmeticos WHERE id = $1, [id]");
    return result.rows[0];
};

const createCosmetico = async (type, price, amount) => {
    const result = await pool.query(
        "INSERT INTO cosmeticos (type, price, amount) VALUES ($1, $2, $3) RETURNING *", 
        [type, price, amount]
    );
    return result.rows[0];
};

const updateCosmetico = async (id, type, price, amount) => {
    const result = await pool.query(
        "UPDATE cosmeticos SET type = $1, price = $2, amount = $3 WHERE id = $4 RETURNING *"
        [type, price, amount, id]
    );
};

const deleteCosmetico = async (id) => {
    const result = await pool.query(
        "DELETE FROM cosmeticos WHERE id = $1 RETURNING *", 
        [id]    
    );
};

module.exports = {getCosmeticos, getCosmeticosById, createCosmetico, updateCosmetico, deleteCosmetico}