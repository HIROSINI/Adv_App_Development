
import NavBar from './NavBar';
import SidePanel from './AdminSidePanel';
import { Container, Typography, Button, Card, CardContent, Grid } from '@mui/material';


const AdminHomePage = () => {
  return (
    <div>
      <NavBar>
      </NavBar>
      <SidePanel>
      </SidePanel>
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
              left: '30%',
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
        <Grid item xs={12}>
          <Typography variant="h4" gutterBottom>
            Key Features
          </Typography>
          <Grid container spacing={3}>
          <Grid item xs={12} sm={4}>
              <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    User Management
                  </Typography>
                  <Typography paragraph>
                    Easily manage user accounts, roles, and permissions.
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
            <Grid item xs={12} sm={4}>
              <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    Admin Dashboard
                  </Typography>
                  <Typography paragraph>
                    Manage users, view transactions, and perform other admin tasks.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Grid>

        {/* Call to Action Section */}
        
      </Grid>
    </Container>
      </div>
  )
};

export default AdminHomePage;
