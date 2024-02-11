import React, { useState } from 'react';
import { useForm } from 'react-hook-form'; // Import useForm for form handling
import { ref, push } from 'firebase/database'; // Import Firebase Realtime Database functions
import db from '../firebase'; // Import the Firebase database instance

const Transaction = () => {
  const { register, handleSubmit, formState: { errors } } = useForm(); // Form hook
  const [submitting, setSubmitting] = useState(false); // State to track form submission

  const onSubmit = async (data) => {
    // Validate wallet address
    const isValidWallet = /^0x[a-fA-F0-9]{40}$/.test(data.walletAddress);
    if (!isValidWallet) {
      alert('Please enter a valid Ethereum wallet address.');
      return;
    }

    // Validate amount
    const amount = parseFloat(data.amount);
    if (isNaN(amount) || amount < 0 || amount > 10000) {
      alert('Please enter a valid amount between 0 and 10,000.');
      return;
    }

    // Submit data to Firestore
    try {
      setSubmitting(true);
      await push(ref(db, 'transactions'), {
        walletAddress: data.walletAddress,
        amount: amount
      });
      alert('Transaction submitted successfully!');
    } catch (error) {
      console.error('Error submitting transaction:', error);
      alert('Failed to submit transaction. Please try again later.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div>
      <h2>Transaction Page</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="walletAddress">Wallet Address</label>
          <input {...register('walletAddress')} type="text" id="walletAddress" />
          {errors.walletAddress && <span>{errors.walletAddress.message}</span>}
        </div>
        <div>
          <label htmlFor="amount">Amount</label>
          <input {...register('amount')} type="number" id="amount" />
          {errors.amount && <span>{errors.amount.message}</span>}
        </div>
        <button type="submit" disabled={submitting}>Submit</button>
      </form>
    </div>
  );
};

export default Transaction;
