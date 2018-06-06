import React, {component} from 'react'
import { BrowserRouter, NavLink } from 'react-router-dom'
import './header.css'

const Header = () => {
    return (
        <header className="container App-header">
            <img className="logo" src="img/logo.png" />
            <h1>Mister 8BitCoin</h1>
            <div className="nav-bar">
                <NavLink exact to={process.env.PUBLIC_URL + "/"}>
                    <div>
                        <img src="img/icons/home.jpg" />
                        <div> HOME </div>
                    </div>
                </NavLink>
                <NavLink exact to={process.env.PUBLIC_URL + "/contacts"}>
                    <div>
                        <img src="img/icons/users.jpg" />
                        <div> CONTACTS </div>
                    </div>
                </NavLink>
                <NavLink exact to={process.env.PUBLIC_URL + "/moves"}>
                    <div>
                        <img src="img/icons/ledger.jpg" />
                        <div> LEDGER </div>
                    </div>
                </NavLink>
            </div>
        </header>   
    );
}


export default Header;