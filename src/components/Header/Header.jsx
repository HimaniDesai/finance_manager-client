import React from "react";
import './Header.scss'
import logo from '../../assets/logo/logo.png'

export default function Header() {
    return (
        <div className="header">
            <div className="header__logo">
                <img className="header__logo-image" src={logo} alt="finance-manager-logo"/>
                <div className="header__logo-text">Finance Manager</div>
                <div className="header__logo-logout">LOGOUT</div>
            </div>
            <div className="header__nav">
                <div className="header__nav-item">
                    Budget Planning
                </div>
                <div className="header__nav-item">
                    Expense Tracker
                </div>
                <div className="header__nav-item">
                    Portfolio Analysis
                </div>
                <div className="header__logout">
                    LOGOUT
                </div>
            </div>
            
        </div>
    );
}