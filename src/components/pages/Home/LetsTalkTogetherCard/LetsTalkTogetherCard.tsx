import React from "react";
import UpperArrow2 from "@/components/common/Icons/UpperArrow2";
import InformaticaPhrases from "./InformaticaPhrases";
import AppLinks from "@/constants/appLinks";

const LetsTalkTogetherCard: React.FC = () => {
    const phrases = Object.values(InformaticaPhrases);
    const randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];

    return (
        <div className="card lets-talk-together-card">
            <div className="card-body">
                <div className="scrolling-info">
                    <div className="slider-item">
                        <p>{randomPhrase}</p>
                    </div>
                </div>
                <h3 className="card-title">
                    ¡Hola!👋
                    <span className="d-block">Conversemos</span>
                </h3>
                <a className="link-btn" href={AppLinks.CONTACT.toString()}>
                    Hablemos
                    <UpperArrow2 />
                </a>
            </div>
        </div>
    );
};

export default LetsTalkTogetherCard;