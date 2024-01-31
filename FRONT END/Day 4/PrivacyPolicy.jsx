// PrivacyPolicy.js

import React from 'react';
import { Container, Typography } from '@mui/material';
import NavBar from './NavBar';
import SidePanel from './UserSidePanel';
import Footer from './Footer';

const PrivacyPolicy = () => {
  return (
    <>
      <NavBar />
      <SidePanel />
      <Container style={{ marginTop: '20px' }}>
        <Typography variant="h5" color={'darkgreen'} gutterBottom>
          Privacy Policy
        </Typography>

        <Typography paragraph>
          Welcome to RechargeMe Now (the "Portal," "we," "us," or "our"). We are committed to protecting
          your privacy and providing a safe online experience for all users. This Privacy Policy outlines our practices
          regarding the collection, use, and disclosure of personal information when you use our mobile recharge
          services.
        </Typography>

        <Typography variant="h6" gutterBottom color={'darkgreen'} style={{ fontStyle: 'italic' }}>
          Information We Collect
        </Typography>

        <Typography paragraph>
          We may collect personal information that you voluntarily provide to us when you use our mobile recharge
          services. This may include:
        </Typography>

        <ul>
          <li>Name</li>
          <li>Email address</li>
          <li>Contact information</li>
          <li>Billing and payment details</li>
        </ul>

        <Typography paragraph>
          We also collect non-personal information automatically when you use our services, including:
        </Typography>

        <ul>
          <li>IP address</li>
          <li>Browser type</li>
          <li>Device information</li>
          <li>Usage data</li>
        </ul>

        <Typography variant="h6" gutterBottom color={'darkgreen'} style={{ fontStyle: 'italic' }}>
          How We Use Your Information
        </Typography>

        <Typography paragraph>
          We use the collected information for various purposes, including but not limited to:
        </Typography>

        <ul>
          <li>Providing and maintaining the mobile recharge services</li>
          <li>Personalizing your experience</li>
          <li>Processing transactions</li>
          <li>Sending newsletters and promotional materials</li>
          <li>Analyzing usage patterns to improve our services</li>
        </ul>

        <Typography variant="h6" gutterBottom color={'darkgreen'} style={{ fontStyle: 'italic' }}>
          Cookies and Similar Technologies
        </Typography>

        <Typography paragraph>
          We use cookies and similar tracking technologies to enhance your experience on our portal. You can manage your
          preferences for these technologies through your browser settings.
        </Typography>

        <Typography variant="h6" color={'darkgreen'} gutterBottom style={{ fontStyle: 'italic' }}>
          Information Sharing
        </Typography>

        <Typography paragraph>
          We may share your personal information with third parties in certain circumstances, such as:
        </Typography>

        <ul>
          <li>Service providers for processing payments and supporting our business operations</li>
          <li>Legal compliance, including responding to lawful requests and protecting our rights</li>
        </ul>

        <Typography variant="h6" color={'darkgreen'} gutterBottom style={{ fontStyle: 'italic' }}>
          Security
        </Typography>

        <Typography paragraph>
          We take reasonable measures to safeguard your personal information. However, no method of transmission over the
          internet or electronic storage is entirely secure.
        </Typography>

        <Typography variant="h6" color={'darkgreen'} gutterBottom style={{ fontStyle: 'italic' }}>
          Your Choices
        </Typography>

        <Typography paragraph>
          You have the right to:
        </Typography>

        <ul>
          <li>Access, correct, or delete your personal information</li>
          <li>Opt-out of receiving promotional communications</li>
          <li>Disable cookies through your browser settings</li>
        </ul>

        <Typography variant="h6" color={'darkgreen'} gutterBottom style={{ fontStyle: 'italic' }}>
          Changes to this Privacy Policy
        </Typography>

        <Typography paragraph>
          We reserve the right to update or modify this Privacy Policy at any time. We will notify you of significant
          changes by posting the revised policy on our portal.
        </Typography>

        <Typography variant="h6" color={'darkgreen'} gutterBottom style={{ fontStyle: 'italic' }}>
          Contact Us
        </Typography>

        <Typography paragraph>
          If you have any questions or concerns about our Privacy Policy, please contact us at rechargeMeNow@gmail.com.
        </Typography>
      </Container>
      <Footer></Footer>
    </>
  );
};

export default PrivacyPolicy;
