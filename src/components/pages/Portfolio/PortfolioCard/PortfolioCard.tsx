import React from "react";
import TopInfo from "./components/TopInfo";
import {WorkTogetherSlider} from "@/components/common/WorkTogetherSlider";
import PortfolioArea from "./components/PortfolioArea";

const PortfolioCard: React.FC = () => {
    return (
        <div className="card content-box-card">
            <div className="card-body portfolio-card">
                <TopInfo />
                <PortfolioArea />
                <WorkTogetherSlider/>
            </div>
        </div>
    )
}

export default PortfolioCard;