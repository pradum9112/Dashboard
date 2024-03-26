import React from "react";
import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import Header from "../../components/header";
import { useTheme } from "../../ThemeProvider";
import { useLocation } from "react-router-dom";

const UpdateUser = () => {
  const location = useLocation();
  const { user } = location.state;
  const theme = useTheme();
  const { palette } = theme.theme;

  const handleFormSubmit = async (values, actions) => {
    console.log(values);
    // Handle form submission, e.g., send data to backend
  };

  const validationSchema = yup.object().shape({
    firstName: yup.string().required("First Name is required"),
    lastName: yup.string().required("Last Name is required"),
    phoneNumber: yup.string().required("Phone Number is required"),
    address: yup.string().required("Address is required"),
    bloodGroup: yup.string().required("Blood Group is required"),
    workLocation: yup.string().required("Work Location is required"),
    department: yup.string().required("Department is required"),
    image: yup.string().nullable(),
    signature: yup.string().nullable(),
    userActive: yup.boolean().required("User Active status is required"),
  });

  return (
    <Box m="20px" style={{ width: "100%" }}>
      <Header
        title="UPDATE USER"
        breadcrumbs={[
          { text: "users", link: "/users" },
          {
            text: `update user : ${user.user_name}`,
            link: "/users/updateuser",
          },
        ]}
      />
      <Formik
        initialValues={user}
        validationSchema={validationSchema}
        onSubmit={handleFormSubmit}
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
                "& .MuiInputLabel-root": { fontSize: 14 },
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
                "& .MuiFormHelperText-root": { fontSize: 10 },
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
                error={touched.firstName && !!errors.firstName}
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
                error={touched.lastName && !!errors.lastName}
                helperText={touched.lastName && errors.lastName}
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
                error={touched.phoneNumber && !!errors.phoneNumber}
                helperText={touched.phoneNumber && errors.phoneNumber}
              />
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
                error={touched.address && !!errors.address}
                helperText={touched.address && errors.address}
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
                error={touched.bloodGroup && !!errors.bloodGroup}
                helperText={touched.bloodGroup && errors.bloodGroup}
              />
              <TextField
                fullWidth
                size="small"
                variant="filled"
                type="text"
                label="Work Location"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.workLocation}
                name="workLocation"
                error={touched.workLocation && !!errors.workLocation}
                helperText={touched.workLocation && errors.workLocation}
              />
              <TextField
                fullWidth
                size="small"
                variant="filled"
                type="text"
                label="Department"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.department}
                name="department"
                error={touched.department && !!errors.department}
                helperText={touched.department && errors.department}
              />
              <TextField
                fullWidth
                size="small"
                variant="filled"
                type="text"
                label="Image"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.image}
                name="image"
              />
              <TextField
                fullWidth
                size="small"
                variant="filled"
                type="text"
                label="Signature"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.signature}
                name="signature"
              />
              <TextField
                fullWidth
                size="small"
                variant="filled"
                type="text"
                label="User Active"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.userActive}
                name="userActive"
                error={touched.userActive && !!errors.userActive}
                helperText={touched.userActive && errors.userActive}
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
                Update
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};

export default UpdateUser;
