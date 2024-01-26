
import { Container, Typography, Card, CardContent, Avatar, Grid, Paper,Button } from '@mui/material';
import SidePanel from './UserSidePanel';
import NavBar from './NavBar';
import {Link } from 'react-router-dom'

const UserProfilePage = () => {
  return (
    <>
      {/* Navigation components */}
      <NavBar />
      <SidePanel />
    <img src="https://media.sproutsocial.com/uploads/1c-LinkedIn-Banner-Personal-design-1.png" height={200} width={1527}/>
      {/* Main content container */}
      <Container>
        {/* User profile section */}
        <Grid container spacing={3} style={{ marginTop: 20 }}>
          {/* Profile image with hover effect */}
          <Grid item xs={12} md={3}>
            <Paper
              elevation={3}
              sx={{
                padding: 2,
                textAlign: 'center',
                '&:hover': {
                  transform: 'scale(1.1)',
                  transition: 'transform 0.3s ease-in-out',
                },
              }}
            >
              <Avatar
                alt="User Avatar"
                src="https://www.shutterstock.com/image-vector/user-profile-icon-vector-avatar-600nw-2220431045.jpg"
                sx={{ width: 120, height: 145, margin: 'auto' }}
              />
            </Paper>
          </Grid>

          {/* User details */}
          <Grid item xs={12} md={9}>
            <Paper elevation={3} sx={{ padding: 3 }}>
              <Typography variant="h5" gutterBottom>
                John Doe
              </Typography>
              <Typography variant="subtitle1" color="textSecondary" paragraph>
                Email: john.doe@example.com
              </Typography>
              <Typography variant="subtitle1" color="textSecondary" paragraph>
                Phone: +1 (123) 456-7890
              </Typography>
              {/* <Typography variant="subtitle1" color="textSecondary">
                Address: 123 Main St, Cityville, Country
              </Typography> */}
            </Paper>
          </Grid>
        </Grid>

        {/* Additional user information */}
        <Card style={{ marginTop: 20 }}>
          <CardContent>
            
            <Typography variant="h6" gutterBottom style={{ marginTop: 20 }}>
              Account Settings
            </Typography>
            <Typography paragraph>
              Manage your account settings and preferences. If you have any questions, feel free to contact support.
            </Typography>
          </CardContent>
        </Card>
        <Link to="/UserHomePage">
          <Button variant="outlined" color="success" style={{ marginTop: 20 }}>
            Go Back
          </Button>
        </Link>
      </Container>
    </>
  );
};

export default UserProfilePage;
