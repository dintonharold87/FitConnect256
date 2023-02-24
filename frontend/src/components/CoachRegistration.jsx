import React, { useState } from "react";
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
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import FormHelperText from "@mui/material/FormHelperText";

const theme = createTheme({
  typography: {
    fontFamily: "Inter, sans-serif",
  },
});
// services that coaches can provide
const services = [
  "Cardio",
  "Strength Training",
  "Yoga",
  "Pilates",
  "Meal planning",
  "Nutritional counseling",
  "Sports nutrition",
  "Supplements advice"
];
// Days the coaches can be available
const days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const initialValues = {
  name: "",
  age: "",
  email: "",
  location: "",
  role: "coach",
  gender: "",
  contact: "",
  coachType: "",
  qualifications: "",
  experience: "",
  services: [],
  availability: [],
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
  experience: Yup.string().required("Pricing is required"),
  services: Yup.array()
    .min(1, "Please select at least one service")
    .of(Yup.string().required("Service is required")),
  availability: Yup.array()
    .min(1, "Please select at least one day")
    .of(Yup.string().required("Days available is required")),
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
  
  // code for the stepper
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const steps = ["Personal Details", "Other Details"];

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="xs" component="main" sx={{ mb: 2, mt: 12 }}>
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
                <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
                  {steps.map((label) => (
                    <Step key={label}>
                      <StepLabel>{label}</StepLabel>
                    </Step>
                  ))}
                </Stepper>
                {activeStep === 0 && (
                  <Grid container spacing={2} sx={{ mb: 4 }}>
                    <Grid item xs={12}>
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
                    <Grid item xs={6} sm={6}>
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
                    <Grid item xs={6} sm={6}>
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
                    <Grid item xs={6} sm={6}>
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
                          value={values.gender}
                          onChange={handleChange}
                        >
                          <MenuItem value="Male">Male</MenuItem>
                          <MenuItem value="Female">Female</MenuItem>
                        </Select>
                        {errors.gender && touched.gender && (
                          <FormHelperText>{errors.gender}</FormHelperText>
                        )}
                      </FormControl>
                    </Grid>
                    <Grid item xs={6} sm={6}>
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
                          <MenuItem value="Fitness coach">
                            Fitness coach
                          </MenuItem>
                          <MenuItem value="Nutrition coach">
                            Nutrition coach
                          </MenuItem>
                        </Select>
                        {errors.coachType && touched.coachType && (
                          <FormHelperText>{errors.coachType}</FormHelperText>
                        )}
                      </FormControl>
                    </Grid>
                    <Grid item xs={12}>
                      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                        <Button
                          type="button"
                          variant="contained"
                          color="primary"
                          onClick={handleNext}
                        >
                          Next
                        </Button>
                      </Box>
                    </Grid>
                  </Grid>
                )}
                {activeStep === 1 && (
                  <Grid container spacing={2} sx={{ mb: 18 }}>
                    <Grid item xs={6} sm={6}>
                      <TextField
                        color="success"
                        required
                        fullWidth
                        id="experience"
                        label="Years of Experience"
                        name="experience"
                        type="number"
                        value={values.experience}
                        onChange={handleChange}
                        error={touched.experience && Boolean(errors.experience)}
                        helperText={touched.experience && errors.experience}
                      />
                    </Grid>
                    <Grid item xs={6} sm={6}>
                      <TextField
                        color="success"
                        required
                        id="qualifications"
                        name="qualifications"
                        label="Qualifications"
                        fullWidth
                        value={values.qualifications}
                        onChange={handleChange}
                        error={
                          touched.qualifications &&
                          Boolean(errors.qualifications)
                        }
                        helperText={
                          touched.qualifications && errors.qualifications
                        }
                      />
                    </Grid>
                    <Grid item xs={6} sm={6}>
                      <FormControl
                        fullWidth
                        error={touched.services && Boolean(errors.services)}
                      >
                        <InputLabel id="services-label">
                          Services Offered
                        </InputLabel>
                        <Select
                          labelId="services-label"
                          multiple={true}
                          value={values.services}
                          onChange={handleChange}
                          id="services"
                          label="Services Offered"
                          name="services"
                          color="success"
                          renderValue={(selected) => selected.join(", ")}
                        >
                          {services.map((service) => (
                            <MenuItem key={service} value={service}>
                              {service}
                            </MenuItem>
                          ))}
                        </Select>
                        {errors.services && touched.services && (
                          <FormHelperText>{errors.services}</FormHelperText>
                        )}
                      </FormControl>
                    </Grid>
                    <Grid item xs={6} sm={6}>
                      <FormControl
                        fullWidth
                        error={touched.availability && Boolean(errors.availability)}
                      >
                        <InputLabel id="availability-label">
                          Days Available
                        </InputLabel>
                        <Select
                          labelId="availability-label"
                          multiple={true}
                          value={values.availability}
                          onChange={handleChange}
                          id="availability"
                          label="Days available"
                          name="availability"
                          color="success"
                          renderValue={(selected) => selected.join(", ")}
                        >
                          {days.map((day) => (
                            <MenuItem key={day} value={day}>
                              {day}
                            </MenuItem>
                          ))}
                        </Select>
                        {errors.availability && touched.availability && (
                          <FormHelperText>{errors.availability}</FormHelperText>
                        )}
                      </FormControl>
                    </Grid>
                    <Grid item xs={6} sm={6}>
                      <TextField
                        color="success"
                        id="password"
                        name="password"
                        label="Password"
                        type="password"
                        value={values.password}
                        onChange={handleChange}
                        error={touched.password && Boolean(errors.password)}
                        helperText={touched.password && errors.password}
                      />
                    </Grid>
                    <Grid item xs={6} sm={6}>
                      <TextField
                        color="success"
                        id="confirmPassword"
                        name="confirmPassword"
                        label="Confirm Password"
                        type="password"
                        value={values.confirmPassword}
                        onChange={handleChange}
                        error={
                          touched.confirmPassword &&
                          Boolean(errors.confirmPassword)
                        }
                        helperText={
                          touched.confirmPassword && errors.confirmPassword
                        }
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <Button
                          type="button"
                          variant="outlined"
                          color="primary"
                          onClick={handleBack}
                        >
                          Back
                        </Button>
                        <Button
                          type="submit"
                          variant="contained"
                          color="primary"
                          disabled={isSubmitting}
                        >
                          Submit
                        </Button>
                      </Box>
                    </Grid>
                  </Grid>
                )}
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
