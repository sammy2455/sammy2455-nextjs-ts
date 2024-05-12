import React from "react";
import AppLinks from "@/constants/appLinks";

const WorkPhrases = [
    "👋 Trabajemos juntos",
    "🚀 Construyamos algo increíble",
    "🌟 Hagamos realidad tus ideas",
    "💡 Creemos soluciones innovadoras",
    "🌍 Impactemos el mundo juntos",
    "🤝 Colaboremos para el éxito",
];

const WorkTogetherSlider: React.FC = () => {
    const phrases = [...WorkPhrases, ...WorkPhrases];
    const randomPhrases = phrases.sort(() => 0.5 - Math.random()).slice(0, 4);

    return (
        <div className="work-together-slider">
            <div className="slider-main d-flex gap-4 align-items-center">
                {randomPhrases.map((phrase, index) => (
                    <div key={index} className="slider-item">
                        <a href={AppLinks.CONTACT.toString()}>{phrase}</a>
                        <a href={AppLinks.CONTACT.toString()}>{phrase}</a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default WorkTogetherSlider;