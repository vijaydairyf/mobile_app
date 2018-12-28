import {combineReducers} from "redux";
import {reducer as formReducer} from "redux-form";

import appReducer from "./appReducer";
import authReducer from "./authReducer";

const reducers = {
    appReducer,
    form: formReducer,
    authReducer
};

export default combineReducers(reducers);
