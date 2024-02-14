
import { Container, Typography, Link } from '@mui/material';
const Footer = () => {
  return (
    <>
    
    <footer style={{ backgroundColor: '#78FBCA', padding: 10, marginTop: 87, paddingLeft: 430, width: '71%' }}>
      <Container>

       
        <Typography variant="body2" style={{ marginTop: 5 }}>
          &copy; {new Date().getFullYear()} RechargeMeNow. All rights reserved. {' '}
          <Link href="/PrivacyPolicy" style={{textDecoration:'none', color:'black'}}>Privacy Policy</Link> |{' '}
          <Link href="/TermsandCondition" style={{textDecoration:'none', color:'black'}}>Terms & Conditions</Link> |{' '}
          <Link href="/Disclaimer" style={{textDecoration:'none', color:'black'}}>Disclaimer</Link> |{' '}
          <Link href="/RefundPolicy" style={{textDecoration:'none', color:'black'}}>Refund Policy</Link>
        </Typography>

       
      </Container>

    </footer>
    </>
  );
};

export default Footer;
