import React from "react";
import { useDispatch } from "react-redux";
import { Formik } from "formik";

import PageWrapper from "components/PageWrapper";
import Input from "components/Input";

import validationSchema from "./validationSchema";

const Signup = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values) => {
    dispatch({ type: "user/signup", values });
  };

  return (
    <PageWrapper>
      <Formik
        initialValues={{
          email: "",
          username: "",
          password: "",
          confirmPassword: "",
        }}
        // validationSchema={validationSchema}
        onSubmit={(values) => handleSubmit(values)}
      >
        {(props) => (
          <form onSubmit={props.handleSubmit}>
            <Input name="email" type="email" />
            <Input name="username" type="text" />
            <Input name="password" type="password" />
            <Input name="confirmPassword" type="password" />
            <button
              type="submit"
              // disabled={isPending}
            >
              Зарегистрироваться
            </button>
          </form>
        )}
      </Formik>
    </PageWrapper>
  );
};

export default Signup;
