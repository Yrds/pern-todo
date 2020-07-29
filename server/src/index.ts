import express, { json, Application, Request, Response } from "express";
import cors from 'cors';
import TodoService, { Todo } from './services/TodoService';

const app: Application = express();
const todoService = new TodoService();

app.use(cors());
app.use(express.json());

app.post("/todos", (req: Request, res: Response) => {
  const todo: Todo = req.body;
  todoService.create(todo).
    then(newTodo => res.json(newTodo))
    .catch(err => res.json(err.message));
})

app.get("/todos", (req: Request, res: Response) => {
  todoService.getAll()
    .then((allTodos: Todo[]) => res.json(allTodos))
    .catch(err => res.json(err.message));
})

app.get("/todos/:id", (req: Request, res: Response) => {
  const id: number = Number(req.params.id);
  todoService.get(id)
    .then((todo: Todo) => res.json(todo))
    .catch(err => res.json(err));
})

app.put("/todos/:id", (req: Request, res: Response) => {
  const id: number = Number(req.params.id);
  const todo: Todo = req.body;
  todoService.update(id, todo)
    .then((todo: Todo) => res.json(todo))
    .catch(err => res.json(err))
})

app.delete("/todos/:id", (req: Request, res: Response) => {
  const id: number = Number(req.params.id);
  todoService.delete(id)
    .then((todo: Todo) => res.json(todo))
    .catch(err => res.json(err))
})

app.listen(5000, () => {
  console.log("server started");
})
