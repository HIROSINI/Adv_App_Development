// TermsAndConditions.js

import React from 'react';
import { Container, Typography } from '@mui/material';
import NavBar from './NavBar';
import SidePanel from './UserSidePanel';
import Footer from './Footer';

const TermsAndConditions = () => {
  return (
    <>
      <NavBar />
      <SidePanel />
      <Container style={{ marginTop: '20px' }}>
        <Typography variant="h5" color={'darkgreen'} gutterBottom>
          Terms and Conditions
        </Typography>

        <Typography paragraph>
          Welcome to RechargeMe Now (the "Portal," "we," "us," or "our"). These Terms and Conditions
          govern your use of our online mobile recharge services.
        </Typography>

        <Typography variant="h6" gutterBottom color={'darkgreen'} style={{ fontStyle: 'italic' }}>
          User Account
        </Typography>

        <Typography paragraph>
          To access certain features of the Portal, you may need to create a user account. You are responsible for
          maintaining the confidentiality of your account and password. You agree to accept responsibility for all
          activities that occur under your account.
        </Typography>

        <Typography variant="h6" gutterBottom color={'darkgreen'} style={{ fontStyle: 'italic' }}>
          Mobile Recharge Services
        </Typography>

        <Typography paragraph>
          Our Portal allows you to recharge mobile accounts with various service providers. By using our services, you
          agree to abide by the terms and conditions set by the respective mobile service providers.
        </Typography>

        <Typography variant="h6" gutterBottom color={'darkgreen'} style={{ fontStyle: 'italic' }}>
          Payment and Refunds
        </Typography>

        <Typography paragraph>
          Payments for mobile recharges are processed through secure payment gateways. We do not store your payment
          details. Refunds are subject to the policies of the mobile service providers and our Refund Policy.
        </Typography>

        <Typography variant="h6" gutterBottom color={'darkgreen'} style={{ fontStyle: 'italic' }}>
          User Responsibilities
        </Typography>

        <Typography paragraph>
          You agree not to use the Portal for any unlawful purpose or in any way that could damage, disable, or impair
          the services provided. You are solely responsible for the accuracy and legality of the information you provide.
        </Typography>

        <Typography variant="h6" gutterBottom color={'darkgreen'} style={{ fontStyle: 'italic' }}>
          Service Availability
        </Typography>

        <Typography paragraph>
          We strive to provide uninterrupted and error-free services. However, we do not guarantee the availability of
          the Portal at all times. We may temporarily suspend access for maintenance or other reasons.
        </Typography>

        <Typography variant="h6" gutterBottom color={'darkgreen'} style={{ fontStyle: 'italic' }}>
          Changes to Terms and Conditions
        </Typography>

        <Typography paragraph>
          We reserve the right to update or modify these Terms and Conditions at any time. We will notify users of
          significant changes through email or by posting the revised terms on the Portal.
        </Typography>

        <Typography variant="h6" gutterBottom color={'darkgreen'} style={{ fontStyle: 'italic' }}>
          Contact Us
        </Typography>

        <Typography paragraph>
          If you have any questions or concerns about our Terms and Conditions, please contact us at rechargeMeNow@gmail.com.
        </Typography>

        
      </Container>
      <Footer></Footer>
    </>
  );
};

export default TermsAndConditions;
