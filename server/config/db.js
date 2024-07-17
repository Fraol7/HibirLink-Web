import pkg from 'pg';
const { Pool } = pkg;

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT, 
});

async function query(text, params) {
  return pool.query(text, params);
}

const startTransaction = async () => {
  const client = await pool.connect();
  await client.query('BEGIN');
  return client;
};

const commitTransaction = async (client) => {
  await client.query('COMMIT');
  client.release();
};

const rollbackTransaction = async (client) => {
  await client.query('ROLLBACK');
  client.release();
};

export { pool, query, startTransaction, commitTransaction, rollbackTransaction };
