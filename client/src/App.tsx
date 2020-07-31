import React, { Component } from 'react';
import { GlobalStyle } from './App.styles';
import { StyledContainer } from './components/Styled';

//STOPED USING DUE TO UNSAFE_componentWillMount for now, <link> tag it's on public/ directory
//import { Helmet } from 'react-helmet';

//Types
import { Todo } from './types/Todo';

//Services
import TodoService from './services/TodoService';

//Components
import Header from './components/Header';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import Footer from './components/Footer';

type AppState = {
  todos: Todo[];
}

class App extends Component<any, AppState> {

  readonly state: AppState = {
    todos: []
  }

  private todoService = new TodoService();

  constructor(props: any){
    super(props);

    this.addTodo = this.addTodo.bind(this);
    this.getAllTodos = this.getAllTodos.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
    this.editTodo = this.editTodo.bind(this);
  }

  public getAllTodos() {
    this.todoService.getAll()
      .then((todos: Todo[]) => this.setState({todos}))
      .catch(err => console.error(err))
  }

  public addTodo(todo: Todo) {
    this.todoService.addTodo(todo)
      .then((todo: Todo) => this.getAllTodos())
      .catch(err => console.error(err));
  }

  public deleteTodo(todo: Todo) {
    this.todoService.delete(todo)
      .then((res: Response) => this.getAllTodos())
      .catch(err => console.error(err));
  }

  public editTodo(todo: Todo) {
    this.todoService.edit(todo)
      .then((todo: Todo) => this.getAllTodos())
      .catch(err => console.error(err));
  }

  componentDidMount(){
    this.getAllTodos();
  }

  render() {
    return (
      <>
        {/*
        <Helmet>
          <link href="https://fonts.googleapis.com/css2?family=Quicksand&display=swap" rel="stylesheet"></link>
        </Helmet>
          */}

        <GlobalStyle/>
        <Header/>
        <StyledContainer>
          <TodoInput onAdd={this.addTodo}/>
          <h1>Todo List</h1>
          <TodoList todos={this.state.todos}
            onDelete={this.deleteTodo}
            onEdit={this.editTodo}/>
        </StyledContainer>
        <Footer/>
      </>
    );
  }
}

export default App;
