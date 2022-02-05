import React from "react";
import {Slider} from "@mui/material";
import "./Age.scss";

const Age = ({age, handleAge, valuetext}) => {
    return (
        <div className="with-age">
            <h3 className="caption-filter">Возраст</h3>
            <Slider
                max={45}
                min={17}
                getAriaLabel={() => 'Minimum distance shift'}
                value={age}
                onChange={handleAge}
                valueLabelDisplay="auto"
                getAriaValueText={valuetext}
                disableSwap
            />
            <div className="inputs-slider">
                <p>от</p>
                <input className="from-age" value={age[0]}/>
                <p>до</p>
                <input className="to-age" value={age[1]}/>
                <p>лет</p>
            </div>
        </div>
    );
}
export default Age;