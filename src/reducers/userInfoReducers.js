import actionType from "../ActionType";
/* eslint-disable no-console */

export default function userInfoReducers(state={},action){

    switch(action.type)
    {
        case actionType.USERNAME_UPDATE:
            return Object.assign({},state,{userName:action.userName});
        default:
        return state;
    }
}
