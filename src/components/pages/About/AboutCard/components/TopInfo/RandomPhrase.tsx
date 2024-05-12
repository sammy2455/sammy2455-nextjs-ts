import React from "react";
import Phrases from "./phrases";

const RandomPhrase: React.FC = () => {
    const phrases = Object.values(Phrases);
    const randomIndex = Math.floor(Math.random() * phrases.length);
    const currentPhrase = phrases[randomIndex];

    return <span>{currentPhrase}</span>;
};

export default RandomPhrase;