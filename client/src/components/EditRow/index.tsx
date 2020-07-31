import React, { Component } from 'react';
import { Todo } from '../../types/Todo';
import EditTodo from '../EditTodo';
import Modal from 'react-modal';
import {StyledButton, StyledInputGroup} from '../Styled';

type EditRowState = {
  modalVisible: boolean
}

type EditRowProps = {
  todo: Todo,
  onDelete: (todo: Todo) => void,
  onEdit: (todo: Todo) => void
}

class EditRow extends Component<EditRowProps, EditRowState> {
  readonly state = {
    modalVisible: false
  }

  openModal(){
    this.setState({modalVisible: true});
  }

  closeModal(){
    this.setState({modalVisible: false});
  }

  onSubmitEdit(todo: Todo){
    console.log('testado');
    this.closeModal();
    this.props.onEdit(todo);
  }


  render(){
    return (
      <tr>
        <td>{this.props.todo.description}</td>
        <td>
          <Modal isOpen={this.state.modalVisible} ariaHideApp={false}>
            <EditTodo todo={this.props.todo} onSubmitEdit={(todo: Todo) => this.onSubmitEdit(todo)} />
            <StyledButton onClick={_ => this.closeModal()}>Close</StyledButton>
          </Modal>
          <StyledInputGroup>
            <StyledButton onClick={_ => this.openModal()}>Edit</StyledButton>
            <StyledButton onClick={_ => this.props.onDelete(this.props.todo) }>Delete</StyledButton>
          </StyledInputGroup>
        </td>
      </tr>
    )
  }
}

export default EditRow;
