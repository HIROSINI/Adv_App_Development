// AdminEditPlanPage.js

import { useState, useEffect } from 'react';
import { Container, Typography, TextField, Button, MenuItem, Select, InputLabel } from '@mui/material';
import NavBarAdmin from './NavBarAdmin';
import AdminSidePanel from './AdminSidePanel';
import Footer from './Footer';
// import { getPlanById, updatePlan } from './api'; // Assume you have API functions for fetching and updating plans
import { useParams, Link } from 'react-router-dom';

const AdminEditPlanPage = () => {
  const { planId } = useParams();
  const [planData, setPlanData] = useState({
    category: '',
    type: '',
    name: '',
    description: '',
    features: '',
    price: '',
  });

  useEffect(() => {
    const fetchPlanData = async () => {
      try {
        // const plan = await getPlanById(planId);
        // setPlanData(plan);
      } catch (error) {
        console.error('Error fetching plan data:', error);
      }
    };

    fetchPlanData();
  }, [planId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPlanData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleEditPlan = () => {
    // updatePlan(planId, planData);
    console.log('Updating Plan:', planData);
  };

  return (
    <>
      <NavBarAdmin />
      <AdminSidePanel />
      <Container>
        <Typography variant="h5" gutterBottom style={{ marginTop: 30 }}>
          Edit Recharge Plan
        </Typography>

        <form>

          <InputLabel htmlFor="category" style={{marginBottom: 10}}>Category</InputLabel>
          <Select
            label="Category"
            fullWidth
            margin="normal"
            name="category"
            value={planData.category}
            onChange={handleChange}
            displayEmpty
            color='success'
            style={{marginBottom: 10}}
          >
            <MenuItem value="Prepaid">Prepaid</MenuItem>
            <MenuItem value="Postpaid">Postpaid</MenuItem>
          </Select>

          <InputLabel htmlFor="type" style={{marginBottom: 10}}>Type</InputLabel>
          <Select
            label="Type"
            fullWidth
            margin="normal"
            name="type"
            value={planData.type}
            onChange={handleChange}
            color='success'
            displayEmpty
          >
            <MenuItem value="Basic">Basic</MenuItem>
            <MenuItem value="Standard">Standard</MenuItem>
            <MenuItem value="Premium">Premium</MenuItem>
          </Select>

          <TextField
            label="Plan Name"
            fullWidth
            margin="normal"
            name="name"
            color='success'
            value={planData.name}
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
            value={planData.description}
            onChange={handleChange}
          />
          <TextField
            label="Features (comma-separated)"
            fullWidth
            multiline
            rows={3}
            margin="normal"
            name="features"
            color='success'
            value={planData.features}
            onChange={handleChange}
          />
          <TextField
            label="Price"
            fullWidth
            margin="normal"
            name="price"
            color='success'
            value={planData.price}
            onChange={handleChange}
          />

          <Button variant="contained" color="success" onClick={handleEditPlan} style={{ marginTop: 20 }}>
            Save Changes
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

export default AdminEditPlanPage;
