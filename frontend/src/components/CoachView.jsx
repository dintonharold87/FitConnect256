import React, { useState, useEffect } from "react";
import { Card, CardContent, Button } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useParams} from "react-router-dom";
import axios from "axios";

const theme = createTheme({
  typography: {
    fontFamily: "Inter, sans-serif",
  },
});

const CoachView = () => {
  const { id } = useParams();
  // const history = useHistory;
  const [coach, setCoach] = useState({});
  // editing data
  const [editing, setEditing] = useState(false);

  // console.log(JSON.stringify(token));
  const token = localStorage.getItem("tokenToUse");

  // Arrow function to log out the user
  const logoutUser = () => {
    localStorage.removeItem("tokenToUse"); // Remove JWT token from localStorage
    window.location.href = "/login"; // Redirect to login page
  };

  useEffect(() => {
    const fetchCoachDetails = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_BACKEND_URL}/coaches/${id}`,
          {
            headers: {
              Authorization: `Bearer ${token}}`,
            },
          }
        );
        setCoach(response.data.coaches);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCoachDetails();
  }, [id, token]);

  
  return (
    <ThemeProvider theme={theme}>
      <Box
        m="90px"
        height="75vh"
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <Typography component="h1" variant="h3">
          Welcome {coach.name}
        </Typography>
        <Card sx={{ maxWidth: 500, marginTop: 9 }}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Profile Information
            </Typography>
            <p>Name: {coach.name}</p>
            <p>Email: {coach.email}</p>
            <p>Phone Number: {coach.contact}</p>
            <p>Qualifications: {coach.qualifications}</p>
            <p>Experience(years): {coach.experience}</p>
            <p>Age: {coach.age}</p>
            <p>Location: {coach.location}</p>
            <p>Gender: {coach.gender}</p>
            <p>Type of Coach: {coach.coachType}</p>
            <p>Days Available: {coach.availability}</p>
            <p>Services Offered: {coach.services}</p>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "10px",
              }}
            >
              <Button
                type="button"
                variant="outlined"
                color="primary"
                
              >
                Edit
              </Button>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                onClick={logoutUser}
              >
                Logout
              </Button>
            </Box>
          </CardContent>
        </Card>
       
      </Box>
    </ThemeProvider>
  );
};

export default CoachView;
