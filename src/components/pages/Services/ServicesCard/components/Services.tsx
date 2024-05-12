import React from "react";
import { serviceItems } from "@/components/pages/Home/ServiceCard/Service.Item";

const Services: React.FC = () => {
    return (
        <div className="services">
            <div className="row g-4">
                {serviceItems.map((service, index) => (
                    <div key={index} className="col-md-3 col-sm-6 col-6">
                        <div className="services-item text-center">
                            <div className="image">
                                <img src={service.icon} alt={service.title} />
                            </div>
                            <div className="text">
                                <h3 className="title">{service.title}</h3>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="block-image">
                <img src="/assets/img/images/services.jpg" alt="blog-img-1" className="img-fluid w-100" />
            </div>
        </div>
    );
};

export default Services;