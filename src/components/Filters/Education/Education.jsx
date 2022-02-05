import React from "react";
import "./Education.scss";

const Education = () => {
    return (
        <div className="with-education">
            <h3 className="caption-filter">Образование</h3>

            <div className="flex-box-experience">
                <div className="flex-box-experience">
                    <input className="custom-checkbox" type="checkbox" id="higher"/>
                    <label htmlFor="higher">Высшее</label>
                </div>
                <p>34567</p>
            </div>

            <div className="flex-box-experience">
                <div className="flex-box-experience">
                    <input className="custom-checkbox" type="checkbox" id="unfinished-higher"/>
                    <label htmlFor="unfinished-higher">Неоконченное высшее</label>
                </div>
                <p>876</p>
            </div>

            <div className="flex-box-experience">
                <div className="flex-box-experience">
                    <input className="custom-checkbox" type="checkbox" id="medium-special"/>
                    <label htmlFor="medium-special">Средне-специальное</label>
                </div>
                <p>1234</p>
            </div>

            <div className="flex-box-experience">
                <div className="flex-box-experience">
                    <input className="custom-checkbox" type="checkbox" id="average"/>
                    <label htmlFor="average">Среднее</label>
                </div>
                <p>8764</p>
            </div>
        </div>
    );
}
export default Education;