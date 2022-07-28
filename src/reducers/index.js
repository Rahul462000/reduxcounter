// in this file we call all the reducer and make it into a one reducer

import changeTheNumber from "./upDown";
import { combineReducers } from "redux";

//  here we call all the reducers file here
const rootReducer = combineReducers({
    changeTheNumber
})

export default rootReducer;