import React from "react";
import { connect } from "react-redux";
/* eslint-disable no-console */

class ReposPage extends React.Component{

    constructor(props,context){
        super(props,context);

        this.state = {
            repos: []
        };

    }

    showRepoDetails(val,index){
        return(<div key={index}>{val.name}</div>);
    }

    render(){
        return(
            <div>
                <div className="jumbotron">
                    <h1>Repos</h1>
                    <div>{this.props.repos.map(this.showRepoDetails)}</div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = function(state){
    debugger
    return {
        repos: state.repos
    };
};

export default connect(mapStateToProps)(ReposPage);
