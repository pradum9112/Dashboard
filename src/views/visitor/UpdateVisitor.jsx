import React from "react";
import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import Header from "../../components/header";
import { useTheme } from "../../ThemeProvider";
import { useLocation } from "react-router-dom";

const UpdateVisitor = () => {
  const theme = useTheme();
  const { palette } = theme.theme;
  const location = useLocation();
  const { visitor } = location.state;

  const handleFormSubmit = async (values, actions) => {
    console.log(values);
  };

  const validationSchema = yup.object().shape({
    firstName: yup.string().required("First Name is required"),
    lastName: yup.string().required("Last Name is required"),
    type: yup.string().required("Type is required"),
    address: yup.string().required("Address is required"),
    email: yup.string().email("Invalid email").required("Email is required"),
    bloodGroup: yup.string().required("Blood Group is required"),
    phoneNumber: yup.string().required("Phone Number is required"),
    image: yup.string().url("Invalid URL").nullable(),
    signature: yup.string().url("Invalid URL").nullable(),
  });

  return (
    <Box m="20px" style={{ width: "100%" }}>
      <Header
        title="UPDATE VISITOR"
        breadcrumbs={[
          { text: "visitors", link: "/visitors" },
          {
            text: `update visitor ${visitor.firstName}`,
            link: "/visitors/updatevisitor",
          },
        ]}
      />
      <Formik
        initialValues={visitor}
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
                variant="filled"
                type="text"
                size="small"
                label="Type"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.type}
                name="type"
                error={touched.type && !!errors.type}
                helperText={touched.type && errors.type}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                size="small"
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
                variant="filled"
                type="email"
                size="small"
                label="Email"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.email}
                name="email"
                error={touched.email && !!errors.email}
                helperText={touched.email && errors.email}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                size="small"
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
                variant="filled"
                type="text"
                size="small"
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
                variant="filled"
                type="text"
                size="small"
                label="Image"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.image}
                name="image"
                error={touched.image && !!errors.image}
                helperText={touched.image && errors.image}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                size="small"
                label="Signature"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.signature}
                name="signature"
                error={touched.signature && !!errors.signature}
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
                Update
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};

export default UpdateVisitor;
