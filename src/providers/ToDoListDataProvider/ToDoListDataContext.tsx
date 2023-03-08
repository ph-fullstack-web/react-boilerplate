import {createContext} from 'react';

import {ToDoItem} from 'models/business';

export interface ToDoListDataContextProps {
  todoList: ToDoItem[];
  actions: {
    addToDoItem: (
      newToDoItem: ToDoItem,
      onSuccess: () => void,
      onFailure: () => void
    ) => void;
    updateToDoItem: (
      updatedToDoItem: ToDoItem,
      onSuccess: () => void,
      onFailure: () => void
    ) => void;
    deleteToDoItem: (
      title: string,
      onSuccess: () => void,
      onFailure: () => void
    ) => void;
  };
}

export const ToDoListDataContext = createContext<
  ToDoListDataContextProps | undefined
>(undefined);
