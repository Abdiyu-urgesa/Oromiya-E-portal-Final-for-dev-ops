import {
  Box,
  Button,
  TextField,
  Card,
  FormControl,
  Select,
  InputLabel,
  MenuItem,
} from "@mui/material";
import { Form, Formik } from "formik";
import * as yup from "yup";
import "./register.css";
import { useNavigate } from "react-router-dom";
import { register } from "../../services/service_calls/User_Api";
import AuthContext from "../../context/authContext";
import { useContext } from "react";
import { useTranslation } from "react-i18next";

export default function Register() {
  const [t, i18n] = useTranslation();
  const authCtx = useContext(AuthContext);
  const navigate = useNavigate();
  const checkoutSchema = yup.object().shape({
    account_type: yup.string().required("Field is required."),
    username: yup.string().required("Field is required."),
    email: yup.string().email().required("email is required."),
    // Lname: yup.string().required("Field is required."),
    mobileNumber: yup.string().required("Field is required."),
    password: yup.string().min(6).required("Field is required."),
    repassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords must match"),
  });
  const initialValues = {
    account_type: "Personal",
    username: "",
    email: "",
    // Lname: "",
    mobileNumber: "",
    password: "",
    repassword: "",
  };

  const handleFormSubmit = (values) => {
    console.log(values);
    register(values).then((res) => {
      if (res.success && res.data) {
        authCtx.login(res.data.jwt, res.data.user.username);
        console.log(res.data);
        navigate("/");
      } else {
        console.log(res.error);
      }
    });
  };

  return (
    <Card className="register_wrapper">
      <div className="register_header">
        <p>{t("AccountRegisteration")}</p>
      </div>
      <Formik
        onSubmit={(values) => {
          handleFormSubmit(values);
        }}
        initialValues={initialValues}
        validationSchema={checkoutSchema}
      >
        {({ values, errors, touched, handleBlur, handleChange }) => (
          <Form>
            <Box className="register_input_container">
              <FormControl>
                <InputLabel id="account_type">{t("AccountType")}</InputLabel>
                <Select
                  labelId={"account_type"}
                  label="Account Type"
                  value={values.account_type}
                  size="small"
                  name="account_type"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  error={!!touched.account_type && !!errors.account_type}
                >
                  <MenuItem value="Personal">{t("Personal")}</MenuItem>
                  <MenuItem value="Organization">{t("Organization")}</MenuItem>
                </Select>
              </FormControl>
              <TextField
                variant="outlined"
                size="small"
                type="text"
                label="Your Name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.username}
                name="username"
                error={!!touched.username && !!errors.username}
                helperText={touched.username && errors.username}
              />

              <TextField
                variant="outlined"
                size="small"
                type="text"
                label="Email"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.email}
                name="email"
                error={!!touched.email && !!errors.email}
                helperText={touched.email && errors.email}
              />
              {/*    <TextField
                variant="outlined"
                size="small"
                type="text"
                label="Grand Father Name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.Lname}
                name="Lname"
                error={!!touched.Lname && !!errors.Lname}
                helperText={touched.Lname && errors.Lname}
              /> */}
              <TextField
                variant="outlined"
                size="small"
                type="text"
                label="Mobile Number"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.mobileNumber}
                name="mobileNumber"
                error={!!touched.mobileNumber && !!errors.mobileNumber}
                helperText={touched.mobileNumber && errors.mobileNumber}
              />
              <TextField
                variant="outlined"
                size="small"
                type="password"
                label="Enter new Password"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.password}
                name="password"
                error={!!touched.password && !!errors.password}
                helperText={touched.password && errors.password}
              />
              <TextField
                variant="outlined"
                size="small"
                type="password"
                label="Re-enter Your Password"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.repassword}
                name="repassword"
                error={!!touched.repassword && !!errors.repassword}
                helperText={touched.repassword && errors.repassword}
              />
            </Box>
            <Button
              fullWidth
              style={{ width: "50%", marginBottom: "20px" }}
              className="black_btn"
              type="submit"
              variant="contained"
            >
              {t("Register")}
            </Button>
          </Form>
        )}
      </Formik>
    </Card>
  );
}
