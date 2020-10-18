import * as Yup from "yup";
import { errorMessages } from "utils/errors";

export default Yup.object().shape({
  email: Yup.string().required(errorMessages.required),
  password: Yup.string().required(errorMessages.required),
});
