import React,{PropTypes} from "react";
import Header from "./Header";

class App extends React.Component{
    render(){
        return (
            <div className="container-fluid">
                <Header />
                <div>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

App.PropTypes = {
    children: PropTypes.object
};

export default App;
