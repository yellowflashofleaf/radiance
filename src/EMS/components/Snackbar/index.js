import React, { useContext } from "react";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import ErrorIcon from "@material-ui/icons/Error";
import { SnackbarContext } from "../../../context/Snackbar/SnackbarContext";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const MySnackbar = () => {
  const snackbarContext = useContext(SnackbarContext);

  const { closeSnackbar, showSnackbar, msg, severity } = snackbarContext;

  const handleClose = () => {
    closeSnackbar();
  };

  return (
    <Snackbar
      variant="outlined"
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      open={showSnackbar}
      onClose={handleClose}
      autoHideDuration={2000}
    >
      <Alert
        onClose={handleClose}
        severity={severity}
        iconMapping={{
          success: (
            <CheckCircleIcon fontSize="large" style={{ color: "#7ed321" }} />
          ),
          error: <ErrorIcon fontSize="large" style={{ color: "red" }} />,
        }}
      >
        {msg}
      </Alert>
    </Snackbar>
  );
};

export default MySnackbar;
