import getConnection from '../db/dbConnect';

class User {
  async getUser(id?: string | number ) {
    const client = await getConnection();
    const response = await client.query(`select get_user(${id});`);
    console.log(response.rows[0]);
  }
}

export default User;