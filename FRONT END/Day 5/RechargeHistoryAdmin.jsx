// AdminRechargeHistoryPage.js

import React, { useState, useEffect } from 'react';
import { Container, Typography, Table, TableContainer, TableHead, TableRow, TableCell, TableBody, Paper, Button } from '@mui/material';
import NavBarAdmin from './NavBarAdmin';
import AdminSidePanel from './AdminSidePanel';
import Footer from './Footer';
// import { getRechargeHistory } from './api'; // Assume you have an API function for fetching recharge history
import { Link } from 'react-router-dom';

const AdminRechargeHistoryPage = () => {
  const [rechargeHistory, setRechargeHistory] = useState([]);

  useEffect(() => {
    const fetchRechargeHistory = async () => {
      try {
        const history = await getRechargeHistory();
        setRechargeHistory(history);
      } catch (error) {
        console.error('Error fetching recharge history:', error);
      }
    };

    fetchRechargeHistory();
  }, []);

  const defaultRechargeHistory = [
    { userId: 1, userName: 'John Doe', planName: 'Premium Plan', amount: '$30', date: '2022-12-01' },
    { userId: 2, userName: 'Jane Smith', planName: 'Standard Plan', amount: '$20', date: '2022-12-02' },
    { userId: 3, userName: 'Bob Johnson', planName: 'Basic Plan', amount: '$10', date: '2022-12-03' },
  ];

  return (
    <>
      <NavBarAdmin />
      <AdminSidePanel />
      <Container>
        <Typography variant="h5" gutterBottom style={{ marginTop: 30, paddingBottom: 30 }}>
          Recharge History
        </Typography>

        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>User ID</TableCell>
                <TableCell>User Name</TableCell>
                <TableCell>Plan Name</TableCell>
                <TableCell>Amount</TableCell>
                <TableCell>Date</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rechargeHistory.length > 0 ? (
                rechargeHistory.map((historyItem) => (
                  <TableRow key={historyItem.userId}>
                    <TableCell>{historyItem.userId}</TableCell>
                    <TableCell>{historyItem.userName}</TableCell>
                    <TableCell>{historyItem.planName}</TableCell>
                    <TableCell>{historyItem.amount}</TableCell>
                    <TableCell>{historyItem.date}</TableCell>
                  </TableRow>
                ))
              ) : (
                defaultRechargeHistory.map((historyItem) => (
                  <TableRow key={historyItem.userId}>
                    <TableCell>{historyItem.userId}</TableCell>
                    <TableCell>{historyItem.userName}</TableCell>
                    <TableCell>{historyItem.planName}</TableCell>
                    <TableCell>{historyItem.amount}</TableCell>
                    <TableCell>{historyItem.date}</TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </TableContainer>

        <Link to="/AdminHomePage">
          <Button variant="outlined" color="success" style={{ marginTop: 30 }}>
            Go Back
          </Button>
        </Link>
      </Container>
      <Footer />
    </>
  );
};

export default AdminRechargeHistoryPage;
