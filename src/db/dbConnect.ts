import { Client } from 'pg';

const port: number = parseInt(<string>process.env.SERVER_PORT_DB, 10)

async function getConnection() {
 
  const client = new Client({
    user: process.env.SERVER_USER_DB,
    host: process.env.SERVER_HOST_DB,
    database: process.env.SERVER_DATABASE_DB,
    password: process.env.SERVER_PASSWORD_DB,
    port,
  })
  
  
  client.connect((error) => {
    if (error) throw error;
    console.log(`DB connect on port: ${port}`)
  })

  return client;
}



export default getConnection;