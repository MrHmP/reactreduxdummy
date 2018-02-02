import React from "react";
import {Link} from 'react-router';

class Header extends React.Component{
    render(){
        return (
            <div>
                <nav className="navbar navbar-default navbar-fixed-top">
                    <div className="container-fluid">
                        <ul className="nav navbar-nav">
                            <Link to="" className="active navbar-brand">Home</Link>
                            {/* <Link to="about" className="navbar-brand">About</Link> */}
                            <Link to="courses" className="navbar-brand">Courses</Link>
                            <Link to="repos" className="navbar-brand">Repos</Link>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Header;
