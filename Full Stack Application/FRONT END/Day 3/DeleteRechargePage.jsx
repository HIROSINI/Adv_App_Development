import { useEffect, useState } from 'react';
import { Container, Typography, Card, CardContent, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import SidePanel from './UserSidePanel';
import NavBar from './NavBar';

const DeleteRechargePage = () => {
  // State to store the selected plan or add-on
  const [selectedItem, setSelectedItem] = useState(null);

  // useEffect to retrieve the selected item from local storage when the component mounts
  useEffect(() => {
    const storedItem = JSON.parse(localStorage.getItem('selectedPlan') || localStorage.getItem('selectedAddon'));
    setSelectedItem(storedItem);
  }, []);

  return (
    <>
      {/* Navigation components */}
      <NavBar />
      <SidePanel />

      {/* Main content container */}
      <Container>
        {/* Detailed explanation about the page */}
        <Typography variant="h5" gutterBottom style={{ marginTop: 20 }}>
          Delete Recharge / Add-ons!
        </Typography>
        <Typography paragraph>
          Welcome to the Delete Recharge Page! Here, you can review the details of your selected recharge plan or
          add-on and proceed to delete it. Please confirm your decision before proceeding.
        </Typography>

        {selectedItem ? (
          <Card>
            {/* Card content with detailed information */}
            <CardContent style={{ backgroundColor: '#ECFCF6', minHeight: 300 , paddingLeft: 100}}>
            <img src='https://www.callmama.com/wp-content/uploads/2023/02/smartphone.gif' height={300} style={{marginLeft:650}}/>
              {/* Title based on the type of selected item */}
              <Typography variant="h5" gutterBottom style={{marginTop: -290}}>
                {selectedItem.type === 'Plan' ? 'Selected Recharge Plan' : 'Selected Add-on'}
              </Typography>

              {/* Displaying name and description of the selected item */}
              <Typography variant="h6" gutterBottom>
                {selectedItem.name}
              </Typography>
              <Typography paragraph>{selectedItem.description}</Typography>

              {/* Features of the selected item */}
              <Typography variant="subtitle1" color="textSecondary" paragraph>
                Features:
              </Typography>
              <ul>
                {selectedItem.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>

              {/* Displaying the price of the selected item */}
              <Typography variant="h6" color="primary" style={{ marginTop: 10 }}>
                {selectedItem.price}
              </Typography>

              {/* Button to confirm deletion */}
              <Button variant="contained" color="success" style={{ marginTop: 20 }}>
                Confirm Deletion
              </Button>
            </CardContent>
          </Card>
        ) : (
          // Displayed if no recharge plan or add-on is selected
          <Typography variant="h5" style={{ marginTop: 50 }}>
            No recharge plan or add-on selected.
          </Typography>
        )}

        {/* Link to go back to the previous page */}
        <Link to="/UserHomePage">
          <Button variant="outlined" color="success" style={{ marginTop: 40 }}>
            Go Back
          </Button>
        </Link>
      </Container>
    </>
  );
};

export default DeleteRechargePage;
