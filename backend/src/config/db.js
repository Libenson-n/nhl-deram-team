import pg from "pg";
import "dotenv/config";

const { Pool } = pg;
const pool = new Pool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  port: process.env.DB_PORT,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

pool.on("connect", () => {
  console.log("Connection pool established with database");
});

export default pool;
