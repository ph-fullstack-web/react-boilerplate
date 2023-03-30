import {AppFooter} from 'components/ui/organisms/Footer';
import {AppHeader} from './components/ui/organisms/Header';
import {AppRoutes} from 'routes';
import {AppSider} from 'components/ui/organisms/Sider';
import {BrowserRouter as Router} from 'react-router-dom';
import {Layout} from 'antd';

import {ToDoListDataProvider} from './providers/ToDoListDataProvider';

import './App.css';

const contentStyle: React.CSSProperties = {
  minHeight: '80vh',
  color: '#000000',
};

const App = () => {
  const {Content} = Layout;

  return (
    <ToDoListDataProvider>
      <Router>
        <Layout>
          <AppSider />
          <Layout>
            <AppHeader />
            <Content style={contentStyle}>
              <AppRoutes />
            </Content>
            <AppFooter />
          </Layout>
        </Layout>
      </Router>
    </ToDoListDataProvider>
  );
};

export default App;
