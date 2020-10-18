import request from "api/request";

export const getCurrentUserRequest = () =>
  request.GET({
    url: "/users/current",
  });

export const signInRequest = ({ values }) => {
  console.log("signin");
  return request.POST({
    url: "/signin",
    data: {
      email: values.email,
      password: values.password,
    },
  });
};

export const signUpRequest = ({ values }) => {
  return request.POST({
    url: "/signup",
    data: {
      email: values.email,
      username: values.username,
      password: values.password,
      password_confirmation: values.confirmPassword,
    },
  });
};

export const signOutRequest = () => {
  return request.DELETE({
    url: "/logout",
  });
};
