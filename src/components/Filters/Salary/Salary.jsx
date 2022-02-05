import React from "react";
import {Slider, Switch} from "@mui/material";
import "./Salary.scss";

const Salary = ({salary, handleSalary, valuetext}) => {
    return (
        <div className="with-salary">
            <h3 className="caption-filter">Желаемая зарплата</h3>
            <Slider
                max={6000}
                min={400}
                getAriaLabel={() => 'Minimum distance shift'}
                value={salary}
                onChange={handleSalary}
                valueLabelDisplay="auto"
                getAriaValueText={valuetext}
                disableSwap
            />
            <div className="inputs-slider">
                <p>от</p>
                <input className="from-age" value={salary[0]}/>
                <p>до</p>
                <input className="to-age" value={salary[1]}/>
                <p>грн</p>
            </div>
            <div className="show-flag">
                <p>Не показывать без зарплаты</p>
                <Switch className="switcher"/>
            </div>
        </div>
    );
}
export default Salary;