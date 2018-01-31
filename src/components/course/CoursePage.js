import React from "react";
import courseAction from "../../actions/courseActions";
import { connect } from "react-redux";
/* eslint-disable no-console */
/* eslint-disable react/no-set-state */

class CoursePage extends React.Component{

    constructor(props,context){
        super(props,context);

        this.state = {
            course : { title: "" }
        };

        this.onTitleChange = this.onTitleChange.bind(this);
        this.onSaveClick = this.onSaveClick.bind(this);
    }

    onTitleChange(event){
        const course = this.state.course;
        course.title = event.target.value;
        this.setState({course: course});
    }

    onSaveClick(){
        this.props.dispatch(courseAction(this.state.course));
    }

    showCourseDetails(val,index){
        return(<div key={index}>{val.title}</div>);
    }

    render(){
        return(
            <div>
                <div className="jumbotron">
                    <h1>Courses</h1>
                    <div>{this.props.courses.map(this.showCourseDetails)}</div>
                </div>
                <div className="jumbotron">
                    <h1>Add course</h1>
                    <input type="text" value={this.state.course.title} onChange={this.onTitleChange}  />
                    <input type="button" value="Save" onClick={this.onSaveClick} />
                </div>
            </div>
        );
    }
}

const mapStateToProps = function(state){
    return {
        courses: state.courses
    };
};

export default connect(mapStateToProps)(CoursePage);
