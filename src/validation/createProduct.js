import * as yup from "yup";

export default yup.object({
  name: yup.string("Enter your name").required("Name is required"),
  description: yup
    .string("Enter your Description")
    .required("Description is required"),
  price: yup
    .number()
    .min(1, "Price must be at least 1 peso")
    .max(1000, "Price cannot be more than 1000 pesos")
    .required("Price is required"),
});
