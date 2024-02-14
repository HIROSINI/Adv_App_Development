import { useState } from 'react';
import { Link } from 'react-router-dom'
import {
  Container,
  Typography,
  Card,
  CardContent,
  TextField,
  Button,
  Rating,
  FormControlLabel,
  Checkbox,
} from '@mui/material';
import SidePanel from './UserSidePanel';
import NavBar from './NavBar';

const UserFeedbackPage = () => {
  // State to manage form inputs
  const [feedback, setFeedback] = useState('');
  const [rating, setRating] = useState(0);
  const [subscribe, setSubscribe] = useState(false);

  // Handler for form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform any necessary actions with the feedback data
    console.log('Feedback submitted:', { feedback, rating, subscribe });
  };

  return (
    <>
      {/* Navigation components */}
      <NavBar />
      <SidePanel />

      {/* Main content container */}
      <Container>
        {/* Creative feedback form */}
        <Card style={{ marginTop: 70, backgroundColor: '#ECFCF6'}}>
          <CardContent>
            <Typography variant="h5" gutterBottom>
              We'd Love Your Feedback!
            </Typography>
            <Typography paragraph>
              Help us improve! Share your thoughts and experiences with us by providing feedback below.
            </Typography>
            <img src='https://www.zimyo.com/wp-content/uploads/2022/09/types-of-feedback-1.gif' height={300} style={{marginLeft: 800}}></img>
            {/* Feedback form */}
            <form onSubmit={handleSubmit} style={{marginTop: -300}}>
              {/* Feedback text area */}
              <TextField
                label="Your Feedback"
                variant="outlined"
                multiline
                rows={4}
                sx={{width: 790}}
                margin="normal"
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
              />

              {/* Rating input */}
              <Typography variant="subtitle1" gutterBottom>
                Rate your experience:
              </Typography>
              <Rating
                name="rating"
                value={rating}
                precision={1}
                onChange={(event, newValue) => setRating(newValue)}
              />
                <br></br>
              {/* Subscribe checkbox */}
              <FormControlLabel
                control={
                  <Checkbox
                    checked={subscribe}
                    onChange={() => setSubscribe(!subscribe)}
                    color="primary"
                  />
                }
                label="Subscribe to newsletter for updates"
              />

              {/* Submit button */}
              <br></br>
              <Button type="submit" variant="contained" color="success" style={{ marginTop: 20 }}>
                Submit Feedback
              </Button>
            </form>
          </CardContent>
        </Card>
        <Link to="/UserHomePage">
          <Button variant="outlined" color="success" style={{ marginTop: 40 }}>
            Go Back
          </Button>
        </Link>
      </Container>
    </>
  );
};

export default UserFeedbackPage;
