import { Pool } from 'pg';

const pool = new Pool({
  host: process.env.PGHOST,
  user: process.env.PGUSER,
  database: process.env.PGDATABASE,
  password: process.env.PGDPASSWORD,
  port: parseInt(process.env.PGPORT || '5432')
});

export default {
  query: (text: string, params: Array<unknown>) => {
    return pool.query(text, params);
  }
};
