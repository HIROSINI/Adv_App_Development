// Disclaimer.js
import { Container, Typography } from '@mui/material';
import NavBar from './NavBar';
import SidePanel from './UserSidePanel';
import Footer from './Footer';

const Disclaimer = () => {
  return (
    <>
      <NavBar />
      <SidePanel />
      <Container style={{ marginTop: '20px' }}>
        <Typography variant="h5" color={'darkgreen'} gutterBottom>
          Disclaimer
        </Typography>

        <Typography paragraph>
          Welcome to RechargeMe Now (the "Portal," "we," "us," or "our"). The information provided on
          this portal is for general informational purposes only.
        </Typography>

        <Typography paragraph>
          <strong>Accuracy of Information:</strong> While we strive to keep the information up to date and correct, we
          make no representations or warranties of any kind, express or implied, about the completeness, accuracy,
          reliability, suitability, or availability with respect to the website or the information, products, services,
          or related graphics contained on the website for any purpose. Any reliance you place on such information is
          therefore strictly at your own risk.
        </Typography>

        <Typography paragraph>
          <strong>Professional Advice:</strong> The information provided on this portal is not intended to be a
          substitute for professional advice. You should not rely solely on the information provided and should consult
          with a qualified professional for specific advice tailored to your situation.
        </Typography>

        <Typography paragraph>
          <strong>External Links:</strong> This portal may contain links to external websites that are not provided or
          maintained by us. We do not guarantee the accuracy, relevance, timeliness, or completeness of any information
          on these external websites.
        </Typography>

        <Typography paragraph>
          <strong>Changes to Disclaimer:</strong> We reserve the right to update or change this disclaimer at any time.
          You should check this page periodically for changes. Your continued use of the portal after the posting of
          changes constitutes your acceptance of those changes.
        </Typography>

        <Typography paragraph>
          <strong>Contact Us:</strong> If you have any questions or concerns about our disclaimer, please contact us at
          rechargeMeNow@gmail.com.
        </Typography>
      </Container>
      <Footer></Footer>
    </>
  );
};

export default Disclaimer;
