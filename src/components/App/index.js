import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import ProtectedRoute from "components/ProtectedRoute";
import Signin from "components/Signin";
import Signup from "components/Signup";
import Dashboard from "components/Dashboard";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: "user/getCurrentUser" });
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/signin" component={Signin} />
        <Route path="/signup" component={Signup} />
        <ProtectedRoute exact={true} path="/" component={Dashboard} />
        <ProtectedRoute component={Dashboard} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
