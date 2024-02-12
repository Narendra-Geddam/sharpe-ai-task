import React, { useState, useEffect } from 'react';
import { Table, TableHead, TableBody, TableRow, TableCell } from '@mui/material';
import { styled } from '@mui/material/styles';
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';
import db from '../firebase'; // Import Firebase database
import { ref, onValue } from 'firebase/database';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${theme.palette.mode === 'light' ? 'head' : 'body'}`]: {
    backgroundColor: theme.palette.mode === 'light' ? '#183a88' : theme.palette.common.black,
    color: theme.palette.mode === 'light' ? '#c3c7e6' : theme.palette.common.white,
    fontWeight: 'bold',
    textAlign: 'left',
  },
  [`&.${theme.palette.mode === 'light' ? 'body' : 'head'}`]: {
    fontSize: 14,
    textAlign: 'left',
    color: theme.palette.mode === 'light' ? '#000000' : '#c3c7e6',
  },
  '&.bold-cell': {
    fontWeight: 'bold',
    backgroundColor: theme.palette.mode === 'light' ? '#4d81ff' : '#183a88',
    color: theme.palette.mode === 'light' ? '#ffffff' : '#ffffff',
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.mode === 'light' ? '#b4caff' : '#3c5dac',
    color: '#c3c7e6',
  },
  '&:nth-of-type(even)': {
    backgroundColor: theme.palette.mode === 'light' ? '#ffffff' : '#b4caff',
    color: '#000000',
  },
  '&:hover': {
    backgroundColor: theme.palette.mode === 'light' ? '#f0f0f0' : '#37474f',
  },
}));


const CustomizedTable = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      const transactionsRef = ref(db, 'transactions');
      onValue(transactionsRef, (snapshot) => {
        const data = snapshot.val();
        if (data) {
          const transactionsList = Object.entries(data).map(([id, transaction]) => ({
            id,
            ...transaction
          }));
          setTransactions(transactionsList);
        }
      });
    };

    fetchData();
  }, []);

  return (
    <div style={{ margin: '50px auto', width: '80%' }}>
      <TableContainer component={Paper}>
        <Table aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell className="bold-cell">Transaction ID</StyledTableCell>
              <StyledTableCell align="left" className="bold-cell">Wallet Address</StyledTableCell>
              <StyledTableCell align="left" className="bold-cell">Amount</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {transactions.map((transaction) => (
              <StyledTableRow key={transaction.id}>
                <StyledTableCell component="th" scope="row">{transaction.id}</StyledTableCell>
                <StyledTableCell align="left">{transaction.walletAddress}</StyledTableCell>
                <StyledTableCell align="left">{transaction.amount}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default CustomizedTable;
