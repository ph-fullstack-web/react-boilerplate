import {ToDoItem} from 'models/business';

export interface ToDoListContextState {
  todoList: ToDoItem[];
}

export interface ToDoListContextPayload {
  todoList?: ToDoItem[];
  todoItem?: ToDoItem;
  deletedId?: number;
}

export enum ToDoListContextActionTypes {
  Create,
  Update,
  Delete,
}

export type ToDoListContextAction = {
  type: ToDoListContextActionTypes;
  payload: ToDoListContextPayload;
};

export const initialToDoListState: ToDoListContextState = {
  todoList: [],
};

export const todoListReducer = (
  state: ToDoListContextState,
  action: ToDoListContextAction
): ToDoListContextState => {
  switch (action.type) {
    case ToDoListContextActionTypes.Create: {
      const newToDoList = [...state.todoList];

      if (action.payload.todoItem) newToDoList.push(action.payload.todoItem);

      return {
        ...state,
        todoList: newToDoList,
      };
    }

    case ToDoListContextActionTypes.Update: {
      if (action.payload && action.payload.todoItem) {
        const newToDoList =
          state.todoList.filter(
            todoItem => todoItem.id !== action.payload.todoItem!.id
          ) ?? [];
        newToDoList.push(action.payload.todoItem);

        return {
          ...state,
          todoList: newToDoList,
        };
      }

      return {...state};
    }

    case ToDoListContextActionTypes.Delete: {
      if (action.payload && action.payload.deletedId) {
        const newToDoList =
          state.todoList.filter(
            todoItem => todoItem.id !== action.payload.deletedId
          ) ?? [];

        return {
          ...state,
          todoList: newToDoList,
        };
      }

      return {...state};
    }

    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
};
