
import { Container, Typography, Card, CardContent, Avatar, Grid, Paper,Button } from '@mui/material';
import {Link } from 'react-router-dom'
import Footer from './Footer';
import NavBarAdmin from './NavBarAdmin';
import AdminSidePanel from './AdminSidePanel';

const AdminProfilePage = () => {
  return (
    <>
      <NavBarAdmin />
      <AdminSidePanel />
    <img src="https://media.sproutsocial.com/uploads/1c-LinkedIn-Banner-Personal-design-1.png" height={300} width={1508}/>
      <Container>
        <Grid container spacing={3} style={{ marginTop: 20 }}>
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

          <Grid item xs={12} md={9}>
            <Paper elevation={3} sx={{ padding: 3 }}>
              <Typography variant="h5" gutterBottom>
                Hirosini
              </Typography>
              <Typography variant="subtitle1" color="textSecondary" paragraph>
                Email: Hiro@gmail.com
              </Typography>
              <Typography variant="subtitle1" color="textSecondary" paragraph>
                Phone: 9876543210
              </Typography>
            </Paper>
          </Grid>
        </Grid>
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
      <Footer></Footer>
    </>
  );
};

export default AdminProfilePage;
