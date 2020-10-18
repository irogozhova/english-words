import React from "react";
import { useField } from "formik";

const Input = (props) => {
  const [field, meta] = useField(props.name);
  const { touched, error } = meta;

  return (
    <input
      type="text"
      {...props}
      {...field}
      // helperText={touched && error ? error : ""}
      // error={touched && Boolean(error)}
    />
  );
};

export default React.memo(Input);
