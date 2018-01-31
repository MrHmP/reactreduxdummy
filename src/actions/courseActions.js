import actionType from "../ActionType";

export default function createCourse(state){
    return { type : actionType.CREATE_COURSE, state: state };
}

export function editCourse(state){
    return { type : actionType.EDIT_COURSE, state: state };
}
