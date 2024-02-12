import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Transaction from './components/Transaction';
import Data from './components/Data';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles'; // Import ThemeProvider and createTheme

const theme = createTheme({ // Create a theme object with the primary color set to #F52549
  palette: {
    primary: {
      main: '#4d81ff',
    },
  },
});

const App = () => {
  return (
    <Router>
      <ThemeProvider theme={theme}> {/* Wrap the entire app with ThemeProvider and pass the created theme */}
        <div>
          <AppBar color="primary" position="static"> {/* Change color prop to 'primary' */}
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
      </ThemeProvider> {/* Close the ThemeProvider */}
    </Router>
  );
};

export default App;
