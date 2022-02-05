import React from "react";
import {Switch} from "@mui/material";
import student from "../../../images/student.svg";
import "./Experience.scss";

const Experience = () => {
    return (
        <div className="with-experience">
            <h3 className="caption-filter">Опыт работы</h3>

            <div className="flex-box-experience">
                <div className="flex-box-experience">
                    <input className="custom-checkbox" type="checkbox" id="non-experience"/>
                    <label htmlFor="non-experience">Без опыта</label>
                </div>
                <p>603</p>
            </div>

            <div className="flex-box-experience">
                <div className="flex-box-experience">
                    <input className="custom-checkbox" type="checkbox" id="less-1-years"/>
                    <label htmlFor="less-1-years">До 1 года</label>
                </div>
                <p>603</p>
            </div>

            <div className="flex-box-experience">
                <div className="flex-box-experience">
                    <input className="custom-checkbox" type="checkbox" id="1-2-years"/>
                    <label htmlFor="1-2-years">От 1 до 2 лет</label>
                </div>
                <p>603</p>
            </div>

            <div className="flex-box-experience">
                <div className="flex-box-experience">
                    <input className="custom-checkbox" type="checkbox" id="2-5-years"/>
                    <label htmlFor="2-5-years">От 2 до 5 лет</label>
                </div>
                <p>603</p>
            </div>

            <div className="flex-box-experience">
                <div className="flex-box-experience">
                    <input className="custom-checkbox" type="checkbox" id="5-10-years"/>
                    <label htmlFor="5-10-years">От 5 до 10 лет</label>
                </div>
                <p>603</p>
            </div>

            <div className="flex-box-experience">
                <div className="flex-box-experience">
                    <input className="custom-checkbox" type="checkbox" id="10-years"/>
                    <label htmlFor="10-years">Более 10 лет</label>
                </div>
                <p>603</p>
            </div>

            <div className="flex-box-experience-with-switcher">
                <div className="flex-box-experience-with-switcher">
                    <img className="img-experience" src={student}/>
                    <p className="experience-title-with-switcher">Только студенты</p>
                </div>
                <Switch className="switcher"/>
            </div>
        </div>
    );
}
export default Experience;