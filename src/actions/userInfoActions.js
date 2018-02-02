import actionType from "../ActionType";

export default function userInfoUpdated(state){
    return { type : actionType.USERNAME_UPDATE, userName: state.userName };
}
