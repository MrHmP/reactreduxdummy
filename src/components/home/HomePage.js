import React from "react";
import { connect } from "react-redux";
import userActions from "../../actions/userInfoActions";
// import UserInfoAction from "../../actions/UserInfoActions";

class HomePage extends React.Component{

    constructor(props,context){
        super(props,context);
        this.updateUser = this.updateUser.bind(this);
    }

    updateUser(e){
        this.props.updateUserName({"userName":e.target.value});
    }

    render(){
        const {userName} = this.props;
        return (
            <div>
                <div className="jumbotron">
                    <h1>Our course home page</h1>
                </div>
                <div>
                    <p>Please update the user name:</p>
                    <input type="text" value={userName.userName} onChange={this.updateUser} />
                </div>
            </div>
        );
    }
}

const mapStateToProps = function(state){
    return {
        userName: state.userName
    };
};

const mapDispatchToProps = function(dispatch){
    return{
        updateUserName : (userName)=>{dispatch(userActions(userName));}
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(HomePage);
