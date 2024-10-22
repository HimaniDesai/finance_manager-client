import React, { useState } from "react";
import './LandingPage.scss'
import logo from '../../assets/logo/logo.png'
import DatePicker from 'react-date-picker'
import { useNavigate } from "react-router-dom";

export default function LandingPage() {
    const navigate = useNavigate();
    const [dob, setdob] = useState(new Date())
    const handleLogin = async (event) => {
        navigate('/budgetPlanning')
    }
    const handleRegister = async (event) => {
        navigate('/budgetPlanning');
    }
    return (
        <>
        <div className="header">
        <div className="header__logo">
                <div className="header__logo__items">
                    <img className="header__logo__items-image" src={logo} alt="finance-manager-logo"/>
                    <div className="header__logo__items-text">
                        <div className="header__logo__items-text__title">Finance Manager</div>
                        <div className="header__logo__items-text__tagline">Budget. Track. Invest. SUCCEED!</div>
                    </div>
                </div>
            </div>
        </div>
        <div className="form">
            <form className=" form__container-left" onSubmit={handleLogin}>
                <div className="form__container__title">Returning User</div>
                <div className="form__container__login-uname">
                    <label className="form__container__login-uname-label">Username / Email:</label>
                    <input className="form__container__login-uname-input" type="text" id="login_username_email" required />
                </div>
                <div className="form__container__login-pwd">
                    <label className="form__container__login-pwd-label">Password:</label>
                    <input className="form__container__login-pwd-input" type="password" name="password" required/>
                </div>
                <div className="form__container__login-button"> 
                    <button className="button">LOGIN</button>
                </div>
            </form>
            <form className="form__container-right" onSubmit={handleRegister}>
                <div className="form__container__title">New User</div>
                <div className="form__container__register-uname">
                    <label className="form__container__register-uname-lable">Username:</label>
                    <input className="form__container__register-uname-input" type="text" id="register_username" required />
                </div>
                <div className="form__container__register-email">
                    <label className="form__container__register-email-lable">Email:</label>
                    <input className="form__container__register-email-input" type="text" id="register_email" required />
                </div>
                <div className="form__container__register-dob">
                    <label className="form__container__register-dob-label">Date of Birth:</label>
                    <div className="form__container__register-dob-input">
                        <DatePicker value={dob} onChange={date => setdob(date)}/>
                    </div>
                </div>
                <div className="form__container__register-pwd">
                    <label className="form__container__register-pwd-label">Password:</label>
                    <input className="form__container__register-pwd-input" type="password" name="password" required/>
                </div>
                <div className="form__container__register-button">
                    <button className="button">REGISTER</button>
                </div>
            </form>
        </div>
        <div className="footer">
            We keep your data SAFE !!!
        </div>
        </>
    ) 
}