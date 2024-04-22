import getPool from "../../db/getPool.js";
import crypto from "node:crypto";
export const loginUser = async (user) => {
  try {
    //connect
    const pool = await getPool();
    //register
    const response = await pool.query(`SELECT * FROM users WHERE email = ?`, [
      user.email,
    ]);
    if (response.length === 0) throw new Error("User not found");
    return response;
  } catch (error) {
    throw error;
  }
};
