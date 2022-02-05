import React from "react";
import "./TypeEmployment.scss";

const TypeEmployment = () => {
    return (
        <div className="with-type-employment">
            <h3 className="caption-filter">Тип занятости</h3>

            <div className="flex-box-experience">
                <div className="flex-box-experience">
                    <input className="custom-checkbox" type="checkbox" id="full"/>
                    <label htmlFor="full">Полная занятость</label>
                </div>
                <p>34567</p>
            </div>

            <div className="flex-box-experience">
                <div className="flex-box-experience">
                    <input className="custom-checkbox" type="checkbox" id="project"/>
                    <label htmlFor="project">Неполная занятость</label>
                </div>
                <p>876</p>
            </div>

            <div className="flex-box-experience">
                <div className="flex-box-experience">
                    <input className="custom-checkbox" type="checkbox" id="remote"/>
                    <label htmlFor="remote">Удаленная работа</label>
                </div>
                <p>1234</p>
            </div>

        </div>
    );
}
export default TypeEmployment;