import React from "react";
import { connect } from "react-redux";
import RepoDetail from "./repoDetailComponent";
import ViewAllCourses from "../course/ViewAllCoursesComponent";
/* eslint-disable no-console */
/* eslint-disable no-debugger */

class ReposPage extends React.Component{

    constructor(props,context){
        super(props,context);

        this.state = {
            repos: []
        };
    }

    showRepoDetails(val,index){
        return(<RepoDetail key={index} repoInfo={val} />);
    }

    render(){
        return(
            <div>
                <div className="junmobtron">
                    <ViewAllCourses allCourses={this.props.courses} />
                </div>
                <div className="jumbotron">
                    <h1>Github Repos</h1>
                    <table className="table table-striped table-hover table-dark">
                        <thead className="thead-light">
                            <tr>
                                <th>Repo Name</th>
                                <th>Languages</th>
                                <th>Last Modified Date</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.repos.map(this.showRepoDetails)}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

const mapStateToProps = function(state){
    return {
        courses: state.courses,
        repos: state.repos
    };
};

export default connect(mapStateToProps)(ReposPage);
