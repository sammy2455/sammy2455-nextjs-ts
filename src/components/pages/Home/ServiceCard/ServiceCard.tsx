import React from "react";
import { serviceItems } from './Service.Item';

const ServiceCard: React.FC = () => {
    return (
        <div className="card services-card">
            <div className="card-body">
                <h3 className="card-title">
                    Servicios ofrecidos
                </h3>
                <div className="services-main mt-24">
                    <div className="row g-4">
                        {serviceItems.map((service, index) => (
                            <div key={index} className="col-md-3 col-sm-6 col-6">
                                <div className="services-item text-center">
                                    <div className="image">
                                        <img src={service.icon} height={75} width={75} className="w-auto" alt={service.title.toLowerCase().replace(' ', '-')} />
                                    </div>
                                    <div className="text">
                                        <h3 className="title">{service.title}</h3>
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

export default ServiceCard;