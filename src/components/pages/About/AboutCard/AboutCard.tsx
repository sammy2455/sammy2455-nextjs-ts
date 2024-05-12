import React from 'react';
import {TopInfo} from "@/components/pages/About/AboutCard/components/TopInfo";
import {WorkingWithArea} from "@/components/common/WorkingWithArea";
import {WorkTogetherSlider} from "@/components/common/WorkTogetherSlider";

const AboutCard: React.FC = () => {
    return (
        <div className="card content-box-card">
            <div className="card-body">
                <TopInfo/>
                <WorkingWithArea/>
                <WorkTogetherSlider />
            </div>
        </div>
    )
}

export default AboutCard;