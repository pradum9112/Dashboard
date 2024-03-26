import React from "react";
import { Box, Button, TextField, MenuItem } from "@mui/material";
import { Formik, Form } from "formik";
import * as yup from "yup";
import Header from "../../components/header";
import { useTheme } from "../../ThemeProvider";

const AddNewVisitor = () => {
  const theme = useTheme();
  const { palette } = theme.theme;

  const handleFormSubmit = async (values) => {
    console.log(values);
    // Here you can perform any action with the form values, such as submitting to a server
  };

  const visitorSchema = yup.object().shape({
    firstName: yup.string().required("First Name is required"),
    lastName: yup.string().required("Last Name is required"),
    type: yup.string().required("User Type is required"),
    address: yup.string().required("Address is required"),
    gov_id_type: yup.string().required("Government ID Type is required"),
    gov_id_no: yup.string().required("Government ID Number is required"),
    email: yup.string().email("Invalid email").required("Email is required"),
    phoneNumber: yup.string().required("Phone Number is required"),
    bloodGroup: yup.string().required("Blood Group is required"),
    image: yup.string().url("Invalid URL").required("Image URL is required"),
    signature: yup
      .string()
      .url("Invalid URL")
      .required("Signature URL is required"),
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
        title="ADD NEW VISITOR"
        breadcrumbs={[
          { text: "visitors", link: "/visitors" },
          { text: "add new visitor", link: "/visitors/addnewvisitor" },
        ]}
      />
      <Formik
        initialValues={initialValues}
        validationSchema={visitorSchema}
        onSubmit={handleFormSubmit}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => (
          <Form onSubmit={handleSubmit}>
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
                select
                fullWidth
                variant="filled"
                size="small"
                label="User Type"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.type}
                name="type"
                error={touched.type && !!errors.type}
                helperText={touched.type && errors.type}
              >
                <MenuItem value="Guest">Guest</MenuItem>
                <MenuItem value="Admin">Admin</MenuItem>
                <MenuItem value="Employee">Employee</MenuItem>
              </TextField>
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
                type="text"
                size="small"
                label="Government ID Type"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.gov_id_type}
                name="gov_id_type"
                error={touched.gov_id_type && !!errors.gov_id_type}
                helperText={touched.gov_id_type && errors.gov_id_type}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                size="small"
                label="Government ID Number"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.gov_id_no}
                name="gov_id_no"
                error={touched.gov_id_no && !!errors.gov_id_no}
                helperText={touched.gov_id_no && errors.gov_id_no}
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
                label="Image URL"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.image}
                name="image"
                error={touched.image && !!errors.image}
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
                Add Visitor
              </Button>
            </Box>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default AddNewVisitor;
