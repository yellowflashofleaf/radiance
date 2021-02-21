import React, {useContext} from "react";
import {Redirect, Route} from "react-router-dom";
import {AuthContext} from "./context/Auth/AuthContext";

export const ProtectedRoute = ({component: Component, ...rest}) => {
    const authContext = useContext(AuthContext);

    const {isAuth} = authContext;

    return (
        <Route
            {...rest}
            render={(props) => {
                if (isAuth || localStorage.getItem("token")) {
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
