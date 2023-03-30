import {Layout, Menu} from 'antd';
import {Link} from 'react-router-dom';

const {Header} = Layout;

const headerStyle: React.CSSProperties = {
  textAlign: 'center',
  color: '#fff',
  height: 64,
  paddingInline: 50,
  lineHeight: '64px',
  backgroundColor: '#f0f2f5',
};

const navStyle: React.CSSProperties = {
  textAlign: 'center',
  color: '#000000',
  backgroundColor: '#f0f2f5',
};

const menuItems = [
  {
    key: '1',
    label: <Link to="/">Home</Link>,
  },
  {
    key: '2',
    label: <Link to="/todo-list">Todo List</Link>,
  },
];

export const AppHeader = () => {
  return (
    <Header style={headerStyle}>
      <Menu
        style={navStyle}
        theme="light"
        mode="horizontal"
        items={menuItems}
      />
    </Header>
  );
};
