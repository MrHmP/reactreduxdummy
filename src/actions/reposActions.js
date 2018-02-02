import actionType from "../ActionType";

/* eslint-disable no-console */
/* eslint-disable semi */

const reposLoaded = function(state){
    return { type : actionType.REPOS_LOADED, repos: state };
}

export default{
    loadRepos: function (userName) {
        return function(dispatch){
            fetch(`https://api.github.com/users/${userName.userName}/repos`)
             .then(res => res.json())
             .then(
               data => {dispatch(reposLoaded(data.sort((a,b) => new Date(b.updated_at) - new Date(a.updated_at))));}
             );
        }
    }
}
