import React from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

import PageWrapper from "components/PageWrapper";

import { isCurrentUserPresentSelector } from "redux/user/selectors";

const ProtectedRoute = ({ component }) => {
  const isCurrentUserPresent = useSelector(isCurrentUserPresentSelector);
  console.log("isCurrentUserPresent", isCurrentUserPresent);

  const Component = component;

  return isCurrentUserPresent ? (
    <PageWrapper>
      <Component />
    </PageWrapper>
  ) : (
    <Redirect to={{ pathname: "/signin" }} />
  );
};

export default ProtectedRoute;
