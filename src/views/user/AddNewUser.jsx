import React, { useEffect, useState } from "react";
import { Box, Button, TextField, Typography, MenuItem } from "@mui/material";
import { Formik, FormikHelpers } from "formik";
import * as yup from "yup";
import Header from "../../components/header";
import { useTheme } from "../../ThemeProvider";

const AddNewUser = () => {
  const theme = useTheme();
  const { palette } = theme.theme;

  const handleFormSubmit = async (values, actions) => {
    console.log(values);
  };

  const checkoutSchema = yup.object().shape({
    firstName: yup.string().required("First Name is required"),
    lastName: yup.string().required("Last Name is required"),
    type: yup.string().required("User Type is required"),
    address: yup.string().required("Address is required"),
    gov_id_type: yup.string().required("Government ID Type is required"),
    gov_id_no: yup.string().required("Government ID Number is required"),
    email: yup.string().email("Invalid email").required("Email is required"),
    phoneNumber: yup.string().required("Phone Number is required"),
  });

  const initialValues = {
    firstName: "",
    lastName: "",
    type: "",
    address: "",
    gov_id_type: "",
    gov_id_no: "",
    email: "",
    bloodGroup: "",
    phoneNumber: "",
    image: "",
    signature: "",
  };

  return (
    <Box m="20px" style={{ width: "100%" }}>
      <Header
        title="ADD NEW USER"
        breadcrumbs={[
          { text: "users", link: "/users" },
          { text: "add new user", link: "/users/addnewuser" },
        ]}
      />
      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={checkoutSchema}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit}>
            <Box
              display="grid"
              gap="25px"
              p={2}
              gridTemplateColumns="repeat(2, minmax(0, 1fr))"
              sx={{
                "& .MuiInputLabel-root": {
                  fontSize: 14,
                },
                "& .MuiInputBase-input": {
                  fontSize: 14,
                  backgroundColor: "white",
                  borderWidth: "1px",
                  borderRadius: "4px",
                  borderStyle: "solid",
                  borderColor: palette.secondary.main,
                  boxShadow:
                    "inset 0 1px 1px rgba(0,0,0,0.075), inset 0 0 8px rgba(0,0,0,0.1)",
                },
                "& .MuiFormHelperText-root": {
                  fontSize: 10,
                },
              }}
            >
              <TextField
                fullWidth
                variant="filled"
                type="text"
                size="small"
                label="First Name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.firstName}
                name="firstName"
                error={!!touched.firstName && !!errors.firstName}
                helperText={touched.firstName && errors.firstName}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                size="small"
                label="Last Name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.lastName}
                name="lastName"
                error={!!touched.lastName && !!errors.lastName}
                helperText={touched.lastName && errors.lastName}
              />
              <TextField
                select
                fullWidth
                size="small"
                variant="filled"
                label="User Type"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.type}
                name="type"
                error={!!touched.type && !!errors.type}
                helperText={touched.type && errors.type}
              >
                <MenuItem value="Guest">Guest</MenuItem>
                <MenuItem value="Admin">Admin</MenuItem>
                <MenuItem value="Employee">Employee</MenuItem>
              </TextField>
              <TextField
                fullWidth
                size="small"
                variant="filled"
                type="text"
                label="Address"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.address}
                name="address"
                error={!!touched.address && !!errors.address}
                helperText={touched.address && errors.address}
              />
              <TextField
                fullWidth
                size="small"
                variant="filled"
                type="text"
                label="Government ID Type"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.gov_id_type}
                name="gov_id_type"
                error={!!touched.gov_id_type && !!errors.gov_id_type}
                helperText={touched.gov_id_type && errors.gov_id_type}
              />
              <TextField
                fullWidth
                size="small"
                variant="filled"
                type="text"
                label="Government ID Number"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.gov_id_no}
                name="gov_id_no"
                error={!!touched.gov_id_no && !!errors.gov_id_no}
                helperText={touched.gov_id_no && errors.gov_id_no}
              />
              <TextField
                fullWidth
                size="small"
                variant="filled"
                type="email"
                label="Email"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.email}
                name="email"
                error={!!touched.email && !!errors.email}
                helperText={touched.email && errors.email}
              />
              <TextField
                fullWidth
                size="small"
                variant="filled"
                type="text"
                label="Blood Group"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.bloodGroup}
                name="bloodGroup"
                error={!!touched.bloodGroup && !!errors.bloodGroup}
                helperText={touched.bloodGroup && errors.bloodGroup}
              />
              <TextField
                fullWidth
                size="small"
                variant="filled"
                type="text"
                label="Phone Number"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.phoneNumber}
                name="phoneNumber"
                error={!!touched.phoneNumber && !!errors.phoneNumber}
                helperText={touched.phoneNumber && errors.phoneNumber}
              />
              <TextField
                fullWidth
                size="small"
                variant="filled"
                type="text"
                label="Image URL"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.image}
                name="image"
                error={!!touched.image && !!errors.image}
                helperText={touched.image && errors.image}
              />
              <TextField
                fullWidth
                size="small"
                variant="filled"
                type="text"
                label="Signature URL"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.signature}
                name="signature"
                error={!!touched.signature && !!errors.signature}
                helperText={touched.signature && errors.signature}
              />
            </Box>
            <Box display="flex" justifyContent="end" mt="20px">
              <Button
                type="submit"
                style={{
                  backgroundColor: palette.primary.main,
                  color: palette.text.main,
                }}
                variant="contained"
              >
                Register
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};

export default AddNewUser;
