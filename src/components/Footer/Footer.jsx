import React from "react";
import './Footer.scss'
import github from '../../assets/logo/github.png'
import instagram from '../../assets/logo/instagram-icon.png'
import linkedIn from '../../assets/logo/linkedIn-icon.png'

export default function Footer() {
    return (
        <>  
        <div className="footer">
            <div className="footer__promise">We keep your data SAFE !!!</div>
            <div className="footer__icons">
                <a href="https://www.github.com/HimaniDesai"><img className="footer__icons-image" src={github} alt="github-icon"/></a>
                <a href="https://www.instagram.com/himanidesai1999"><img className="footer__icons-image" src={instagram} alt="instagram-icon" /></a>
                <a href="https://www.linkedin.com/in/desaihimani"><img className="footer__icons-image" src={linkedIn} alt="linkedIn-icon" /></a>
            </div>
        </div>
        </>
    )
}