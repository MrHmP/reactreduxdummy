import React,{PropTypes} from "react";
/* eslint-disable no-console */
/* eslint-disable react/no-set-state */

class ViewAllCoursesComponent extends React.Component{

    constructor(props,context){
        super(props,context);
    }

    showCourseDetails(val,index){
        return(<div key={index}>{val.title}</div>);
    }

    render(){
        return(
            <div>
                <div className="jumbotron">
                    <h1>Courses</h1>
                    <div>{this.props.allCourses.map(this.showCourseDetails)}</div>
                </div>
            </div>
        );
    }

}
ViewAllCoursesComponent.defaultProps = {};

ViewAllCoursesComponent.propTypes = {
    allCourses: PropTypes.shape({
        items: PropTypes.Object
    })
};

export default ViewAllCoursesComponent;
