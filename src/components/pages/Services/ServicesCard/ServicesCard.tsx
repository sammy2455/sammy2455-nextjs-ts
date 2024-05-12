import React from "react";
import {WorkingWithArea} from "@/components/common/WorkingWithArea";
import {WorkTogetherSlider} from "@/components/common/WorkTogetherSlider";
import TopInfo from "./components/TopInfo";
import Services from "./components/Services";

const ServiceCard: React.FC = () => {
    return (
        <div className="card content-box-card">
            <div className="card-body">
                <TopInfo />
                <Services />
                <WorkingWithArea/>
                <WorkTogetherSlider/>
            </div>
        </div>
    );
}

export default ServiceCard;