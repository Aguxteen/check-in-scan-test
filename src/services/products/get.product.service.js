import getPool from "../../db/getPool.js";
export const getProduct = async (id) => {
  try {
    //connect
    const pool = await getPool();

    //get all the products
    const response = await pool.query(`SELECT * FROM products WHERE id = ?`, [
      id,
    ]);
    return response;
    // response
  } catch (error) {
    throw error;
  }
};
