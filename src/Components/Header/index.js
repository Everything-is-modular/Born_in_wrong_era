import React from 'react';
import './style.css';
import logo from './../../assets/logo2.svg';

function Header() {
    return (
        <React.Fragment>
            <div className="header">
                <img src={logo} alt="logo" className="logo"/>
                <div className="menu-items">
                    <div>Home</div>
                    <div>Home</div>
                    <div>Home</div>
                    <div>Home</div>
                    <div>Home</div>
                    <div>Home</div>
                    <div>Home</div>
                    <div>Home</div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Header;