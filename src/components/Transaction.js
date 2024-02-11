import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { ref, push } from 'firebase/database';
import { TextField, Button, Typography, Container, Grid, Snackbar } from '@mui/material';
import Alert from '@mui/material/Alert';
import db from '../firebase';

const Transaction = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [submitting, setSubmitting] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState('success');

  const handleCloseSnackbar = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenSnackbar(false);
  };

  const onSubmit = async (data) => {
    const isValidWallet = /^0x[a-fA-F0-9]{40}$/.test(data.walletAddress);
    if (!isValidWallet) {
      setSnackbarSeverity('error');
      setSnackbarMessage('Please enter a valid Ethereum wallet address.');
      setOpenSnackbar(true);
      return;
    }

    const amount = parseFloat(data.amount);
    if (isNaN(amount) || amount < 0 || amount > 10000) {
      setSnackbarSeverity('error');
      setSnackbarMessage('Please enter a valid amount between 0 and 10,000.');
      setOpenSnackbar(true);
      return;
    }

    try {
      setSubmitting(true);
      await push(ref(db, 'transactions'), {
        walletAddress: data.walletAddress,
        amount: amount
      });
      setSnackbarSeverity('success');
      setSnackbarMessage('Transaction submitted successfully!');
      setOpenSnackbar(true);
    } catch (error) {
      console.error('Error submitting transaction:', error);
      setSnackbarSeverity('error');
      setSnackbarMessage('Failed to submit transaction. Please try again later.');
      setOpenSnackbar(true);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Container maxWidth="sm" style={{ marginTop: '50px', textAlign: 'center' }}>
      <Typography variant="h2">Transaction Page</Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={12}>
            <TextField
              {...register('walletAddress')}
              label="Wallet Address"
              variant="outlined"
              fullWidth
              required
            />
            {errors.walletAddress && <Typography color="error">{errors.walletAddress.message}</Typography>}
          </Grid>
          <Grid item xs={12}>
            <TextField
              {...register('amount')}
              label="Amount"
              variant="outlined"
              type="number"
              fullWidth
              required
            />
            {errors.amount && <Typography color="error">{errors.amount.message}</Typography>}
          </Grid>
          <Grid item xs={12}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              disabled={submitting}
              fullWidth
            >
              Submit
            </Button>
            <Snackbar
              open={openSnackbar}
              autoHideDuration={6000}
              onClose={handleCloseSnackbar}
              anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
            >
              <Alert severity={snackbarSeverity} onClose={handleCloseSnackbar}>
                {snackbarMessage}
              </Alert>
            </Snackbar>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default Transaction;
