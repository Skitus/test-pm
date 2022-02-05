import React from 'react';
import {getAge, getMonthWork, getUpdatedAt, getYearsOrYear} from "../../types/types";
import place from "../../images/Group 24 (1).svg";
import status from "../../images/Ellipse 17.svg";
import like from "../../images/heart (2) 1.svg";
import options from "../../images/Vector.svg";
import PaginationUsers from "../Pagination/Pagination";
import "./ListOfCandidates.scss";

const ListOfCandidates = ({candidates, candidatesCurrentPage, candidatesPerPage}) => {
    return (
        <div className="candidates">
            {
                candidates.map(candidate => (
                    <div className="candidates-item" key={candidate.id}>
                        <div className="flex-box">
                            <div className="personal-info">
                                <img className="avatar" src={candidate.photo}/>
                                <div className="info">
                                    <h2 className="profession">Продавец - консультант</h2>
                                    <div className="flex-box-info">
                                        <p className="name-age">{candidate.first_name || "Дмитрий"},
                                            {
                                                `
                                                    ${getAge(candidate.birthday || "1998-05-18")} 
                                                    ${getYearsOrYear(getAge(candidate.birthday || "1989-05-18"))}
                                                    `
                                            }</p>
                                        <div className="flex-box-info-city">
                                            <img className="place" src={place}/>
                                            <p className="city-country">Kyiv, Ukraine</p>
                                        </div>
                                    </div>
                                    <div className="previous-jobs">
                                        {
                                            candidate.workexperience.length === 0 ? (
                                                    <div>
                                                        <p>Координатор BALOX Agency - 4 мес.</p>
                                                        <p>Оператор кол центра в DELTA - 11 мес.</p>
                                                    </div>
                                                ) :
                                                candidate.workexperience.map((work) => (
                                                        <p key={work.id}>{`${work.position} ${work.company_name} - ${getMonthWork(work.date_from, work.date_to)} мес.`}</p>
                                                    )
                                                )
                                        }
                                    </div>
                                    <div className="flex-box-info-status">
                                        <p className="time-update">{getUpdatedAt(candidate.updated_at)}</p>
                                        <div className="flex-box-status">
                                            <img className="circle-status" src={status}/>
                                            <p className="status">Онлайн</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="utils">
                                <div className="like">
                                    <img className="like-img" src={like}/>
                                </div>
                                <div className="options">
                                    <img className="options-img" src={options}/>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            <div className="pagination">
                <PaginationUsers currentPage={candidatesCurrentPage} pagesCount={candidatesPerPage}/>
            </div>
        </div>
    );
};

export default ListOfCandidates;
