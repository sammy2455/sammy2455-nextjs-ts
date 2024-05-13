import React from "react";
import { Logo } from "./components/Logo";
import { Navbar } from "./components/Navbar";
import DarkIcon from "@/components/common/Icons/DarkIcon";
import LightIcon from "@/components/common/Icons/LightIcon";

const Navigation: React.FC = () => {
    return (
        <div className="navbar-main d-flex flex-grow-1">
            <Logo />
            <Navbar />
            <div className="header-right-info d-flex align-items-center">
                <button className="theme-control-btn">
                    <span className="dark">
                        <DarkIcon />
                        <small className="theme-text d-block d-xl-none">Cambiar apariencia</small>
                    </span>
                    <span className="light">
                        <LightIcon />
                        <small className="theme-text d-block d-xl-none">Cambiar apariencia</small>
                    </span>
                </button>
            </div>
        </div>
    );
}

export default Navigation;