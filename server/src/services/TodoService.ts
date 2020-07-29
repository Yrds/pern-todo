import databaseService from './DatabaseService';
import { Pool, QueryResult } from 'pg';

export type Todo = {
  id?: number,
  description: string,
}

export default class TodoService {
  public pool: Pool;

  constructor(){
    this.pool = databaseService.getPool();
  }

  async create(todo: Todo): Promise<Todo> {
    try {
      const result = await this.pool.query("INSERT INTO todo(description) VALUES($1)",
        [todo.description]);
      return result.rows[0];
    } catch(err){
      throw new Error('Unexpected error ' + err.message);
    }
  }

  async getAll(): Promise<Todo[]> {
    try {
      const result = await this.pool.query("SELECT * FROM todo");
      return result.rows as Todo[];
    }
    catch(err) {
      throw new Error('Unexpected error ' + err.message);
    }
  }

  async get(todoId: number): Promise<Todo> {
    try {
      const result = await this.pool.query(
        "SELECT * FROM todo WHERE todo_id = $1", 
        [todoId]
      );
      return result.rows[0] as Todo;
    }
    catch(err) {
      throw new Error('Unexpected error ' + err.message);
    }
  }

  async update(id: number, todo: Todo): Promise<Todo>{
    try {
      const result = await this.pool.query(
        "UPDATE todo SET descriptions = $1 where todo_id = $2", 
        [todo.description, id]
      );
      return result.rows[0] as Todo;
    }
    catch(err) {
      throw new Error('Unexpected error ' + err.message);
    }
  }

  async delete(id: number): Promise<Todo> {
    try {
      const result = await this.pool.query(
        "DELETE from todo WHERE todo_id = $1",
        [id]
      );
      return result.rows[0] as Todo;
    }
    catch(err) {
      throw new Error('Unexpected error ' + err.message);
    }
  }
}
