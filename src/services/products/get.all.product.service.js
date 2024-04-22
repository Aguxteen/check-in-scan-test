import getPool from "../../db/getPool.js";
export const getAllProducts = async () => {
  try {
    //connect
    const pool = await getPool();

    //get all the products
    const response = await pool.query(`SELECT * FROM products`);
    return response;
    // response
  } catch (error) {
    throw error;
  }
};
