import React, {component} from 'react'
import { NavLink } from 'react-router-dom'
import './header.css'

const Header = () => {
    return (
        <header className="container App-header">
            <img className="logo" src="/img/logo.png" />
            <h1>Mister 8BitCoin</h1>
            <div className="nav-bar">
                <NavLink exact to="/"><img src="/img/icons/home.png" /></NavLink>
                <NavLink exact to="/contacts">Contacts</NavLink>
            </div>
        </header>   
    );
}


export default Header;