import {ToDoItem} from '../../../models/business';
import {ToDoListDataContextProps} from '../../../providers/ToDoListDataProvider/ToDoListDataContext';
import {Typography, Button} from 'components/ui/atoms';
import styled from 'styled-components';

type TodoListTemplateProps = {
  addTodo: () => void;
  updateTodo: ({title, assignedTo}: ToDoItem) => void;
  deleteTodo: (title: string) => void;
  onChangeToDoTitle: (e: {target: {value: string}}) => void;
  onChangeToDoAssignedTo: (e: {target: {value: string}}) => void;
  inputValue: ToDoItem | undefined;
  todoList: ToDoListDataContextProps;
};

const Ol = styled('ol')({
  listStyle: 'none',
  padding: 0,
  margin: 0,
});

const Li = styled('li')({
  display: 'flex',
  alignItems: 'center',
  padding: '10px',
  marginBottom: '10px',
  backgroundColor: '#f5f5f5',
  borderRadius: '5px',
  boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
  transition: 'all 0.2s ease',
  justifyContent: 'space-around',
  ':hover': {
    transform: 'scale(1.05)',
    boxShadow: '0 5px 10px rgba(0, 0, 0, 0.2)',
  },
});

export const ToDoListTemplate = ({
  addTodo,
  updateTodo,
  deleteTodo,
  onChangeToDoTitle,
  onChangeToDoAssignedTo,
  inputValue,
  todoList,
}: TodoListTemplateProps) => {
  return (
    <div>
      <Typography variant="h1">Todo List</Typography>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-evenly',
          width: '100vw',
          maxWidth: '650px',
        }}
      >
        <div>
          <label>
            Title:
            <input
              type="text"
              value={inputValue?.title}
              onChange={onChangeToDoTitle}
            />
          </label>
        </div>

        <div>
          <label>
            Assigned to:
            <input
              type="text"
              value={inputValue?.assignedTo}
              onChange={onChangeToDoAssignedTo}
            />
          </label>
        </div>

        <Button variant="add" text="Add Todo" onClick={addTodo} />
      </div>
      <Ol>
        {todoList?.todoList?.map(todo => (
          <Li style={{textAlign: 'left'}} key={todo.title}>
            <Typography variant="body1">{todo.title}</Typography>
            <br />
            <Typography variant="body2">{todo.assignedTo}</Typography>
            <Button
              variant="update"
              text="Update"
              onClick={() =>
                todo.title &&
                updateTodo({
                  id: todo.id,
                  title: inputValue?.title || '',
                  assignedTo: inputValue?.assignedTo || '',
                })
              }
            />
            <Button
              variant="delete"
              text="Delete"
              onClick={() => todo.title && deleteTodo(todo.title)}
            />
          </Li>
        ))}
      </Ol>
    </div>
  );
};
