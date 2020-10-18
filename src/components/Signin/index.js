import React from "react";
import { useDispatch } from "react-redux";
import { Formik } from "formik";

import PageWrapper from "components/PageWrapper";
import Input from "components/Input";

import validationSchema from "./validationSchema";

const Signin = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values) => {
    dispatch({ type: "user/signin", values });
  };

  return (
    <PageWrapper>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        // validationSchema={validationSchema}
        onSubmit={(values) => handleSubmit(values)}
      >
        {(props) => (
          <form onSubmit={props.handleSubmit}>
            <Input name="email" type="email" />
            <Input name="password" type="password" />
            <button
              type="submit"
              // disabled={isPending}
            >
              Войти
            </button>
          </form>
        )}
      </Formik>
    </PageWrapper>
  );
};

export default Signin;
