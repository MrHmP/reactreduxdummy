import actionType from "../ActionType";

const actions = {
    createCourse : function (state){
        return { type : actionType.CREATE_COURSE, state: state };
    },
    removeCourse : function (state){
        return { type : actionType.DELETE_COURSE, state: state };
    }
};

export default actions;
