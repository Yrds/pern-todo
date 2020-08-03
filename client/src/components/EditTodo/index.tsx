import React, { Component, FormEvent, ChangeEvent } from 'react';
import { Todo } from '../../types/Todo';
import { StyledInputGroup, StyledInput, StyledButton, StyledForm } from '../Styled';

type EditTodoState = {
  newDescription: string
}

type EditTodoProps = {
  todo: Todo,
  onSubmitEdit: (todo: Todo) => void
}

class EditTodo extends Component<EditTodoProps, EditTodoState> {
  readonly state = {
    newDescription: this.props.todo.description
  }

  onFormSubmit(event: FormEvent<HTMLFormElement>){
    event.preventDefault();
    this.props.onSubmitEdit({
      todo_id: this.props.todo.todo_id,
      description: this.state.newDescription
    });
  }

  onInputChange(event: ChangeEvent<HTMLInputElement>){
    this.setState({newDescription: event.target.value });
  }

  render(){
    return (
      <StyledForm onSubmit={e => this.onFormSubmit(e)}>
        <StyledInputGroup>
          <StyledInput value={this.state.newDescription} onChange={e => this.onInputChange(e)}/>
          <StyledButton>Save</StyledButton>
        </StyledInputGroup>
      </StyledForm>
    )
  }
}

export default EditTodo;
