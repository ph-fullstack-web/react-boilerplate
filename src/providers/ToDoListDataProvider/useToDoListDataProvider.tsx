import {useContext} from 'react';

import {ToDoListDataContext} from 'providers/ToDoListDataProvider/ToDoListDataContext';

export const useToDoListDataProvider = () => {
  const context = useContext(ToDoListDataContext);
  if (context === undefined) {
    throw new Error(
      'useToDoListDataProvider() hook must be used within <ToDoListDataContext/>'
    );
  }
  return context;
};
