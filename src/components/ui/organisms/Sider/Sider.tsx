import {useState} from 'react';
import {HomeOutlined, OrderedListOutlined} from '@ant-design/icons';
import {Layout, Menu} from 'antd';
import {Link} from 'react-router-dom';

const {Sider} = Layout;

const siderStyle: React.CSSProperties = {
  textAlign: 'center',
  color: '#000',
  backgroundColor: '#f0f2f5',
  boxShadow: '2px 0 6px rgba(0, 0, 0, 0.1)',
};

const menuItems = [
  {
    key: '1',
    label: <Link to="/">Home</Link>,
    icon: <HomeOutlined />,
  },
  {
    key: '2',
    label: <Link to="/todo-list">Todo List</Link>,
    icon: <OrderedListOutlined />,
  },
];

export const AppSider = () => {
  const [collapsed, setCollapsed] = useState(false);

  const onCollapse = (
    collapsed: boolean | ((prevState: boolean) => boolean)
  ) => {
    setCollapsed(collapsed);
  };

  return (
    <Sider width="fit-content" style={siderStyle}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={onCollapse}
        style={{backgroundColor: '#f0f2f5'}}
      >
        <Menu
          style={{backgroundColor: '#f0f2f5'}}
          theme="light"
          mode="inline"
          items={menuItems}
        />
      </Sider>
    </Sider>
  );
};
