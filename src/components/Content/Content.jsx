import React, {useEffect, useState} from 'react';
import cancel from "../../images/cancel.svg";
import {useDispatch, useSelector} from "react-redux";
import {fetchCandidates} from "../../bll/listOfCandidates/listOfCandidates.slice";
import {candidatesSelector} from "../../bll/listOfCandidates/listOfCandidates.selector";
import Title from "../Title/Title";
import ListOfCandidates from "../ListOfCandidates/ListOfCandidates";
import Photo from "../Filters/Photo/Photo";
import Age from "../Filters/Age/Age";
import Sex from "../Filters/Sex/Sex";
import Salary from "../Filters/Salary/Salary";
import Experience from "../Filters/Experience/Experience";
import Languages from "../Filters/Languages/Languages";
import TypeEmployment from "../Filters/TypeEmployment/TypeEmployment";
import Education from "../Filters/Education/Education";
import "./Content.scss";

function valuetext(value) {
    return value;
}

const minAge = 2;
const minSalary = 700;

const Content = () => {
    const dispatch = useDispatch();
    const {
        candidatesTotalCount,
        candidatesCurrentPage,
        candidatesPageCount,
        candidatesIsPhoto,
        candidates
    } = useSelector(candidatesSelector);

    const [age, setAge] = useState([20, 40]);
    const [salary, setSalary] = useState([1000, 4000]);
    const [open, setOpen] = useState("");
    const [isActiveFilters, setIsActiveFilters] = useState(true);

    const handleClick = (event) => {
        setOpen(event.target.closest("div").querySelector("input").id);
    };

    const handleAge = (
        event,
        newValue,
        activeThumb
    ) => {
        if (!Array.isArray(newValue)) {
            return;
        }

        if (activeThumb === 0) {
            setAge([Math.min(newValue[0], age[1] - minAge), age[1]]);
        } else {
            setAge([age[0], Math.max(newValue[1], age[0] + minAge)]);
        }
    };

    const handleSalary = (
        event,
        newValue,
        activeThumb
    ) => {
        if (!Array.isArray(newValue)) {
            return;
        }

        if (activeThumb === 0) {
            setSalary([Math.min(newValue[0], salary[1] - minSalary), salary[1]]);
        } else {
            setSalary([salary[0], Math.max(newValue[1], salary[0] + minSalary)]);
        }
    };

    useEffect(() => {
        dispatch(fetchCandidates({candidatesCurrentPage, candidatesIsPhoto}));
    }, [candidatesCurrentPage, candidatesIsPhoto]);

    const candidatesPerPage = Math.ceil(candidatesTotalCount / candidatesPageCount);

    return (
        <div className="content-wrapper">
            <Title
                isActiveFilters={isActiveFilters}
                setIsActiveFilters={setIsActiveFilters}
                candidatesTotalCount={candidatesTotalCount}
            />

            <div className="content-flex-box">
                <ListOfCandidates
                    candidates={candidates}
                    candidatesCurrentPage={candidatesCurrentPage}
                    candidatesPerPage={candidatesPerPage}
                />
                <div className={isActiveFilters ? "filters" : "filters active"}>
                    <div className="filters-box">
                        <img className="cancel" src={cancel} onClick={() => setIsActiveFilters(!isActiveFilters)}/>
                        <h2>Фильтры</h2>

                        <Photo dispatch={dispatch} candidatesIsPhoto={candidatesIsPhoto}/>

                        <Age handleAge={handleAge} age={age} valuetext={valuetext}/>

                        <Sex/>

                        <Salary valuetext={valuetext} salary={salary} handleSalary={handleSalary}/>

                        <Experience/>

                        <Languages handleClick={handleClick} open={open}/>

                        <TypeEmployment/>

                        <Education/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Content;