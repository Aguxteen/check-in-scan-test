import getPool from "../../db/getPool.js";
export const deleteProduct = async (id) => {
  try {
    //connect
    const pool = await getPool();

    //get all the products
    const response = await pool.query(`DELETE FROM products WHERE id = ?`, [
      id,
    ]);
    return response;
    // response
  } catch (error) {
    throw error;
  }
};
