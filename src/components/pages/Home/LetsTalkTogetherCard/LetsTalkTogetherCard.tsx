import React from "react";
import InformaticaPhrases from "./InformaticaPhrases";

const techPhrases = [
    "¡Exploremos el fascinante mundo digital!",
    "Donde las ideas se transforman en código brillante",
    "Construyendo el futuro, un bit a la vez",
    "Bienvenido al universo de los bytes y algoritmos",
    "Acompáñame en un viaje por el ciberespacio",
    "¡Desatemos la magia de la tecnología!",
    "Donde la imaginación se codifica en realidad",
];

const LetsTalkTogetherCard: React.FC = () => {
    const phrases = Object.values(InformaticaPhrases);
    const randomPhraseSlider = phrases[Math.floor(Math.random() * phrases.length)];
    const randomPhraseTech = techPhrases[Math.floor(Math.random() * techPhrases.length)];

    return (
        <div className="card lets-talk-together-card">
            <div className="card-body">
                <div className="scrolling-info">
                    <div className="slider-item">
                        <p>{randomPhraseSlider}</p>
                    </div>
                </div>
                <h3 className="card-title">
                    {randomPhraseTech}
                    <span className="d-block">👋</span>
                </h3>
            </div>
        </div>
    );
};

export default LetsTalkTogetherCard;