import React from "react";
import { expertiseItems } from './Expertise.Items';

const ExpertiseCard: React.FC = () => {
    return (
        <div className="card expertise-card">
            <div className="card-body">
                <h3 className="card-title">Mi especialidad</h3>
                <div className="expertise-main mt-24">
                    <div className="row g-3">
                        {expertiseItems.map((expertise, index) => (
                            <div key={index} className="col-xl-4 col-md-4 col-sm-6 col-6">
                                <div className="expertise-item">
                                    <div className="image text-center">
                                        <img src={expertise.icon} height={32} width={32} alt={expertise.title} />
                                    </div>
                                    <div className="text">
                                        <h4 className="title">{expertise.title}</h4>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ExpertiseCard;