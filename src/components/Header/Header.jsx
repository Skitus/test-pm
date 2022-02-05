import React from 'react';
import planet from "../../images/si-glyph_network-2.png";
import profile from "../../images/profile.svg";
import "./Header.scss";

const Header = () => {
    return (
        <div className="header-wrapper">
            <div className="header-top">
                <div className="header-left">
                    <span>Соискатель <span className="adaptive-arrow"> > </span></span>
                    <span className="active">Работодатель</span>
                    <span>HR</span>
                </div>
                <div className="header-right">
                    <img className="planet" src={planet}/>
                    <select className="select">
                        <option>RU</option>
                        <option>EN</option>
                        <option>UK</option>
                    </select>
                    <a className="sign-up" href="#">Войти</a>
                </div>
            </div>
            <div className="adaptive-header-middle">
                <div className="flex-box-middle">
                    <img src={profile}/>
                    <span>Юра Марченко</span>
                </div>
            </div>
            <div className="header-form">
                <input className="find-candidate" placeholder="На какую должность вы ищете кандидата?"/>
                <input className="city" placeholder="Город"/>
                <button className="button">Найти кандидатов</button>
            </div>
        </div>
    );
};

export default Header;
