import React from "react";
import {Button, ButtonGroup} from "@mui/material";
import "./Sex.scss";

const Sex = () => {
    return (
        <div className="with-sex">
            <h3 className="caption-filter">Пол</h3>
            <div className="sex-buttons">
                <ButtonGroup className="buttons-group" variant="contained">
                    <Button className="active">Любой</Button>
                    <Button>Женщины</Button>
                    <Button>Мужчины</Button>
                </ButtonGroup>
            </div>
        </div>
    );
}
export default Sex;