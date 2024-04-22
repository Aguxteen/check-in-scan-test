import getPool from "../../db/getPool.js";
export const patchProduct = async (id, data) => {
  try {
    //connect
    const pool = await getPool();

    // Create a variable query string and the values to modify the requested columns
    let fields = Object.keys(data);
    let query = "UPDATE products SET ";
    let insertData = [];
    fields.forEach((key, index) => {
      query += `${key} = ?`;
      insertData.push(data[key]);

      if (index < fields.length - 1) {
        query += ", ";
      }
    });
    query += " WHERE id = ?";
    insertData.push(id);
    //get all the products
    const response = await pool.query(query, insertData);
    return response;
    // response
  } catch (error) {
    throw error;
  }
};
