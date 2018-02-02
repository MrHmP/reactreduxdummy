import {combineReducers} from "redux";
import courses from "./courseReducers";
import repos from "./reposReducers";
import userName from "./userInfoReducers";

export default combineReducers({
    courses, repos, userName
});
