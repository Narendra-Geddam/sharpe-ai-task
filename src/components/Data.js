// Data.js
import React, { useState, useEffect } from 'react';
import  db  from '../firebase'; // Make sure to adjust the path if needed
import { ref, onValue } from 'firebase/database'; // Import necessary RTDB functions

const Data = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      const transactionsRef = ref(db, 'transactions');
      onValue(transactionsRef, (snapshot) => {
        const data = snapshot.val();
        if (data) {
          const transactionsList = Object.entries(data).map(([key, value]) => ({
            id: key,
            ...value
          }));
          setTransactions(transactionsList);
        }
      });
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Data Page</h2>
      <table>
        <thead>
          <tr>
            <th>Transaction ID</th>
            <th>Wallet Address</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map(transaction => (
            <tr key={transaction.id}>
              <td>{transaction.id}</td>
              <td>{transaction.walletAddress}</td>
              <td>{transaction.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Data;
