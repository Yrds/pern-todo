import React, { Component, FormEvent, ChangeEvent } from 'react';
import { Todo } from '../../types/Todo';

type EditTodoState = {
  newTodo: Todo
}

type EditTodoProps = {
  todo: Todo,
  onSubmitEdit: (todo: Todo) => void
}

class EditTodo extends Component<EditTodoProps, EditTodoState> {
  readonly state = {
    newTodo: this.props.todo
  }

  onFormSubmit(event: FormEvent<HTMLFormElement>){
    event.preventDefault();
    this.props.onSubmitEdit(this.state.newTodo);
  }

  onInputChange(event: ChangeEvent<HTMLInputElement>){
    const newTodo: Todo = this.state.newTodo;
    newTodo.description = event.target.value;
    this.setState({newTodo});
  }

  render(){
    return (
      <form onSubmit={e => this.onFormSubmit(e)}>
        <input value={this.state.newTodo.description} onChange={e => this.onInputChange(e)}/>
        <button>Save</button>
      </form>
    )
  }
}

export default EditTodo;
