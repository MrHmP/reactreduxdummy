import React,{PropTypes} from "react";
import Moment from "moment";
import AddCourseAction from "../../actions/courseActions";
import { connect } from "react-redux";
/* eslint-disable no-console */

class RepoDetails extends React.Component{

    constructor(props,context){
        super(props,context);
        this.onRepoClicked = this.onRepoClicked.bind(this);
    }

    onRepoClicked(e){
        const courseToAdd = {"title":e.target.parentElement.parentElement.firstChild.innerText};
        this.props.addRepoToCourse(courseToAdd);
    }

    render(){
        const {repoInfo} = this.props;
        Moment.locale('en');
        return(
            <tr>
                <td>{repoInfo.name}</td>
                <td>{repoInfo.language}</td>
                <td>{Moment(repoInfo.updated_at).format("DD/MM/YYYY")}</td>
                <td><button className="btn btn-primary" target="_blank" href={repoInfo.html_url}>View on github</button></td>
                <td><button className="btn btn-success" onClick={this.onRepoClicked} >Add Repo as Course</button></td>
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

const mapStateToProps = function(){
    return {
    };
};

const matchDispatchToProps = function(dispatch){
    return{
        addRepoToCourse : repo=>{dispatch(AddCourseAction(repo));}
    };
};

export default connect(mapStateToProps,matchDispatchToProps)(RepoDetails);
