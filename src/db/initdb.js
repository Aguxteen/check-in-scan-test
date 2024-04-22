import getPool from "./getPool.js";
import crypto from "node:crypto";
const initDB = async () => {
  const pool = await getPool();

  try {
    // Drop all databases
    await pool.query(`DROP TABLE IF EXISTS products, users`);

    console.log("Creating tables");
    // Create table users
    await pool.query(`
    CREATE TABLE IF NOT EXISTS users (
      id VARCHAR(36) PRIMARY KEY,
      email VARCHAR(100) UNIQUE NOT NULL,
      password VARCHAR(100) NOT NULL,
      createdAt DATETIME DEFAULT CURRENT_TIMESTAMP
    )
    `);
    const UUID = crypto.randomUUID();

    // insert first user
    await pool.query(
      `
      INSERT INTO users (email, password, id) VALUES (?, ?, ?)
    `,
      [process.env.ADMIN_EMAIL, process.env.ADMIN_PASSWORD, UUID]
    );

    // create product table
    await pool.query(`
    CREATE TABLE IF NOT EXISTS products (
      id VARCHAR(36) PRIMARY KEY,
      title VARCHAR(100) NOT NULL,
      description VARCHAR(255) NOT NULL,
      status ENUM('stock', 'sin stock') DEFAULT 'stock' NOT null,
      createdAt DATETIME DEFAULT CURRENT_TIMESTAMP
    )
    `);
    console.log("Tables created");
  } catch (error) {
    throw new Error("Error creating tables");
  } finally {
    await pool.end();
  }
};

initDB();
