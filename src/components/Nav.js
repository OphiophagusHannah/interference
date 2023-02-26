import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
    return (

        <nav className="nav-wrapper">
            <ul className="navigation-wrapper">

                <Link to="/" className="nav-link"><li>interferance</li></Link>
                <Link to="/exploration" className="nav-link"><li>01.exploration</li></Link>
                <Link to="/points-of-view" className="nav-link"><li>02.points of view</li></Link>
                <Link to="/multispace" className="nav-link"><li>03.multispace</li></Link>
                {/* <Link to="/waves" className="nav-link"><li>04.waves</li></Link> */}
            </ul>
        </nav>

    );
}

export default Nav;
