import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthContext } from "./context/Auth/AuthContext";

export const ProtectedRoute = ({ component: Component, ...rest }) => {
  const authContext = useContext(AuthContext);

  const { isAuth, user } = authContext;

  return (
    <Route
      {...rest}
      render={(props) => {
        if (isAuth || localStorage.getItem("token") ) {
          return <Component {...props} />;
        } else {
          return (
            <Redirect
              to={{
                pathname: "/login",
                state: {
                  from: props.location,
                },
              }}
            />
          );
        }
      }}
    />
  );
};
