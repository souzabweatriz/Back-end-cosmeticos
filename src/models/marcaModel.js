const pool = require("../config/database");

const getMarca = async (name) => {
    if (!name) {
        const result = await pool.query(
            `SELECT 
            marcas.*, 
            cosmeticos.type AS cosmetico_type,
            cosmeticos.price AS cosmetico_price, 
            cosmeticos.amount AS cosmetico_amount
            FROM marcas
            LEFT JOIN cosmeticos ON marcas.id = cosmeticos.marca_id`
        );
        return result.rows;
    } else {
        const result = await pool.query(
            `SELECT 
            marcas.*, 
            cosmeticos.type AS cosmetico_type, 
            cosmeticos.price AS cosmetico_price, 
            cosmeticos.amount AS cosmetico_amount
            FROM marcas
            LEFT JOIN cosmeticos ON marcas.id = cosmeticos.marca_id
            WHERE marcas.name ILIKE $1`
        );
        return result.rows;
    }
};
const getMarcaById = async (id) => {
    const result = await pool.query(
        `SELECT 
        marcas.*, 
        cosmeticos.type AS cosmetico_type, 
        cosmeticos.price AS cosmetico_price, 
        cosmeticos.amount AS cosmetico_amount
        FROM marcas
        LEFT JOIN cosmeticos ON marcas.id = cosmeticos.marca_id
        WHERE marcas.id = $1`,
        [id]
    );
    return result.rows[0];
};

const updateMarca = async (id, name) => {
    const result = await pool.query(
        "UPDATE marcas SET name = $1 WHERE id = $2 RETURNING *",
        [name, id]
    );
    return result.rows[0];
}

const createNewMarca = async (name) => {
    const result = await pool.query(
        `INSERT INTO marcas (name) VALUES ($1) RETURNING *`,
        [name]
    );
    return result.rows[0];
};

const deleteMarca = async (id) => {
    const result = await pool.query("DELETE FROM marcas WHERE id = $1 RETURNING *", [id]);

    if (result.rowCount === 0) {
        return { error: "Marca não encontrada." };
    }

    return { message: "Marca deletada com sucesso." };
};

module.exports = { getMarca, getMarcaById, createNewMarca, updateMarca, deleteMarca }