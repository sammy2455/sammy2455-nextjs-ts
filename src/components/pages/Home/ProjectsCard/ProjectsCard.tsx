import React from "react";
import RightArrowIcon from "@/components/common/Icons/RightArrowIcon";
import PlusIcon from "@/components/common/Icons/PlusIcon";
import Link from "next/link";
import { projectItems } from './Projects.Items';
import AppLinks from "@/constants/appLinks";
import Image from "next/image";

const ProjectsCard: React.FC = () => {
    return (
        <div className="card card-projects">
            <div className="card-body">
                <h3 className="card-title">
                    Proyectos recientes
                    <Link className="link-btn" href={AppLinks.PORTFOLIO.toString()}>
                        Ver todo <RightArrowIcon />
                    </Link>
                </h3>
                <div className="projects-main mt-24">
                    <div className="row g-4 parent-container">
                        {projectItems.map((project, index) => (
                            <div key={index} className="col-lg-12">
                                <div className="project-item">
                                    <div className="image">
                                        <Image src={project.image} height={867} width={1233} alt={`project-${index + 1}`} className="img-fluid w-100" />
                                        <a href={project.image} className="gallery-popup full-image-preview parent-container">
                                            <PlusIcon />
                                        </a>
                                        <div className="info">
                                            <span className="category">{project.category}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProjectsCard;