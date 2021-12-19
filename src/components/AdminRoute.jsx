
import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import auth from "../firebase/auth";
import { Global } from './contexts/GlobalContext'

export const AdminRoute = ({ component: Component, ...rest }) => {
    const context = useContext(Global).signedUser
  return (
    <Route
      {...rest}
      render={(props) => {
        if (auth.isAuthenticated() && context.authorization === 'admin'){
          return <Component {...props} />;
        } else {
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