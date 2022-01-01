import { Pool } from "pg";

const pool = new Pool({
	user: "postgres",
	password: "0218",
	host: "localhost",
	port: "5432",
	database: "Practice",
});

pool.connect();
export default pool;
