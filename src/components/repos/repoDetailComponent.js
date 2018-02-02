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
