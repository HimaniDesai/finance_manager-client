import React, { useEffect, useState } from "react";
import './Header.scss'
import logo from '../../assets/logo/logo.png'
import {Link, useLocation} from 'react-router-dom'

export default function Header() {
    const location = useLocation();
    const [url, setUrl] = useState(null);
    useEffect(() => {
        setUrl(location.pathname);
    }, [location]);
    return (
        <div className="header">
            <div className="header__logo">
                <Link className="header__logo__items" to={'/budgetPlanning/dashboard'}>
                    <img className="header__logo__items-image" src={logo} alt="finance-manager-logo"/>
                    <div className="header__logo__items-text">Finance Manager</div>
                </Link>
                <Link to={'/'} className="header__logo__items-logout">LOGOUT</Link>
            </div>
            <div className="header__nav">
                <Link to={'/budgetPlanning/*'}
                    className={url === '/budgetPlanning/dashboard' || url === '/budgetPlanning/planBudget'
                                        ? 'header__nav-item header__nav-item--active' : 'header__nav-item'}>
                        Budget Planning  
                </Link>
                <Link to={'/expenseTracking/*'} 
                    className={url === '/expenseTracking/dashboard' || url === '/expenseTracking/manageExpense'
                                        ? 'header__nav-item header__nav-item--active' : 'header__nav-item'}>
                        Expense Tracker
                </Link>
                <Link to={'/portfolioAnalysis/*'}
                    className={url === '/portfolioAnalysis/dashboard' || url === '/portfolioAnalysis/manageInvestment'
                                        ? 'header__nav-item header__nav-item--active' : 'header__nav-item'}>
                        Portfolio Analysis
                </Link>
                <Link to={'/'} className="header__logout">
                    LOGOUT
                </Link>
            </div>
            
        </div>
    );
}