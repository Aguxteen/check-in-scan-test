import mariadb from "mariadb";
import dotenv from "dotenv";

dotenv.config();
// Create and export pool for database

let pool;
const getPool = async () => {
  try {
    if (!pool) {
      const poolTemp = mariadb.createPool({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        port: process.env.DB_PORT,
      });
      await poolTemp.query(
        `CREATE DATABASE IF NOT EXISTS ${process.env.DB_NAME}`
      );

      pool = mariadb.createPool({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        port: process.env.DB_PORT,
      });
    }
    return pool;
  } catch (error) {
    throw new Error("Database connecting error");
  }
};

export default getPool;
