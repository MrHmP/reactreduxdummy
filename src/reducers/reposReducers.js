import actionType from "../ActionType";
/* eslint-disable no-console */

export default function courseReducer(state=[],action){

    switch(action.type)
    {
        case actionType.REPOS_LOADED:
            return action.repos;

        default:
        return state;
    }
}
