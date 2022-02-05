import React from 'react';
import linedin from "../../images/twitter.svg";
import facebook from "../../images/linkedin.svg";
import instagram from "../../images/Group 58.svg";
import youtube from "../../images/Group 55.svg";
import bootstrap from "../../images/bootstrap.svg";
import twitter from "../../images/iconfucku.svg";
import "./Footer.scss";

const MyComponent = () => {
    return (
        <div className="footer-wrapper">
            <div className="flex-footer">
                <div className="another">
                    <p>Другое</p>
                    <p>Про Нас</p>
                    <p>Блог</p>
                </div>
                <div className="cooperation">
                    <p>Сотрудничество с нами</p>
                    <p>Реклама на сайте</p>
                    <p>Партнерская программа</p>
                    <p>Контакты</p>
                </div>
                <div className="media">
                        <a href="#"><img src={twitter}/></a>
                        <a href="#"><img src={linedin}/></a>
                        <a href="#"><img src={facebook}/></a>
                        <a href="#"><img src={instagram}/></a>
                        <a href="#"><img src={youtube}/></a>
                        <a href="#"><img src={bootstrap}/></a>
                </div>
            </div>

            <div className="bottom-footer">
                <span>Privacy Policy </span>
                <span className="active">© 2021  All rights reserved</span>
                <span>Terms of Use</span>
            </div>
        </div>
    );
};

export default MyComponent;
