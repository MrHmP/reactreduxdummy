import actionType from "../ActionType";
/* eslint-disable no-console */

export default function courseReducer(state = [],action){

    switch(action.type)
    {
        case actionType.CREATE_COURSE:
            return [...state,Object.assign({},action.state)];

        case actionType.EDIT_COURSE:
            return [...state,Object.assign({},action.state)];
        default:
        return state;
    }
}
