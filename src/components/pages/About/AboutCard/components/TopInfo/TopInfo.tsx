import React from "react";
import "./TopInfo.css";
import RandomPhrase from "./RandomPhrase";

const TopInfo: React.FC = () => {
    return (
        <div className="top-info">
            <div className="available-btn">
                <span><i className="fas fa-circle"></i> <RandomPhrase /></span>
            </div>
            <div className="text">
                <h1 className="main-title">Hola, soy <span>Johnny</span> 👋</h1>
                <div className="description">
                    <p>
                        Ingeniero en TI apasionado por el diseño, desarrollo e implementación de sistemas informáticos
                        innovadores en Ecuador 🇪🇨.
                    </p>
                    <p>
                        Con una sólida trayectoria en el campo de la tecnología, he tenido la oportunidad de trabajar
                        en diversos proyectos, desde aplicaciones web hasta infraestructuras de red robustas.
                        Mi enfoque se centra en brindar soluciones de alta calidad que impulsen el éxito empresarial.
                    </p>
                    <p>
                        Me apasiona mantenerme a la vanguardia de las últimas tendencias y tecnologías en el mundo
                        digital. Estoy comprometido con el aprendizaje continuo y la mejora constante de mis habilidades
                        para ofrecer resultados excepcionales.
                    </p>
                    <p>
                        Mi marca personal se basa en la excelencia técnica, la creatividad y la dedicación. Cada
                        proyecto es una oportunidad para superar expectativas y crear soluciones tecnológicas que
                        marquen la diferencia.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default TopInfo;