import styled from 'styled-components';
import {Button, Typography} from 'components/ui/atoms';
import {Avatar, Input, List, Typography as Antypography} from 'antd';
import {ToDoItem} from '../../../models/business';
import {ToDoListDataContextProps} from '../../../providers/ToDoListDataProvider/ToDoListDataContext';
import {UserOutlined} from '@ant-design/icons';

const {Text} = Antypography;
type TodoListTemplateProps = {
  addTodo: () => void;
  updateTodo: ({title, assignedTo}: ToDoItem) => void;
  deleteTodo: (id: number) => void;
  onChangeToDoTitle: (e: {target: {value: string}}) => void;
  onChangeToDoAssignedTo: (e: {target: {value: string}}) => void;
  inputValue: ToDoItem | undefined;
  todoList: ToDoListDataContextProps;
};

const listStyle: React.CSSProperties = {
  width: '90%',
  textAlign: 'left',
  margin: '16px auto',
  border: '1px solid rgba(5, 5, 5, 0.06)',
  padding: 8,
  borderRadius: 10,
};

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
    <div style={{marginTop: '0.5em'}}>
      <Typography variant="h1">Todo List</Typography>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-evenly',
          width: '100vw',
          maxWidth: '650px',
          margin: 'auto',
        }}
      >
        <div>
          <Input
            type="text"
            value={inputValue?.title}
            onChange={onChangeToDoTitle}
            placeholder="Title"
          />
        </div>

        <div>
          <Input
            type="text"
            value={inputValue?.assignedTo}
            onChange={onChangeToDoAssignedTo}
            placeholder="assign to"
          />
        </div>

        <Button variant="add" text="Add Todo" onClick={addTodo} />
      </div>
      <List
        itemLayout="horizontal"
        dataSource={todoList?.todoList}
        style={listStyle}
        renderItem={item => (
          <>
            <List.Item>
              <List.Item.Meta
                avatar={
                  <Avatar
                    style={{backgroundColor: '#87d068'}}
                    src={<UserOutlined />}
                  />
                }
                title={<a href="https://ant.design">{item.title}</a>}
                description={item.assignedTo}
              />
              <Button
                variant="update"
                text="Update"
                onClick={() =>
                  item.title &&
                  updateTodo({
                    id: item.id,
                    title: inputValue?.title || '',
                    assignedTo: inputValue?.assignedTo || '',
                  })
                }
                marginRight="10px"
              />
              <Button
                variant="delete"
                text="Delete"
                onClick={() => item.id && deleteTodo(item.id)}
              />
            </List.Item>
          </>
        )}
      />
    </div>
  );
};
