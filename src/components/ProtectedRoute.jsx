
import React from "react";
import { Route, Redirect } from "react-router-dom";
import auth from "../firebase/auth.js";

export const ProtectedRoute = ({ component: Component, ...rest }) => {

  return (
    <Route
      {...rest}
      render={(props) => {
          console.log("at protected: isAuth:", auth.isAuthenticated());
        if (auth.isAuthenticated()){
          return <Component {...props} />;
        } else {
            console.log("from:from:", props.location);
          return (
            <Redirect
              to={{
                pathname: "/signup",
                state: {from: props.location.pathname}
              }}
            />
          );
        }
      }}
    />
  );
};