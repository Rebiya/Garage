// Import the mysql2 module Promise Wrapper
const mysql = require("mysql2/promise");
// Prepare connection parameters we use to connect to the database
const dbConfig = {
  // connectionLimit: 10,
  password: process.env.DB_PASS,
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
};

//check if successfully connected to the database based on the connection parameters
const connection = mysql.createConnection(dbConfig);
connection
  .then(() => {
    console.log("Connected to the database successfully");
  })
  .catch((err) => {
    console.error("Error connecting to the database: ", err);
  });

const pool = mysql.createPool(dbConfig);
// Create the query function that will execute the SQL queries asynchronously
async function query(sql, params) {
  const connection = await pool.getConnection();
  try {
    const [rows, fields] = await connection.execute(sql, params);
    return rows;
  } catch (error) {
    console.log(error);
  } finally {
    connection.release();
  }
}

// Export the query function for use in the application
module.exports = { query };
