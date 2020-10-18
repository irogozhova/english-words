import * as Yup from "yup";
import { errorMessages } from "utils/errors";

export default Yup.object().shape({
  email: Yup.string().required(errorMessages.required),
  username: Yup.string()
    .required(errorMessages.required)
    .matches(/[A-Za-z0-9_]/, errorMessages.wrongFormat),
  password: Yup.string()
    .required(errorMessages.required)
    .min(6, "Слишком короткий пароль")
    .matches(/[A-Za-z0-9_]/, errorMessages.wrongFormat),
  confirmPassword: Yup.string()
    .required(errorMessages.requiredField)
    .oneOf([Yup.ref("password"), null], "Пароли не совпадают"),
});
