import getPool from "../../db/getPool.js";
import crypto from "node:crypto";
export const createProduct = async (data) => {
  try {
    //connect
    const pool = await getPool();

    //register
    const UUID = crypto.randomUUID();
    const status = data.status ?? "stock";
    const response = await pool.query(
      `INSERT INTO products (title, description, status, id) VALUES (?, ?, ?, ?)`,
      [data.title, data.description, status, UUID]
    );
    response.UUID = UUID;
    return response;
    // response
  } catch (error) {
    throw new Error("Error creating product");
  }
};
