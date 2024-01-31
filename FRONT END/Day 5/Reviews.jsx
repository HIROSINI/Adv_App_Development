// AdminReviewPage.js

import React, { useState, useEffect } from 'react';
import { Container, Typography, Table, TableContainer, TableHead, TableRow, TableCell, TableBody, Paper, Button } from '@mui/material';
import NavBarAdmin from './NavBarAdmin';
import AdminSidePanel from './AdminSidePanel';
import Footer from './Footer';
// import { getReviews } from './api'; // Assume you have an API function for fetching reviews
import { Link } from 'react-router-dom';

const AdminReviewPage = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const fetchedReviews = await getReviews();
        setReviews(fetchedReviews);
      } catch (error) {
        console.error('Error fetching reviews:', error);
      }
    };

    fetchReviews();
  }, []);

  const defaultReviews = [
    { userId: 1, userName: 'John Doe', rating: 4, comment: 'Great service!', date: '2022-12-01' },
    { userId: 2, userName: 'Jane Smith', rating: 5, comment: 'Excellent plans!', date: '2022-12-02' },
    { userId: 3, userName: 'Bob Johnson', rating: 3, comment: 'Average experience', date: '2022-12-03' },
  ];

  return (
    <>
      <NavBarAdmin />
      <AdminSidePanel />
      <Container>
        <Typography variant="h5" gutterBottom style={{ marginTop: 30, paddingBottom: 30 }}>
          User Reviews
        </Typography>

        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>User ID</TableCell>
                <TableCell>User Name</TableCell>
                <TableCell>Rating</TableCell>
                <TableCell>Comment</TableCell>
                <TableCell>Date</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {reviews.length > 0 ? (
                reviews.map((review) => (
                  <TableRow key={review.userId}>
                    <TableCell>{review.userId}</TableCell>
                    <TableCell>{review.userName}</TableCell>
                    <TableCell>{review.rating}</TableCell>
                    <TableCell>{review.comment}</TableCell>
                    <TableCell>{review.date}</TableCell>
                  </TableRow>
                ))
              ) : (
                defaultReviews.map((review) => (
                  <TableRow key={review.userId}>
                    <TableCell>{review.userId}</TableCell>
                    <TableCell>{review.userName}</TableCell>
                    <TableCell>{review.rating}</TableCell>
                    <TableCell>{review.comment}</TableCell>
                    <TableCell>{review.date}</TableCell>
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

export default AdminReviewPage;
