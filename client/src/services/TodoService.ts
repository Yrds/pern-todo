import { Todo } from '../types/Todo';

class TodoService {
  public api_url: string = process.env.REACT_APP_API_URL;
  public context: string = "/todos";

  async addTodo(todo: Todo): Promise<Todo> {
    try{
      const response = await fetch(this.api_url + this.context, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(todo)
      })

      return response.json();
    } catch(err) {
      throw new Error(err);
    }
  }

  async getAll(): Promise<Todo[]> {
    try {
      const response = await fetch(this.api_url + this.context);

      return response.json();
    } catch(err) {
      throw new Error(err);
    }
  }

  async delete(todo: Todo): Promise<Response> {
    try {
      const response = await fetch(this.api_url + this.context + '/' + todo.todo_id, {
        method: "DELETE"
      });

      return response;

    } catch(err) {
      throw new Error(err);
    }
  }

  async edit(todo: Todo): Promise<Todo> {
    try {
      const response = await fetch(this.api_url + this.context + '/' + todo.todo_id, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(todo)
      });
      return response.json();
    } catch(err) {
      throw new Error(err);
    }
  }
}

export default TodoService;
