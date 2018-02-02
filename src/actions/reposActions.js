import actionType from "../ActionType";

/* eslint-disable no-console */
/* eslint-disable semi */

export default function reposLoaded(state){
    return { type : actionType.REPOS_LOADED, repos: state };
}

export function loadRepos() {
    return function(dispatch){
        fetch("https://api.github.com/users/MrHmp/repos")
         .then(res => res.json())
         .then(
           data => {dispatch(reposLoaded(data));}
         );
    }
}
