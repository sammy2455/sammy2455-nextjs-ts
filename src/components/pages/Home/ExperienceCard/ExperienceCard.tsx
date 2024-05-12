import React from "react";
import { workExperience } from './WorkExperience.Items';
import Image from "next/image";

const ExperienceCard: React.FC = () => {
    return (
        <div className="card">
            <div className="card-body work-experiance-card">
                <h3 className="card-title">Experiencia Laboral</h3>
                <div className="work-experiance-main">
                    <ul className="work-experiance-slider list-unstyled">
                        {workExperience.map((experience, index) => (
                            <li key={index}>
                                <div className="date">
                                    <p>{experience.date}</p>
                                </div>
                                <div className="info">
                                    <div className="icon">
                                        <Image src={experience.icon} height={20} width={20} alt={experience.company}/>
                                    </div>
                                    <div className="text">
                                        <h4 className="title">{experience.title}</h4>
                                        <h6 className="subtitle">{experience.subtitle}</h6>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <ul className="work-experiance-slider list-unstyled">
                        {workExperience.map((experience, index) => (
                            <li key={index}>
                                <div className="date">
                                    <p>{experience.date}</p>
                                </div>
                                <div className="info">
                                    <div className="icon">
                                        <Image src={experience.icon} height={20} width={20} alt={experience.company}/>
                                    </div>
                                    <div className="text">
                                        <h4 className="title">{experience.title}</h4>
                                        <h6 className="subtitle">{experience.subtitle}</h6>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default ExperienceCard;