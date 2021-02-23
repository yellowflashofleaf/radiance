import React, {createContext, useReducer} from "react";
import * as actionTypes from "../types";
import SnackbarReducer from "./SanckbarReducer";

export const SnackbarContext = createContext();

const SnackbarContextProvider = (props) => {
    const initialState = {
        showSnackbar: false,
        msg: "",
        severity: "success",
    };

    const [state, dispatch] = useReducer(SnackbarReducer, initialState);

    const openSnackbar = (msg, severity) => {
        dispatch({
            type: actionTypes.OPEN_SNACKBAR,
            msg: msg,
            severity: severity,
        });
    };

    const closeSnackbar = () => {
        dispatch({type: actionTypes.CLOSE_SNACKBAR});
    };

    return (
        <SnackbarContext.Provider
            value={{
                openSnackbar,
                closeSnackbar,
                showSnackbar: state.showSnackbar,
                msg: state.msg,
                severity: state.severity,
            }}
        >
            {props.children}
        </SnackbarContext.Provider>
    );
};

export default SnackbarContextProvider;
