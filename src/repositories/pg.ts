import { Pool } from 'pg'

export const myPG = new Pool({
    connectionString: process.env.DB_URL,
    ssl: {
      rejectUnauthorized: false  
    }
})
