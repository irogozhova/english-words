import React from "react";
import { useDispatch } from "react-redux";

const PageWrapper = ({ children }) => {
  const dispatch = useDispatch();

  const handleSignout = () => {
    dispatch({ type: "user/signout" });
  };

  return (
    <>
      <button onClick={handleSignout}>Выйти</button>
      {children}
    </>
  );
};

export default PageWrapper;
