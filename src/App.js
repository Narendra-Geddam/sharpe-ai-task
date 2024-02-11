import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Transaction from './components/Transaction';
import Data from './components/Data';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const App = () => {
  return (
    <Router>
      <div>
        <AppBar color="warning" position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              My App
            </Typography>
            <Button color="inherit" href="/">Home</Button>
            <Button color="inherit" href="/transaction">Transaction</Button>
            <Button color="inherit" href="/data">Data</Button>
          </Toolbar>
        </AppBar>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/transaction" element={<Transaction />} />
          <Route path="/data" element={<Data />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

