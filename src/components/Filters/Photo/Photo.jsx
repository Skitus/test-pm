import React from "react";
import withPhoto from "../../../images/Vectorasdasd.svg";
import {Switch} from "@mui/material";
import {toggleIsPhoto} from "../../../bll/listOfCandidates/listOfCandidates.slice";
import "./Photo.scss";

const Photo = ({dispatch, candidatesIsPhoto}) => {
    return (
        <div className="with-photo">
            <div className="flex-box-filter">
                <img className="with-photo-img" src={withPhoto}/>
                <p>Только с фотографией</p>
            </div>
            <Switch className="switcher"
                    onChange={() => dispatch(toggleIsPhoto(!candidatesIsPhoto))}/>
        </div>
    );
}
export default Photo;