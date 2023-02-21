import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";
const theme = createTheme({
  typography: {
    fontFamily: "Inter, sans-serif",
  },
});

const initialValues = {
  name: "",
  age: "",
  email: "",
  location: "",
  profilePicture: "",
  gender: "",
  contact: "",
  coachType: "",
  qualifications: "",
  pricing: "",
  servicesOffered: "",
  availability: "",
  password: "",
  confirmPassword: "",
};
// Form validation using yup
const validationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  age: Yup.number()
    .min(18, "You must be above 18years old")
    .required("Age is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  location: Yup.string().required("Location is required"),
  profilePicture: Yup.string(),
  gender: Yup.string().required("Gender is required"),
  contact: Yup.string().required("Contact is required"),
  coachType: Yup.string().required("Coach Type is required"),
  qualifications: Yup.string().required("Qualifications is required"),
  pricing: Yup.string().required("Pricing is required"),
  servicesOffered: Yup.string().required("Services Offered is required"),
  availability: Yup.string().required("Availability is required"),
  password: Yup.string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is required"),
});
// onsubmit function
const onSubmit = (values) => {
  console.log(values);
};

// Coach registration component
const CoachRegistration = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="xs" component="main">
        {/* conatins all the information of the page */}
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {/* Form Title */}
          <Typography component="h2" variant="h5">
            Coach Registration Form
          </Typography>
          <Typography variant="h6" gutterBottom>
            Personal Details
          </Typography>
          <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
          >
            {({
              isSubmitting,
              values,
              errors,
              handleSubmit,
              handleChange,
              touched,
            }) => (
              // Beginning of the form
              <Box
                component="form"
                onSubmit={handleSubmit}
                noValidate
                sx={{ mt: 1 }}
              >
                <Grid container spacing={2}>
                  <Grid item sm={12}>
                    <TextField
                      color="success"
                      autoComplete="given-name"
                      name="name"
                      required
                      fullWidth
                      id="name"
                      label="Full Name"
                      autoFocus
                      value={values.name}
                      onChange={handleChange}
                      error={touched.name && Boolean(errors.name)}
                      helperText={touched.name && errors.name}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      color="success"
                      required
                      fullWidth
                      id="email"
                      label="Email Address"
                      name="email"
                      autoComplete="email"
                      type="email"
                      value={values.email}
                      onChange={handleChange}
                      error={touched.email && Boolean(errors.email)}
                      helperText={touched.email && errors.email}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      color="success"
                      required
                      fullWidth
                      id="age"
                      label="Age"
                      name="age"
                      type="number"
                      value={values.age}
                      onChange={handleChange}
                      error={touched.age && Boolean(errors.age)}
                      helperText={touched.age && errors.age}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      color="success"
                      required
                      id="location"
                      name="location"
                      label="Location"
                      fullWidth
                      value={values.location}
                      onChange={handleChange}
                      error={touched.location && Boolean(errors.location)}
                      helperText={touched.location && errors.location}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      color="success"
                      required
                      id="contact"
                      name="contact"
                      label="Contact"
                      fullWidth
                      type="phone"
                      value={values.contact}
                      onChange={handleChange}
                      error={touched.contact && Boolean(errors.contact)}
                      helperText={touched.contact && errors.contact}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <FormControl
                      fullWidth
                      error={touched.gender && Boolean(errors.gender)}
                    >
                      <InputLabel id="genderType">Gender</InputLabel>
                      <Select
                        color="success"
                        id="gender"
                        name="gender"
                        label="Gender"
                        fullWidth
                        labelId="genderType"
                        onChange={handleChange}
                        value={values.gender}
                      >
                        <MenuItem value="Male">Male</MenuItem>
                        <MenuItem value="Female">Female</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <FormControl
                      fullWidth
                      error={touched.coachType && Boolean(errors.coachType)}
                    >
                      <InputLabel id="coach">Type of coach</InputLabel>
                      <Select
                        color="success"
                        id="coachType"
                        name="coachType"
                        label="Type of Coach"
                        fullWidth
                        labelId="coach"
                        onChange={handleChange}
                        value={values.coachType}
                      >
                        <MenuItem value="Fitness coach">Fitness coach</MenuItem>
                        <MenuItem value="Nutrition coach">
                          Nutrition coach
                        </MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Button
                      variant="contained"
                      type="submit"
                      sx={{ mt: 3, mb: 2 }}
                    >
                      Submit
                    </Button>
                  </Grid>
                </Grid>
              </Box>
              // End of the form
            )}
          </Formik>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default CoachRegistration;
