// AdminViewRechargePlansPage.js

import { Container, Typography, Card, CardContent, Grid, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import NavBarAdmin from './NavBarAdmin';
import AdminSidePanel from './AdminSidePanel';
import Footer from './Footer';

const ViewAllPlans = () => {
  const rechargePlans = [
    {
        id: 1,
        category: 'Prepaid',
        type: 'Basic',
        name: 'Prepaid Basic Plan',
        description: 'Affordable plan with basic features for prepaid users',
        features: [
          '10 GB data',
          'Unlimited talk time',
          '100 SMS per day',
          'Validity: 30 days',
        ],
        price: '$10',
      },
      {
        id: 2,
        category: 'Prepaid',
        type: 'Standard',
        name: 'Prepaid Standard Plan',
        description: 'Mid-range plan with additional benefits for prepaid users',
        features: [
          '20 GB data',
          'Unlimited talk time',
          '200 SMS per day',
          'Validity: 45 days',
        ],
        price: '$20',
      },
      {
        id: 3,
        category: 'Prepaid',
        type: 'Premium',
        name: 'Prepaid Premium Plan',
        description: 'High-end plan with exclusive perks for prepaid users',
        features: [
          '30 GB data',
          'Unlimited talk time',
          '300 SMS per day',
          'Validity: 60 days',
          'Free subscription to premium content',
        ],
        price: '$30',
      },
      {
        id: 4,
        category: 'Postpaid',
        type: 'Basic',
        name: 'Postpaid Basic Plan',
        description: 'Affordable plan with basic features for postpaid users',
        features: [
          '15 GB data',
          'Unlimited talk time',
          '150 SMS per day',
          'Billing Cycle: Monthly',
        ],
        price: '$15/month',
      },
      {
        id: 5,
        category: 'Postpaid',
        type: 'Standard',
        name: 'Postpaid Standard Plan',
        description: 'Mid-range plan with additional benefits for postpaid users',
        features: [
          '25 GB data',
          'Unlimited talk time',
          '250 SMS per day',
          'Billing Cycle: Monthly',
        ],
        price: '$25/month',
      },
      {
        id: 6,
        category: 'Postpaid',
        type: 'Premium',
        name: 'Postpaid Premium Plan',
        description: 'High-end plan with exclusive perks for postpaid users',
        features: [
          '40 GB data',
          'Unlimited talk time',
          '400 SMS per day',
          'Billing Cycle: Monthly',
          'Free subscription to premium content',
        ],
        price: '$40/month',
      },
  ];

  return (
    <>
      <NavBarAdmin />
      <AdminSidePanel />
      <Container>
        <Typography variant="h5" gutterBottom style={{ marginTop: 30 }}>
          View Recharge Plans
        </Typography>

        <Grid container spacing={3}>
          {rechargePlans.map((plan) => (
            <Grid item key={plan.id} sm={10} md={4}>
              <Card
                style={{
                  border: '2px solid darkgreen',
                  borderRadius: '10px',
                }}
              >
                <CardContent style={{ backgroundColor: '#ECFCF6', height: 440 }}>
                  <Typography variant="h6" gutterBottom>
                    {plan.name}
                  </Typography>
                  <Typography paragraph>{plan.description}</Typography>
                  <Typography variant="subtitle5" color="textSecondary" paragraph>
                    Features:
                  </Typography>
                  <ul>
                    {plan.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                  <Typography paragraph>
                    Enjoy the {plan.type} Plan with {plan.features.length} unique features to enhance your mobile
                    experience. Recharge now and stay connected seamlessly.
                  </Typography>
                  <Typography variant="h6" color="primary">
                    {plan.price}
                  </Typography>

                        <Link to='/EditPlans'>
                  {/* <Link to={`/admin/edit-plan/${plan.id}`}> */}
                    <Button variant="contained" color="success" style={{ marginRight: 10 }}>
                      Edit Plan
                    </Button>
                  </Link>
                  <Link to='/DeletePlans'>
                  <Button variant="outlined" color="error">
                    Delete Plan
                  </Button></Link>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
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

export default ViewAllPlans;
