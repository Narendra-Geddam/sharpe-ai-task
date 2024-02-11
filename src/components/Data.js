import React, { useState, useEffect } from 'react';
import { Table, TableHead, TableBody, TableRow, TableCell } from '@mui/material';
import { styled } from '@mui/material/styles';
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';
import db from '../firebase'; // Import Firebase database
import { ref, onValue } from 'firebase/database';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${theme.palette.mode === 'light' ? 'head' : 'body'}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    fontWeight: 'bold', // Make table header bold
    textAlign: 'left', // Align text in table header to left
  },
  [`&.${theme.palette.mode === 'light' ? 'body' : 'head'}`]: {
    fontSize: 14,
    textAlign: 'left', // Align text in table cells to left
  },
  // Make specific cells bold
  '&.bold-cell': {
    fontWeight: 'bold',
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: '#c5e5ed', // Your first color
  },
  '&:nth-of-type(even)': {
    backgroundColor: '#ecf6f9', // Your second color
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
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
