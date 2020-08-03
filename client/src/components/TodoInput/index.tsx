import React, { Component, FormEvent } from 'react';
import { Todo } from '../../types/Todo';
import {  StyledInput, StyledButton, StyledInputGroup } from '../Styled';
import { CustomStyledForm } from './styles';


type TodoInputProps = {
  onAdd: (todo: Todo) => void
}

type TodoInputState = {
  todo: Todo
}

class TodoInput extends Component<TodoInputProps, TodoInputState> {

  constructor(props: TodoInputProps){
    super(props);

    this.onSubmitForm = this.onSubmitForm.bind(this);
  }

  onSubmitForm(e: FormEvent<HTMLFormElement>){
    e.preventDefault();
    this.props.onAdd(this.state.todo);
    this.setState({todo: {description: ''}})
  }

  readonly state: TodoInputState = {
    todo: { description: '' }
  }

  render(){
    return (
      <CustomStyledForm onSubmit={this.onSubmitForm}>
        <StyledInputGroup>
          <StyledInput
            type="text"
            placeholder="Learn to cook..."
            value={this.state.todo.description}
            onChange={e => this.setState({todo: {description: e.target.value}})}
          />
          <StyledButton color={"primary"}>Add</StyledButton>
        </StyledInputGroup>
      </CustomStyledForm>
    )
  }
}

export default TodoInput;
