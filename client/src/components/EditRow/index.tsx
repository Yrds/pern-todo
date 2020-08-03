import React, { Component } from 'react';
import { Todo } from '../../types/Todo';
import EditTodo from '../EditTodo';
import {StyledButton, StyledInputGroup, StyledModal} from '../Styled';
import { FaTrash, FaEdit } from 'react-icons/fa';

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
          <StyledModal
            isOpen={this.state.modalVisible}
            onBackgroundClick={e => this.closeModal()}
            onEscapeKeydown={e => this.closeModal()}>
            <EditTodo todo={this.props.todo} onSubmitEdit={(todo: Todo) => this.onSubmitEdit(todo)} />
          </StyledModal>
          <StyledInputGroup>
            <StyledButton onClick={_ => this.openModal()}><FaEdit/></StyledButton>
            <StyledButton onClick={_ => this.props.onDelete(this.props.todo) }><FaTrash/></StyledButton>
          </StyledInputGroup>
        </td>
      </tr>
    )
  }
}

export default EditRow;
