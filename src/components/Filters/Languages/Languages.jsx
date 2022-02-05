import React, {useEffect, useRef, useState} from "react";
import {Collapse, List, ListItem, ListItemButton, Radio} from "@mui/material";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import russian from "../../../images/russia 1.svg";
import britain from "../../../images/united-kingdom 1.svg";
import ukrain from "../../../images/ukraine (1) 1.svg";
import german from "../../../images/germany 1.svg";
import polland from "../../../images/poland 1.svg";
import spanish from "../../../images/spain 1.svg";
import "./Languages.scss";

const mockLanguages = [
    {
        nameLanguage: "Английский",
        srcImg: britain,
        summaryNumber: 603,
        levels: [
            {
                nameLevels: "(А1) – начальный",
                number: 73
            },
            {
                nameLevels: "(А2) – ниже среднего",
                number: 73
            },
            {
                nameLevels: "(В1) – средний",
                number: 73
            },
            {
                nameLevels: "(В2) – выше среднего",
                number: 73
            },
            {
                nameLevels: "(C1) – продвинутый",
                number: 73
            },
            {
                nameLevels: "(C2) – профессиональный уровень владения",
                number: 73
            }
        ]
    },
    {
        nameLanguage: "Русский",
        srcImg: russian,
        summaryNumber: 603,
        levels: [
            {
                nameLevels: "(А1) – начальный",
                number: 73
            },
            {
                nameLevels: "(А2) – ниже среднего",
                number: 73
            },
            {
                nameLevels: "(В1) – средний",
                number: 73
            },
            {
                nameLevels: "(В2) – выше среднего",
                number: 73
            },
            {
                nameLevels: "(C1) – продвинутый",
                number: 73
            },
            {
                nameLevels: "(C2) – профессиональный уровень владения",
                number: 73
            }
        ]
    },
    {
        nameLanguage: "Украинский",
        srcImg: ukrain,
        summaryNumber: 603,
        levels: [
            {
                nameLevels: "(А1) – начальный",
                number: 73
            },
            {
                nameLevels: "(А2) – ниже среднего",
                number: 73
            },
            {
                nameLevels: "(В1) – средний",
                number: 73
            },
            {
                nameLevels: "(В2) – выше среднего",
                number: 73
            },
            {
                nameLevels: "(C1) – продвинутый",
                number: 73
            },
            {
                nameLevels: "(C2) – профессиональный уровень владения",
                number: 73
            }
        ]
    },
    {
        nameLanguage: "Немецкий",
        srcImg: german,
        summaryNumber: 603,
        levels: [
            {
                nameLevels: "(А1) – начальный",
                number: 73
            },
            {
                nameLevels: "(А2) – ниже среднего",
                number: 73
            },
            {
                nameLevels: "(В1) – средний",
                number: 73
            },
            {
                nameLevels: "(В2) – выше среднего",
                number: 73
            },
            {
                nameLevels: "(C1) – продвинутый",
                number: 73
            },
            {
                nameLevels: "(C2) – профессиональный уровень владения",
                number: 73
            }
        ]
    },
    {
        nameLanguage: "Польский",
        srcImg: polland,
        summaryNumber: 603,
        levels: [
            {
                nameLevels: "(А1) – начальный",
                number: 73
            },
            {
                nameLevels: "(А2) – ниже среднего",
                number: 73
            },
            {
                nameLevels: "(В1) – средний",
                number: 73
            },
            {
                nameLevels: "(В2) – выше среднего",
                number: 73
            },
            {
                nameLevels: "(C1) – продвинутый",
                number: 73
            },
            {
                nameLevels: "(C2) – профессиональный уровень владения",
                number: 73
            }
        ]
    },
    {
        nameLanguage: "Испанский",
        srcImg: spanish,
        summaryNumber: 603,
        levels: [
            {
                nameLevels: "(А1) – начальный",
                number: 73
            },
            {
                nameLevels: "(А2) – ниже среднего",
                number: 73
            },
            {
                nameLevels: "(В1) – средний",
                number: 73
            },
            {
                nameLevels: "(В2) – выше среднего",
                number: 73
            },
            {
                nameLevels: "(C1) – продвинутый",
                number: 73
            },
            {
                nameLevels: "(C2) – профессиональный уровень владения",
                number: 73
            }
        ]
    }
];

const Languages = ({handleClick, open}) => {

    return (
        <div className="with-languages">
            <h3 className="caption-filter">Владение языками</h3>
            <List>
                {
                    mockLanguages.map((language) => (
                        <>
                            <ListItemButton className="language" onClick={(event) => handleClick(event)}>
                                <ListItem>
                                    <ListItem className="language">
                                        <img className="flag" src={language.srcImg}/>
                                        <input className="custom-checkbox" type="checkbox" id={language.nameLanguage}
                                               checked={open === language.nameLanguage ? true : false}/>
                                        <label htmlFor={language.nameLanguage}>
                                            {language.nameLanguage}
                                        </label>
                                    </ListItem>
                                    <p> {language.summaryNumber}</p>
                                </ListItem>
                                {open === language.nameLanguage ? <ExpandLess/> : <ExpandMore/>}
                            </ListItemButton>
                            <Collapse in={open === language.nameLanguage ? true : false} timeout="auto" unmountOnExit>
                                <List component="div" disablePadding>
                                    {
                                        language.levels.map((level) => (
                                            <ListItem className="level">
                                                <ListItem className="level">
                                                    <Radio/>
                                                    <p>{level.nameLevels}</p>
                                                </ListItem>
                                                <p className="count">{level.number}</p>
                                            </ListItem>
                                        ))
                                    }
                                </List>
                            </Collapse>
                        </>
                    ))
                }
            </List>
        </div>
    )
};
export default Languages;