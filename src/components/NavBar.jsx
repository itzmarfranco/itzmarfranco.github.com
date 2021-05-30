import React from 'react'
import {
    Link
  } from "react-router-dom";

function NavBar() {
    return (
        <div className='tabs'>
            <ul className=''>
                <li>
                    <Link to="/">About</Link>
                </li>
                <li>
                    <Link to="/resume">Resume</Link>
                </li>
            </ul>
        </div>
    )
}

export default NavBar
