import React from 'react';
import { Todo } from '../../types/Todo';
import EditRow from '../EditRow/';
import { StyledTable } from '../Styled';


type TodoListProps = {
  todos: Todo[],
  onDelete: (todo: Todo) => void,
  onEdit: (todo: Todo) => void
}

function TodoList(props: TodoListProps) {

  const allTodos = () => {
    return props.todos.map(todo => (
      <EditRow key={todo.todo_id} todo={todo} onDelete={props.onDelete} onEdit={props.onEdit}/>
    ))
  }

  return (
    <StyledTable>
      <thead>
        <tr>
          <th>Description</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {allTodos()}
      </tbody>
    </StyledTable>
  )
}

export default TodoList;
