
import NavBar from './NavBar';
import UserSidePanel from './UserSidePanel';
import { Container, Typography, Button, Card, CardContent, Grid } from '@mui/material';


const AdminHomePage = () => {
  return (
    <div>
      <NavBar>
      </NavBar>
      <UserSidePanel>
      </UserSidePanel>
      <Container>
      <Grid container spacing={3}>
        {/* Hero Section */}
        <Grid item xs={12} style={{ minHeight: '400px', position: 'relative' }}>
          <div
            style={{
              backgroundImage: 'url("https://static.vecteezy.com/ti/vecteur-libre/p1/2191920-recharger-de-l-argent-vers-une-application-en-ligne-sur-telephone-portable-main-tenant-un-telephone-portable-avec-recharge-en-ligne-vectoriel.jpg")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              height: 300,
              width: 400,
              position: 'absolute',
              top: 100,
              left: 800,
              zIndex: -1,
            }}
          />
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '40%',
              transform: 'translate(-50%, -50%)',
              textAlign: 'center',
              color: 'black',
            }}
          >
            <Typography variant="h2" gutterBottom>
              Welcome to Our Mobile Recharge Portal
            </Typography>
            <Typography variant="h6" paragraph>
              Recharge your mobile balance hassle-free with our user-friendly platform.
            </Typography>
            <Button variant="contained" style={{backgroundColor:'#78FBCA', color:'black'}}>
              Get Started
            </Button>
          </div>
        </Grid>

        {/* Feature Section */}
        <Grid item xs={12} style={{marginTop: -30}}>
          <Typography variant="h4" gutterBottom >
            Key Features
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={4}>
              <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    Quick Recharge
                  </Typography>
                  <Typography paragraph>
                    Easily recharge your mobile balance with just a few clicks.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    Data Boosters
                  </Typography>
                  <Typography paragraph>
                    Extend your data limit with our affordable data booster add-ons.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          <Grid item xs={12} sm={4}>
              <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    Recharge History
                  </Typography>
                  <Typography paragraph>
                    View your past recharge transactions for better budget management.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Grid>

        {/* Call to Action Section */}
        <Grid item xs={12} style={{ textAlign: 'center', paddingTop: '40px' }}>
          <Typography variant="h5" gutterBottom>
          Ready to explore our features and add-ons? Join us today!
          </Typography>
          <Button variant="contained" style={{backgroundColor:'#78FBCA', color:'black'}}>
            Add Add-ons
          </Button>
        </Grid>
      </Grid>
    </Container>
      </div>
  )
};

export default AdminHomePage;
