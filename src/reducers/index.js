import {combineReducers} from "redux";
import courses from "./courseReducers";
import repos from "./reposReducers";

export default combineReducers({
    courses, repos
});
