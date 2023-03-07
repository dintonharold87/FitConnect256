import React, { useEffect, useState } from "react";
import axios from "axios";
import { DataGrid } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Button from "@mui/material/Button";
const theme = createTheme({
  typography: {
    fontFamily: "Inter, sans-serif",
  },
});
const CoachListAdmin = () => {
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

//   handle delete action
const handleDelete = (id) => {
  axios
    .delete(`${process.env.REACT_APP_BACKEND_URL}/coaches/${id}`)
    .then((response) => {
      // If the deletion was successful, remove the item from the data
      setCoaches((prevData) => prevData.filter((item) => item.id !== id));
    })
    .catch((error) => {
      console.log(error);
    });
};

  const columns = [
    { field: "name", headerName: "Name", width: 200 },
    { field: "email", headerName: "Email", width: 200 },
    { field: "contact", headerName: "Contact", width: 200 },
    { field: "qualifications", headerName: "Qualifications", width: 200 },
    // Add other fields here
    { field: "experience", headerName: "Experience(years)", width: 150 },
    { field: "age", headerName: "Age", width: 80 },
    { field: "location", headerName: "Location", width: 200 },
    { field: "gender", headerName: "Gender", width: 100 },
    { field: "coachType", headerName: "Type of coach", width: 200 },
    { field: "availability", headerName: "Days available", width: 200 },
    { field: "services", headerName: "Services offered", width: 200 },
    {
      field: "action",
      headerName: "Action",
      width: 130,
      disableClickEventBubbling: true,
      renderCell: (params) => {
        const onClick = () => {
          handleDelete(params.id);
        };

        return <Button onClick={onClick}>Delete</Button>;
      },
    },
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
            autoHeight
            {...coaches}
          />
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default CoachListAdmin;
