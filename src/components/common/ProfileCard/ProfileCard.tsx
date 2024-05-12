import React from "react";
import CopyIcon from "@/components/common/Icons/CopyIcon";
import socialMediaItems from "./SocialMedia.Items";

const ProfileCard: React.FC = () => {
    return (
        <div className="card profile-card">
            <div className="card-body">
                <div className="image text-center">
                    <img src="https://github.com/sammy2455.png" alt="profile" height={250} className="w-auto"/>
                </div>
                <div className="text">
                    <h3 className="card-title">Johnny 👋</h3>
                    <p>Apasionado <span>Ingeniero en TI</span> 🖥️ con experiencia en el
                        diseño, desarrollo e implementación de sistemas informáticos en Ecuador 🇪🇨.
                    </p>
                    <div className="common-button-groups">
                        <a className="btn btn-call" href="https://www.linkedin.com/in/sammy2455/">
                            LinkendIn
                        </a>
                        <button className="btn btn-copy" data-clipboard-text="jhonnyalbert245@gmail.com">
                            <CopyIcon />
                            Copiar correo
                        </button>
                    </div>
                    <div className="social-media-icon">
                        <ul className="list-unstyled">
                            {socialMediaItems.map((item, index) => (
                                <li key={index}>
                                    <a href={item.link}>
                                        <i className={item.icon}></i>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfileCard;