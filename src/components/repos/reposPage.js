import React from "react";
import { connect } from "react-redux";
import RepoDetail from "./repoDetailComponent";
import { ToastContainer } from 'react-toastify';
import ReposActions from "../../actions/reposActions";
// import ViewAllCourses from "../course/ViewAllCoursesComponent";

class ReposPage extends React.Component{

    constructor(props,context){
        super(props,context);
    }

    showRepoDetails(val,index){
        return(<RepoDetail key={index} repoInfo={val} />);
    }

    componentWillMount(){
        this.props.getRepos(this.props.userName);
    }

    render(){
        return(
            <div>
                {/* <div className="junmobtron">
                    <ViewAllCourses allCourses={this.props.courses} />
                </div> */}
                <div className="jumbotron">
                    <h1>{this.props.userName.userName}'s Github Repos</h1>
                    <ToastContainer autoClose={2000}/>
                    <table className="table table-striped table-hover table-dark">
                        <thead className="thead-light">
                            <tr>
                                <th>Repo Name</th>
                                <th>Stats</th>
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
        repos: state.repos,
        userName: state.userName
    };
};

const mapDispatchToProps = function(dispatch){
    return {
        getRepos : (userName)=>{dispatch(ReposActions.loadRepos(userName));}
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(ReposPage);
