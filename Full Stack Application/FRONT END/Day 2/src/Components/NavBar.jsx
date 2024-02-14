import { Toolbar, AppBar, Typography, Button } from "@mui/material";
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <AppBar position="static" style={{backgroundColor:'#78FBCA', color:'black', marginTop:-10, width: '100%'}}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} style={{marginLeft: 150}}>
          RechargeMe Now
        </Typography>
        <Button color="inherit" Link to="/">
          Home
        </Button>
        <Link to='/Login'><Button color="inherit" Link to="/about">
          Logout
        </Button></Link>
        <Button color="inherit" Link to="/contact">
          Delete Account
        </Button>
        
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
