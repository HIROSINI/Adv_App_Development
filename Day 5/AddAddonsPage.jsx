// AdminAddAddonsPage.js

import { useState } from 'react';
import { Container, Typography, TextField, Button } from '@mui/material';
import NavBarAdmin from './NavBarAdmin';
import AdminSidePanel from './AdminSidePanel';
import Footer from './Footer';
import { Link } from 'react-router-dom';

const AddAddonsPage = () => {
  const [addonData, setAddonData] = useState({
    name: '',
    description: '',
    price: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAddonData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleAddAddon = () => {
    console.log('Adding Addon:', addonData);
    setAddonData({
      name: '',
      description: '',
      price: '',
    });
  };

  return (
    <>
      <NavBarAdmin />
      <AdminSidePanel />
      <Container>
        <Typography variant="h5" gutterBottom style={{ marginTop: 30 }}>
          Add Addon
        </Typography>

        <form>
          <TextField
            label="Addon Name"
            fullWidth
            margin="normal"
            name="name"
            color='success'
            value={addonData.name}
            onChange={handleChange}
          />
          <TextField
            label="Description"
            fullWidth
            multiline
            rows={3}
            margin="normal"
            color='success'
            name="description"
            value={addonData.description}
            onChange={handleChange}
          />
          <TextField
            label="Price"
            fullWidth
            margin="normal"
            name="price"
            color='success'
            value={addonData.price}
            onChange={handleChange}
          />

          <Button variant="contained" color="success" onClick={handleAddAddon} style={{ marginTop: 20 }}>
            Add Addon
          </Button>
        </form>
        <Link to="/AdminHomePage">
          <Button variant="outlined" color="success" style={{ marginTop: 30 }}>
            Go Back
          </Button>
        </Link>
      </Container>
      <Footer />
    </>
  );
};

export default AddAddonsPage;
