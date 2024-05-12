import React from "react";

const TopInfo: React.FC = () => {
    return (
        <div className="top-info">
            <div className="text">
                <h1 className="main-title">Servicios que <span>ofrezco</span></h1>
                <p>
                    Como <b>Ingeniero en TI</b>, ofrezco servicios especializados en el diseño, desarrollo e implementación de soluciones tecnológicas innovadoras. Mi enfoque se centra en transformar ideas en realidad, brindando resultados de alta calidad que impulsen el éxito de tu empresa.
                </p>
            </div>
            <div className="available-btn">
                <span><i className="fas fa-circle"></i> Listo para nuevos desafíos</span>
            </div>
        </div>
    );
};

export default TopInfo;