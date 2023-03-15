import {ToDoItem} from 'models/business';
import React, {useReducer} from 'react';

import {ToDoListDataContext} from './ToDoListDataContext';
import {
  ToDoListContextActionTypes,
  todoListReducer,
  initialToDoListState,
} from './ToDoListReducer';

type ToDoListDataProviderProps = ComponentWithChildren;

export const ToDoListDataProvider = ({children}: ToDoListDataProviderProps) => {
  const [store, dispatch] = useReducer(todoListReducer, initialToDoListState);

  const handleAddToDoItem = (
    newToDo: ToDoItem,
    onSuccess: () => void,
    onFailure: () => void
  ) => {
    try {
      dispatch({
        type: ToDoListContextActionTypes.Create,
        payload: {
          todoItem: newToDo,
        },
      });
      onSuccess();
    } catch {
      onFailure();
    }
  };

  const handleUpdateToDoItem = (
    updatedToDo: ToDoItem,
    onSuccess: () => void,
    onFailure: () => void
  ) => {
    try {
      dispatch({
        type: ToDoListContextActionTypes.Update,
        payload: {
          todoItem: updatedToDo,
        },
      });
      onSuccess();
    } catch {
      onFailure();
    }
  };

  const handleDeleteToDoItem = (
    deletedTitle: string,
    onSuccess: () => void,
    onFailure: () => void
  ) => {
    try {
      dispatch({
        type: ToDoListContextActionTypes.Delete,
        payload: {
          deletedTitle: deletedTitle,
        },
      });
      onSuccess();
    } catch {
      onFailure();
    }
  };

  return (
    <ToDoListDataContext.Provider
      value={{
        todoList: store.todoList,
        actions: {
          addToDoItem: handleAddToDoItem,
          updateToDoItem: handleUpdateToDoItem,
          deleteToDoItem: handleDeleteToDoItem,
        },
      }}
    >
      {children}
    </ToDoListDataContext.Provider>
  );
};
