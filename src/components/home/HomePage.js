import React from "react";
import {Link} from 'react-router';

class HomePage extends React.Component{
    render(){
        return (
            <div>
                <div className="jumbotron">
                    <h1>Our course home page</h1>
                </div>
                <div>
                    <p>Following link is just to check the React Router</p>
                    <Link to="about" className="btn btn-large btn-primary">Click me</Link>
                </div>
            </div>
        );
    }
}

export default HomePage;
