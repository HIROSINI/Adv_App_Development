import { useEffect, useState } from 'react';
import { Container, Typography, Card, CardContent, Divider, List , Button} from '@mui/material';
import SidePanel from './UserSidePanel';
import NavBar from './NavBar';
import {Link } from 'react-router-dom'
const RechargeHistoryPage = () => {
  // State to store the user's recharge history
  const [rechargeHistory, setRechargeHistory] = useState([]);

  // useEffect to retrieve the user's recharge history when the component mounts
  useEffect(() => {
    // Replace the following with actual data fetching logic
    const mockRechargeHistory = [
      { id: 1, type: 'Plan', name: 'Basic Plan', date: '2022-05-15', amount: '$10' },
      { id: 2, type: 'Add-on', name: 'Extra Data', date: '2022-06-02', amount: '$5' },
      { id: 3, type: 'Plan', name: 'Premium Plan', date: '2022-07-20', amount: '$30' },
    ];

    setRechargeHistory(mockRechargeHistory);
  }, []);

  return (
    <>
      {/* Navigation components */}
      <NavBar />
      <SidePanel />

      {/* Main content container */}
      <Container>
        {/* Title and description of the page */}
        <Typography variant="h5" gutterBottom style={{ marginTop: 20 }}>
          Recharge History Page
        </Typography>
        <Typography paragraph>
          Explore your recharge history below. This section displays all your previous recharges, including both plans
          and add-ons. Stay informed about your past transactions and track your usage.
        </Typography>

        {rechargeHistory.length > 0 ? (
          // Display recharge history if available
          <List >
            {rechargeHistory.map((historyItem) => (
              <div key={historyItem.id}>
              <Card style={{backgroundColor:'#ECFCF6'}}sx={{
                textAlign: 'center',
                '&:hover': {
                  transform: 'scale(1.1)',
                  transition: 'transform 0.3s ease-in-out',
                },
              }} >
                  <CardContent>
                    {/* Displaying recharge history details */}
                    <Typography variant="h6" gutterBottom>
                      {historyItem.type === 'Plan' ? 'Recharge Plan' : 'Add-on'}
                    </Typography>
                    <Typography variant="subtitle1" >
                      {historyItem.name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      Date: {historyItem.date}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      Amount Paid: {historyItem.amount}
                    </Typography>
                  </CardContent>
                </Card>
                {/* Divider to separate recharge history entries */}
                <Divider style={{ margin: '10px 0' }} />
              </div>
            ))}
          </List>
        ) : (
          // Displayed if no recharge history is available
          <Typography variant="h5" style={{ marginTop: 50 }}>
            No recharge history available.
          </Typography>
        )}
        <Link to="/UserHomePage">
          <Button variant="outlined" color="success" style={{ marginTop: 10 }}>
            Go Back
          </Button>
        </Link>
      </Container>
    </>
  );
};

export default RechargeHistoryPage;
