import getPool from "../../db/getPool.js";
import crypto from "node:crypto";
export const createUser = async (user) => {
  try {
    //connect
    const pool = await getPool();

    //check if the user exist

    const checkUser = await pool.query(`SELECT * FROM users WHERE email = ?`, [
      user.email,
    ]);
    if (checkUser.length > 0) {
      throw new Error("There is already a user with this email");
    }
    //register
    const UUID = crypto.randomUUID();
    const response = await pool.query(
      `INSERT INTO users (email, password, id) VALUES (?, ?, ?)`,
      [user.email, user.password, UUID]
    );
    return response;
    // response
  } catch (error) {
    throw error;
  }
};
