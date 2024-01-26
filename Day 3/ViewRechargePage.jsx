import { useEffect, useState } from 'react';
import { Container, Typography, Card, CardContent, Button } from '@mui/material';
import { Link } from 'react-router-dom'
import SidePanel from './UserSidePanel';
import NavBar from './NavBar';

const ViewRechargePage = () => {
  // State to store the selected plan or add-on
  const [selectedItem, setSelectedItem] = useState(null);

  // useEffect to retrieve the selected item from local storage when the component mounts
  useEffect(() => {
    const storedItem = JSON.parse(localStorage.getItem('selectedPlan') || localStorage.getItem('selectedAddon'));
    setSelectedItem(storedItem);
  }, []);

  return (
    <>
      <NavBar />
      <SidePanel />
      <Typography variant="h5" gutterBottom style={{ marginTop: 20, marginLeft: 200 }}>
          View and Customize Your Selected Recharge Plan or Add-on
        </Typography>
        <Typography paragraph style={{ marginTop: 20, marginLeft: 200 }}>
          Welcome to the View Recharge Page! Here, you can explore the details of your selected recharge plan or add-on.
          Review the features, descriptions, and prices below.
        </Typography>
      <Container style={{marginTop: 50 }}>
        {selectedItem ? (
          <Card style={{backgroundColor: '#ECFCF6'}} >
            <CardContent style={{ backgroundColor: '#ECFCF6', height: 350, marginLeft: 100 , marginTop:40}}>
                <img src='https://png.pngtree.com/png-vector/20220720/ourmid/pngtree-top-up-add-your-money-balance-vector-illustration-on-mobile-phone-png-image_6025974.png' height="300px" width={400} style={{paddingLeft: 600}}/>
              <Typography variant="h5" gutterBottom style={{marginTop: -300}}>
                {selectedItem.type === 'Plan' ? 'Selected Recharge Plan' : 'Selected Add-on'}
              </Typography>
              <Typography variant="h6" gutterBottom>
                {selectedItem.name}
              </Typography>
              <Typography paragraph>{selectedItem.description}</Typography>
              <Typography variant="subtitle1" color="textSecondary" paragraph>
                Features:
              </Typography>
              <ul>
                {selectedItem.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
              <Typography variant="h6" color="primary" style={{ marginTop: 10 }}>
                {selectedItem.price}
              </Typography>
              
            </CardContent>
          </Card>
        ) : (
          <Typography variant="h5" style={{ marginTop: 50 }}>
            No recharge plan or add-on selected.
          </Typography>
        )}
        <Link to="/UserHomePage">
          <Button variant="outlined" color="success" style={{ marginTop: 50 }}>
            Go Back
          </Button>
        </Link>
      </Container>
    </>
  );
};

export default ViewRechargePage;
