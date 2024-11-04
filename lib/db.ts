
import { Pool, Client } from 'pg';

// Define the database configuration
const pool = new Pool({
  user: 'postgres',  
  host: 'junction.proxy.rlwy.net',     
  database: 'railway',  
  password: 'upktfUCmpAXYDhVPUHTKjQsJbPnWJcfn', 
  port: 48157,  
});


export const getClient = async (): Promise<Client> => {
  const client = await pool.connect();
  return client;
};
