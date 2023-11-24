import React from "react";
import { ReactDOM } from "react";
import Earth from '../images/earth.png';

function Nav() {
    return (
        <nav>
            <img src={Earth} className='nav--logo' alt='Logo'/>
            <span>my travel journal.</span>
        </nav>
    )
}

export default Nav;