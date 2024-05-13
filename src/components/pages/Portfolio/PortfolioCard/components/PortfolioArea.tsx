import React from "react";
import PlusIcon from "@/components/common/Icons/PlusIcon";
import ArrowUp from "@/components/common/Icons/ArrowUp";

interface Project {
    id: number;
    image: string;
    title: string;
    subtitle: string;
}

const projects: Project[] = [
    {
        id: 1,
        image: "/assets/img/projects/project-1.png",
        title: "Emby - Servidor de películas",
        subtitle: "Linux | Administración de servidores",
    },
    {
        id: 2,
        image: "/assets/img/projects/project-2.png",
        title: "Hello - Página de inicio",
        subtitle: "Aplicación | Back-end | DevOps",
    },
];

const PortfolioArea: React.FC = () => {
    return (
        <div className="portfolio-area">
            <div className="row g-4 parent-container">
                {projects.map((project) => (
                    <div key={project.id} className="col-lg-12">
                        <div className="portfolio-item">
                            <div className="image">
                                <img src={project.image} height={867} width={1233} alt={`project-${project.id}`} className="img-fluid" />
                                <a href={project.image} className="gallery-popup full-image-preview parent-container">
                                    <PlusIcon />
                                </a>
                            </div>
                            <div className="text">
                                <div className="info">
                                    <a href="#" className="title">{project.title}</a>
                                    <p className="subtitle">{project.subtitle}</p>
                                </div>
                                <div className="visite-btn">
                                    <a href="#">
                                        Más información
                                        <ArrowUp />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="pagination">
                <ul className="list-unstyled">
                    {/* Pagination items */}
                </ul>
            </div>
        </div>
    );
};

export default PortfolioArea;