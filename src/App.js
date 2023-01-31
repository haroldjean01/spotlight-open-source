import { Button } from '@mui/material';
import { Route, Switch, Link } from 'react-router-dom';
import './App.css';
import Chart from './components/Chart.js';
import TableComponent from './components/TableComponent.js';

function App() {
  return (
    <div className="App">
      <nav>
        <Button variant="contained">
          <Link to="/table">Table</Link>
        </Button>
        <Button variant="contained">
          <Link to="/charts">Chart</Link>
        </Button>
      </nav>
      <Switch>
        <Route path="/table">
          <h1>Table Library</h1>
          <TableComponent />
        </Route>
        <Route path="/charts">
          <h1>Chart Library</h1>
          <Chart />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
