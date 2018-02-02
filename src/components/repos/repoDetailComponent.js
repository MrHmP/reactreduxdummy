import React,{PropTypes} from "react";
import Moment from "moment";
/* eslint-disable no-console */

class RepoDetails extends React.Component{

    constructor(props,context){
        super(props,context);
        this.onRepoClicked = this.onRepoClicked.bind( );
    }

    onRepoClicked(e){
        debugger
        console.log("hello");
    }

    render(){
        const {repoInfo} = this.props;
        Moment.locale('en');
        return(
            <tr>
                <td>{repoInfo.name}</td>
                <td>{repoInfo.language}</td>
                <td>{Moment(repoInfo.updated_at).format("DD/MM/YYYY")}</td>
                <td><a target="_blank" href={repoInfo.html_url}>View</a></td>
                <td><a onClick={this.onRepoClicked} >Add Repo as Course</a></td>
            </tr>
        );
    }
}

RepoDetails.defaultProps = {};

RepoDetails.propTypes = {
  repoInfo: PropTypes.shape({
    items: PropTypes.Object,
  }),
};

// const mapStateToProps = function(state){
//     return {
//         repos: state.repos
//     };
// };

// export default connect(mapStateToProps)(RepoDetails);
export default RepoDetails;
