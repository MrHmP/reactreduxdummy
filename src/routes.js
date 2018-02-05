import React from "react";
import {Route, IndexRoute} from "react-router";
import App from "./components/App";
import AboutHomePage from "./components/about/AboutHomePage";
import HomePage from "./components/home/HomePage";
import CoursePage from "./components/course/CoursePage";
import ReposPage from "./components/repos/reposPage";
import ManagaeCoursePage from "./components/course/ManageCoursePage";

export default (
    <Route path="/" component={App}>
        <IndexRoute component={HomePage}/>
        <Route path="about" component={AboutHomePage}/>
        <Route path="courses" component={CoursePage}/>
        <Route path="repos" component={ReposPage}/>
        <Route path="manageCourse/(:courseName)" component={ManagaeCoursePage} />
    </Route>
);
