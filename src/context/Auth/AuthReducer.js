import {LOGIN_SUCCESS, LOGOUT, REGISTER_SUCCESS, USER_LOADED,} from "../types";

export default (state, action) => {
    switch (action.type) {
        case USER_LOADED:
            return {
                ...state,
                ...action.payload,
                user: action.payload,
                isAuth: true,
            };

        case LOGIN_SUCCESS:
            console.log(action.payload);
            return {
                ...state,
                isAuth: true,
                user: action.payload.user,
            };


        case REGISTER_SUCCESS:
            return {
                ...state,
            };


        case LOGOUT:
            localStorage.removeItem("token");
            return {
                ...state,
                isAuth: false,
                user: null,
            };

        default:
            return state;
    }
};
