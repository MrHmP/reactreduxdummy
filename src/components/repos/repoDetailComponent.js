import React,{PropTypes} from "react";
import Moment from "moment";
import CourseActions from "../../actions/courseActions";
import { connect } from "react-redux";
import { toast } from 'react-toastify';
/* eslint-disable no-console */
/* eslint-disable react/no-set-state */

class RepoDetails extends React.Component{

    constructor(props,context){
        super(props,context);
        this.onRepoClicked = this.onRepoClicked.bind(this);
    }

    onRepoClicked(e){
        const courseToAdd = {"title":e.target.parentElement.parentElement.firstChild.innerText};
        if(!this.props.courses.find(o => o.title===courseToAdd.title))
        {
            this.props.addRepoToCourse(courseToAdd);
            toast.success("Repo added to course");
        }else{
            this.props.removeRepoFromCourse(courseToAdd);
            toast.success("Repo removed from course");
        }
    }

    render(){
        const {repoInfo} = this.props;
        const repoAdded = this.props.courses.find(o => o.title===repoInfo.name);
        Moment.locale('en');
        return(
            <tr>
                <td>{repoInfo.name}</td>
                <td>
                    <button type="button" className="btn btn-small disable">
                        <span className="glyphicon glyphicon-star" aria-hidden="true"></span>
                        <span class="badge badge-light">{repoInfo.stargazers_count}</span>
                    </button>
                    {/* <button type="button" className="btn btn-small disable">
                        <span className="glyphicon glyphicon-eye-open" aria-hidden="true"></span>
                        <span class="badge badge-light">{repoInfo.watchers_count}</span>
                    </button> */}
                    <button type="button" className="btn btn-small disable">
                    <svg aria-hidden="true" class="octicon octicon-repo-forked" height="16" version="1.1" viewBox="0 0 10 16" width="10"><path fill-rule="evenodd" d="M8 1a1.993 1.993 0 0 0-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 0 0 2 1a1.993 1.993 0 0 0-1 3.72V6.5l3 3v1.78A1.993 1.993 0 0 0 5 15a1.993 1.993 0 0 0 1-3.72V9.5l3-3V4.72A1.993 1.993 0 0 0 8 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"></path></svg>
                        <span class="badge badge-light">{repoInfo.forks_count}</span>
                    </button>
                </td>                
                <td>{repoInfo.language}</td>
                <td>{Moment(repoInfo.updated_at).format("DD/MM/YYYY")}</td>
                <td><a className="btn btn-primary" target="_blank" href={repoInfo.html_url}>View on github</a></td>
                <td><button className={repoAdded ? 'btn btn-danger disable': 'btn btn-success'}  onClick={this.onRepoClicked} >{repoAdded ? 'Remove Repo from Course' : 'Add Repo to Course'}</button></td>
            </tr>
        );
    }
}

RepoDetails.defaultProps = {};

RepoDetails.propTypes = {
  repoInfo: PropTypes.shape({
    items: PropTypes.Object
  })
};

const mapStateToProps = function(state){
    return {
        courses: state.courses,
        repos: state.repos
    };
};

const matchDispatchToProps = function(dispatch){
    return{
        addRepoToCourse : repo=>{dispatch(CourseActions.createCourse(repo));},
        removeRepoFromCourse : repo=>{dispatch(CourseActions.removeCourse(repo));}
    };
};

export default connect(mapStateToProps,matchDispatchToProps)(RepoDetails);
