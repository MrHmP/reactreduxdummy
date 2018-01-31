import React from "react";
import { connect } from "react-redux";
import ViewAllCourses from "./ViewAllCoursesComponent";
import AddCourse from "./AddCourseComponent";
/* eslint-disable no-console */
/* eslint-disable react/no-set-state */

class CoursePage extends React.Component{

    constructor(props,context){
        super(props,context);
    }

    render(){
        return(
            <div>
                <ViewAllCourses allCourses={this.props.courses} />
                <AddCourse />
            </div>
        );
    }
}

const mapStateToProps = function(state){
    return {
        courses: state.courses
    };
};

export default connect(mapStateToProps,null)(CoursePage);
