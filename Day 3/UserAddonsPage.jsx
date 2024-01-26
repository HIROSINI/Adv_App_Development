
import { Container, Typography, Card, CardContent, Grid, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import SidePanel from './UserSidePanel';
import NavBar from './NavBar';

const AddonsPage = () => {
  const addonsList = [
    {
      id: 1,
      name: 'Data Booster',
      description: 'Add extra data to your plan',
      price: '$5',
    },
    {
      id: 2,
      name: 'International Calling',
      description: 'Stay connected globally with discounted international calling rates',
      price: '$10',
    },
    {
      id: 3,
      name: 'Premium Content Subscription',
      description: 'Access exclusive premium content like movies, TV shows, and more',
      price: '$15',
    },
  ];

  return (
    <>
      <NavBar />
      <SidePanel />
      <Container>
        <Typography variant="h5" gutterBottom style={{ marginTop: 30 }}>
          Explore Our Addons
        </Typography>

        <Typography paragraph>
          Enhance your mobile experience with our exclusive addons. Choose from a variety of options to customize
          your plan according to your needs. Below are some of the addons we offer:
        </Typography>

        <Grid container spacing={3}>
          {addonsList.map((addon) => (
            <Grid item key={addon.id} sm={10} md={4}>
              <Card>
                <CardContent style={{ backgroundColor: '#ECFCF6', height: 300 }}>
                  <Typography variant="h6" gutterBottom>
                    {addon.name}
                  </Typography>
                  <Typography paragraph>{addon.description}</Typography>
                  <Typography variant="h6" color="primary">
                    {addon.price}
                  </Typography>

                  <Link to="/purchaseAddon">
                    <Button
                      variant="contained"
                      color="success"
                      onClick={() => localStorage.setItem('selectedAddon', JSON.stringify(addon))}
                    >
                      Purchase Addon
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
        <Typography paragraph style={{ marginTop: 40 }}>
          Customize your plan with addons to tailor it to your specific needs. Enjoy additional features and
          capabilities. Explore and enhance your mobile experience today!
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

export default AddonsPage;
