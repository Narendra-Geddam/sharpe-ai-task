import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Home from './Home';
import Transaction from './Transaction';
import Data from './Data';

const App = () => {
  return (
    <Router>
      <div>
        {/* Navbar */}
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/transaction">Transaction</Link>
            </li>
            <li>
              <Link to="/data">Data</Link>
            </li>
          </ul>
        </nav>

        {/* Routes */}
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/transaction" component={Transaction} />
          <Route path="/data" component={Data} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
