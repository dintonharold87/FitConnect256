import React, { useEffect, useState } from "react";
import axios from "axios";
import { DataGrid } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "Inter, sans-serif",
  },
});
const CoachList = () => {
  const [coaches, setCoaches] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/coaches`)
      .then((response) => {
        setCoaches(response.data.coaches);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const columns = [
    { field: "name", headerName: "Name", width: 100 },
    { field: "email", headerName: "Email", width: 200 },
    { field: "contact", headerName: "Contact", width: 200 },
    { field: "qualifications", headerName: "Qualifications", width: 200 },
    // Add other fields here
    { field: "experience", headerName: "Experience(years)", width: 200 },
    { field: "age", headerName: "Age", width: 200 },
    { field: "location", headerName: "Location", width: 200 },
    { field: "gender", headerName: "Gender", width: 200 },
    { field: "coachType", headerName: "Type of coach", width: 200 },
    { field: "availability", headerName: "Days available", width: 200 },
    { field: "services", headerName: "Services offered", width: 200 },
  ];
  return (
    <ThemeProvider theme={theme}>
      <Box m="90px">
        <Typography component="h1" variant="h5">
          List of coaches
        </Typography>
        <Box mt="40px" height="75vh">
          <DataGrid
            rows={coaches}
            columns={columns}
            pageSize={5}
            getRowId={(row) => row._id}
          />
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default CoachList;
