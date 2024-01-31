// RefundPolicy.js

import React from 'react';
import { Container, Typography } from '@mui/material';
import NavBar from './NavBar';
import SidePanel from './UserSidePanel';
import Footer from './Footer';

const RefundPolicy = () => {
  return (
    <>
      <NavBar />
      <SidePanel />
      <Container style={{ marginTop: '20px' }}>
        <Typography variant="h5" color={'darkgreen'} gutterBottom>
          Refund Policy
        </Typography>

        <Typography paragraph>
          Welcome to RechargeMe Now (the "Portal," "we," "us," or "our"). This Refund Policy applies to
          purchases made through our online mobile recharge services.
        </Typography>

        <Typography variant="h6" gutterBottom color={'darkgreen'} style={{ fontStyle: 'italic' }}>
          Eligibility for Refund
        </Typography>

        <Typography paragraph>
          Our refund policy is applicable within 15 days from the date of the mobile recharge. To be
          eligible for a refund, the mobile recharge transaction must meet certain criteria, including technical
          failures or processing errors.
        </Typography>

        <Typography variant="h6" gutterBottom color={'darkgreen'} style={{ fontStyle: 'italic' }}>
          Non-Refundable Situations
        </Typography>

        <Typography paragraph>
          Refunds may not be applicable in certain situations, including but not limited to:
        </Typography>

        <ul>
          <li>User error in providing incorrect mobile numbers</li>
          <li>Mobile recharge successful and used by the recipient</li>
          <li>Failure to receive confirmation due to incorrect contact information</li>
        </ul>

        <Typography variant="h6" gutterBottom color={'darkgreen'} style={{ fontStyle: 'italic' }}>
          Refund Process
        </Typography>

        <Typography paragraph>
          To request a refund, please contact our customer support at rechargeMeNow@gmail.com. Provide the transaction
          details, including the order number, mobile number, and a brief explanation of the refund request. Our team
          will review your case and guide you through the process.
        </Typography>

        <Typography variant="h6" gutterBottom color={'darkgreen'} style={{ fontStyle: 'italic' }}>
          Processing Time
        </Typography>

        <Typography paragraph>
          Refunds will be processed within 15 days of confirming the eligibility. The actual time for the
          refund to be reflected in your account may vary based on the payment method and financial institution.
        </Typography>

        <Typography variant="h6" gutterBottom color={'darkgreen'} style={{ fontStyle: 'italic' }}>
          Contact Us
        </Typography>

        <Typography paragraph>
          If you have any questions or concerns about our Refund Policy, please contact us at rechargeMeNow@gmail.com.
        </Typography>

        
      </Container>
      <Footer></Footer>
    </>
  );
};

export default RefundPolicy;
