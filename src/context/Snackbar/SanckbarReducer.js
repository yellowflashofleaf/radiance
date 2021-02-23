import * as actionTypes from "../types";

export default (state, action) => {
    switch (action.type) {
        case actionTypes.OPEN_SNACKBAR:
            return {
                showSnackbar: true,
                msg: action.msg,
                severity: action.severity,
            };

        case actionTypes.CLOSE_SNACKBAR:
            return {
                showSnackbar: false,
            };

        default:
            return state;
    }
};
