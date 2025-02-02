const mysql = require("mysql2/promise");

const dbConfig = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  connectionLimit: 10,
  multipleStatements: true // Enable multiple statements
};

const pool = mysql.createPool(dbConfig);

async function query(sql, params) {
  const [rows, fields] = await pool.execute(sql, params);
  return rows;
}

// Check database connection
(async () => {
  try {
    const conn = await pool.getConnection();
    await conn.query("SELECT 1");
    console.log("Database connection successful");
    conn.release();
  } catch (err) {
    console.error("Database connection failed:", err);
  }
})();

module.exports = query;
