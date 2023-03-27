import {useState} from 'react';
import {useToDoListDataProvider} from '../../../providers/ToDoListDataProvider';
import {ToDoItem} from '../../../models/business';

import {ToDoListTemplate} from '../../templates/TodoList/ToDoListTemplate';

export const ToDoList = () => {
  const [inputValue, setInputValue] = useState<ToDoItem>({
    id: 0,
    title: '',
    assignedTo: '',
  });
  const todoList = useToDoListDataProvider();

  const onSuccess = () => console.log('success');
  const onFailure = () => console.log('failed');

  const addTodo = () => {
    if (inputValue?.title?.trim() === '') {
      return;
    }

    const newTodo: ToDoItem = {
      id: inputValue?.title.length + 1,
      title: inputValue?.title,
      assignedTo: inputValue?.assignedTo,
    };

    todoList?.actions.addToDoItem(newTodo, onSuccess, onFailure);
    setInputValue({
      id: 0,
      title: '',
      assignedTo: '',
    });
  };

  const updateTodo = ({title, assignedTo, id}: ToDoItem) => {
    const newTodo: ToDoItem = {
      id: id,
      title: title,
      assignedTo: assignedTo,
    };
    todoList.actions.updateToDoItem(newTodo, onSuccess, onFailure);
  };

  const onChangeToDoTitle = (e: {target: {value: string}}) => {
    setInputValue({
      ...inputValue,
      title: e.target.value,
      assignedTo: inputValue?.assignedTo,
    });
  };

  const onChangeToDoAssignedTo = (e: {target: {value: string}}) => {
    setInputValue({
      ...inputValue,
      assignedTo: e.target.value,
      title: inputValue?.title,
    });
  };

  const deleteTodo = (id: number) => {
    todoList.actions.deleteToDoItem(id, onSuccess, onFailure);
  };

  return (
    <ToDoListTemplate
      addTodo={addTodo}
      updateTodo={updateTodo}
      deleteTodo={deleteTodo}
      onChangeToDoTitle={onChangeToDoTitle}
      onChangeToDoAssignedTo={onChangeToDoAssignedTo}
      inputValue={inputValue}
      todoList={todoList}
    />
  );
};
