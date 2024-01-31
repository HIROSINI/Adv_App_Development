import { Container, Typography, Card, CardContent, Grid, Button } from '@mui/material';
import { Link } from 'react-router-dom'
import SidePanel from './UserSidePanel';
import NavBar from './NavBar';

const ViewPlansPage = () => {
  const rechargePlans = [
    {
      id: 1,
      type: 'Basic',
      name: 'Basic Plan',
      description: 'Affordable plan with basic features',
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
      type: 'Standard',
      name: 'Standard Plan',
      description: 'Mid-range plan with additional benefits',
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
      type: 'Premium',
      name: 'Premium Plan',
      description: 'High-end plan with exclusive perks',
      features: [
        '30 GB data',
        'Unlimited talk time',
        '300 SMS per day',
        'Validity: 60 days',
        'Free subscription to premium content',
      ],
      price: '$30',
    },
  ];

  return (
    <>
    <NavBar></NavBar>
    <SidePanel></SidePanel>
    <Container>
      <Typography variant="h5" gutterBottom style={{marginTop: 30}}>
        Explore Our Recharge Plans
      </Typography>

      <Typography paragraph>
        Choose the perfect recharge plan that suits your needs and preferences. Our plans are designed to offer
        flexibility and value for your mobile usage. Below are the three types of plans we offer:
      </Typography>

      <Grid container spacing={3}>
        {rechargePlans.map((plan) => (
          <Grid item key={plan.id} sm={10}  md={4}>
            <Card>
              <CardContent  style={{backgroundColor:'#ECFCF6', height: 400}}>
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

      <Link to="/recharge">
                  <Button variant="contained" color="success" onClick={() => localStorage.setItem("selectedPlan", JSON.stringify(plan))}>
                    Select Plan
                  </Button>
                </Link>
                </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Typography paragraph style={{marginTop: 40}}>
                  Enjoy each Plan with unique features to enhance your mobile
                  experience. Recharge now and stay connected seamlessly.
                </Typography>
                <Link to="/UserHomePage">
          <Button variant="outlined" color="success" style={{ marginTop: 5 }}>
            Go Back
          </Button>
        </Link>
    </Container>
    </>
  );
};

export default ViewPlansPage;
