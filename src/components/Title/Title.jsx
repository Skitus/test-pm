import React from 'react';
import burger from "../../images/burger.svg";
import "./Title.scss";

const Title = ({setIsActiveFilters, candidatesTotalCount, isActiveFilters}) => {
    return (
        <div className="content-title">
            <h1 className="title">Мы подобрали <span className="blue-numbers">{candidatesTotalCount}</span> резюме
            </h1>
            <hr className="decor-line"/>
            <div className="flex-box-main">
                <div className="flex-box-title">
                    <p className="sub-title">Резюме продавец консультант во Всей Украине</p>
                    <select className="select">
                        <option>за все время</option>
                        <option>за все сегодня</option>
                        <option>за все месяц</option>
                    </select>
                </div>
                <img onClick={() => setIsActiveFilters(!isActiveFilters)} className="adaptive-icon-filter"
                     src={burger}/>
            </div>
        </div>
    );
}

export default Title;