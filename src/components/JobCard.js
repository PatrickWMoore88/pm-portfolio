import React from "react";
import '../styles/WorkHistory.css';

function JobCard({title, company, dates, description}){
    return (
        <div className="job">
            <h3>{title} - {company} </h3>
            <span>{dates}</span>
            <p>{description}</p>
        </div>
    )
}

export default JobCard;