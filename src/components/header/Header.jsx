import React from 'react';
import './Header.css'
import headerLogo from '../../images/Logo.svg'

const Header = () => {
    return (
        <div>
            <nav className='header'>
                <div className="logo">
                    <img src={headerLogo} alt="" />
                </div>
                <div className="menu">
                    <a href="">Order</a>
                    <a href="">Order Review</a>
                    <a href="">Manage Inventory</a>
                    <a href="">Log In</a>
                </div>
            </nav>
        </div>
    );
};

export default Header;