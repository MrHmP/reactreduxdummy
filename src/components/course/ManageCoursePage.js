import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as courseActions from "../../actions/courseActions";
/* eslint-disable no-console */
/* eslint-disable react/no-set-state */

class ManageCoursePage extends React.Component{

    constructor(props,context){
        super(props,context);
    }

    render(){
        return(
            <div>
                {this.props.params.courseName}
            </div>
        );
    }
}

const mapStateToProps = function(state){
    return {
        courses: state.courses
    };
};

const mapDispatchToProps = function(dispatch){
    return {
        actions: bindActionCreators(courseActions,dispatch)
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(ManageCoursePage);
