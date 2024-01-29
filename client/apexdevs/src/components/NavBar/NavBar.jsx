import React from 'react';
import './NavBar.css'
import { Link } from 'react-router-dom';

function NavBar(){
    const logoText = "APEXDEVS";
    return(
            <div className='superclass'>
                <div className='logo'>{logoText}</div>
                <div className='navlink'>
                    <ul>
                        <li>
                            <Link to='/'>Home</Link>
                        </li>
                        <li>
                            <Link to='/profile'>Profile</Link>
                        </li>
                    </ul>
                </div>
            </div>
    )
}

export default NavBar