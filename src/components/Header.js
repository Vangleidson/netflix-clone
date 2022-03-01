import React from "react";
import './Header.css'
import Logo from './img/Netflix-medium.png'
import User from './img/Netflix-avatar.png'

export default ({black}) => {
    return(
        <header className={black ? 'black' : ''}>
            <div className="header--logo">
                <a href="/">
                    <img src={Logo} alt="Logo"/>
                </a>
            </div>
            <div className="header--user">
                <a href="/">
                    <img src={User} alt="Username"/>
                </a>
            </div>
        </header>
    )
}