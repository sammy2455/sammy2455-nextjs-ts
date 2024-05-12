import React from "react";

const WorkingWithArea: React.FC = () => {
    const technologies = [
        { src: "/assets/img/icons/technologies/javascript.svg", alt: "JavaScript" },
        { src: "/assets/img/icons/technologies/typescript.svg", alt: "TypeScript" },
        { src: "/assets/img/icons/technologies/html5.svg", alt: "HTML5" },
        { src: "/assets/img/icons/technologies/css3.svg", alt: "CSS3" },
        { src: "/assets/img/icons/technologies/php.svg", alt: "PHP" },
        { src: "/assets/img/icons/technologies/python.svg", alt: "Python" },
        { src: "/assets/img/icons/technologies/react.svg", alt: "React" },
        { src: "/assets/img/icons/technologies/vue.svg", alt: "Vue.js" },
        { src: "/assets/img/icons/technologies/nodejs.svg", alt: "Node.js" },
        { src: "/assets/img/icons/technologies/express.svg", alt: "Express" },
        { src: "/assets/img/icons/technologies/mongodb.svg", alt: "MongoDB" },
        { src: "/assets/img/icons/technologies/mysql.svg", alt: "MySQL" },
        { src: "/assets/img/icons/technologies/postgresql.svg", alt: "PostgreSQL" },
        { src: "/assets/img/icons/technologies/ubuntu.svg", alt: "Ubuntu" },
        { src: "/assets/img/icons/technologies/linux.svg", alt: "Linux" },
        { src: "/assets/img/icons/technologies/docker.svg", alt: "Docker" },
        { src: "/assets/img/icons/technologies/laravel.svg", alt: "Laravel" },
        { src: "/assets/img/icons/technologies/fastapi.svg", alt: "FastAPI" },
        { src: "/assets/img/icons/technologies/nextjs.svg", alt: "Next.js" },
        { src: "/assets/img/icons/technologies/nestjs.svg", alt: "NestJS" },
    ];

    return (
        <div className="working-with-area">
            <h2 className="main-common-title">Trabajo con más de {technologies.length - 1} tecnologías ✨, incluyendo
                frameworks web, lenguajes de programación, bases de datos y herramientas de diseño.</h2>
            <div className="working-with-main">
                {technologies.map((tech, index) => (
                    <div key={index} className="items">
                        <img src={tech.src} alt={tech.alt} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default WorkingWithArea;