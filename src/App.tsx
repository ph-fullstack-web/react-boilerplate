import {AppRoutes} from 'routes';
import {BrowserRouter as Router} from 'react-router-dom';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        <AppRoutes />
      </div>
    </Router>
  );
};

export default App;
