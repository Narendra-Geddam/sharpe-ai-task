import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Transaction from './components/Transaction';
import Data from './components/Data';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles'; // Import ThemeProvider and createTheme
import Logo from './assets/logo.png'; // Import the logo image

const theme = createTheme({ // Create a theme object with the primary color set to #F52549
  palette: {
    primary: {
      main: '#e5edff',
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
              <Link to="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}> {/* Make logo and brand name clickable */}
                <img src={Logo} alt="Logo" style={{ marginRight: 8, height: 40 }} /> {/* Add the logo before the brand name */}
                <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: '#36454f' }}> {/* Change color of font to gray */}
                  Ethereum
                </Typography>
              </Link>
             
              <div style={{ marginLeft: 'auto' }}> {/* Add this div to align buttons to the left */}
                <Button style={{color:'#36454f'}} color="inherit" component={Link} to="/">Home</Button>
                <Button style={{color:'#36454f'}} color="inherit" component={Link} to="/transaction">Transaction</Button>
                <Button style={{color:'#36454f'}} color="inherit" component={Link} to="/data">Data</Button>
              </div>
              
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
