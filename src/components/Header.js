import React from "react";
import {Link} from 'react-router';

class Header extends React.Component{
    render(){
        return (
            <div>
                <nav className="navbar navbar-default">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <Link to="" className="navbar-brand">Website Name</Link>
                        </div>
                        <ul className="nav navbar-nav">
                            <Link to="" className="active navbar-brand">Home</Link>
                            <Link to="about" className="navbar-brand">About</Link>
                            <Link to="courses" className="navbar-brand">Courses</Link>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Header;
