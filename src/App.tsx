import {AppRoutes} from 'routes';
import {BrowserRouter as Router} from 'react-router-dom';
import { ToDoListDataProvider } from "./providers/ToDoListDataProvider";
import './App.css';

const App = () => {
  return (
    <ToDoListDataProvider>
      <Router>
        <div className="App">
          <AppRoutes />
        </div>
      </Router>
    </ToDoListDataProvider>
  );
};

export default App;
