import * as yup from "yup";

export default yup.object({
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  first_name: yup
    .string("Enter your First Name")
    .required("First Name is required"),
  last_name: yup
    .string("Enter your Last Name")
    .required("Last Name is required"),
  type: yup.string("Enter your Last Name").required("Last Name is required"),
  password: yup
    .string("Enter your password")
    .min(8, "Password should be of minimum 8 characters length")
    .required("Password is required"),
});
