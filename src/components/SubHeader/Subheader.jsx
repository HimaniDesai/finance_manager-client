import React, { useEffect, useState } from "react";
import {Link, useLocation} from 'react-router-dom'
import './Subheader.scss'

export default function Subheader({feature, options}) {
    const [path1, setPath1] = useState(null)
    const [path2, setPath2] = useState(null)
    const location = useLocation()
    const [url, setUrl] = useState(null)
    useEffect(() => {
        setUrl(location.pathname);
    }, [location]);
    useEffect(() => {
        if (feature === 'budgetPlanning') {
            setPath1('/budgetPlanning/dashboard')
            setPath2('/budgetPlanning/planBudget')
        } else if (feature === 'expenseTracking') {
            setPath1('/expenseTracking/dashboard')
            setPath2('/expenseTracking/manageExpense')
        } else if (feature === 'portfolioAnalysis') {
            setPath1('/portfolioAnalysis/dashboard')
            setPath2('/portfolioAnalysis/manageInvestment')
        }
    })
    return (
        <>
        <div className="subheader">
            <div className="subheader__container">
                <Link to={path1} 
                    className={url === '/budgetPlanning/dashboard' || url === '/expenseTracking/dashboard' || url === '/portfolioAnalysis/dashboard'
                        ? 'subheader__container__items subheader__container__items--active' : 'subheader__container__items'
                    }>
                {/* <div >className={url === '/dashboard' ? 'header__button header__button--active' : 'header__button'}> */}
                    {options[0]}
                </Link>
                <Link to={path2} 
                    className={url === '/budgetPlanning/planBudget' || url === '/expenseTracking/manageExpense' || url === '/portfolioAnalysis/manageInvestment'
                        ? 'subheader__container__items subheader__container__items--active' : 'subheader__container__items'
                    }>
                    {options[1]}
                </Link>
            </div>
            
        </div>
        </>
    )
}