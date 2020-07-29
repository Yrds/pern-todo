import { Pool } from "pg";

class DatabaseService {
  private pool: Pool;

  constructor(){
    this.pool = new Pool({
      user: "postgres",
      password: "example",
      host: "localhost",
      port: 5432,
      database: "perntodo"
    })
  }

  public getPool(): Pool {
    return this.pool;
  }
}

const databaseService = new DatabaseService();

export default databaseService;
