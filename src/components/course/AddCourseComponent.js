import React from "react";
import courseAction from "../../actions/courseActions";
import { connect } from "react-redux";
/* eslint-disable no-console */
/* eslint-disable react/no-set-state */

class AddCourseComponent extends React.Component{

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
        this.props.createCourse(this.state.course);
    }

    render(){
        return(
            <div>
                <div className="jumbotron">
                    <h1>Add course</h1>
                    <input type="text" value={this.state.course.title} onChange={this.onTitleChange}  />
                    <input type="button" value="Save" onClick={this.onSaveClick} />
                </div>
            </div>
        );
    }
}

const mapStateToProps = function(){
    return {
    };
};

const mapDispatchoProps = function(dispatch){
    return {
        createCourse: course => dispatch(courseAction(course))
    };
};

export default connect(mapStateToProps,mapDispatchoProps)(AddCourseComponent);
