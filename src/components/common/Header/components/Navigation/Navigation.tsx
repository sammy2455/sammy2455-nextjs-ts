import React from "react";
import { Logo } from "./components/Logo";
import { Navbar } from "./components/Navbar";
import Link from "next/link";
import DarkIcon from "@/components/common/Icons/DarkIcon";
import LightIcon from "@/components/common/Icons/LightIcon";
import UpperArrow from "@/components/common/Icons/UpperArrow";
import AppLinks from "@/constants/appLinks";

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
                <Link href={AppLinks.CONTACT.toString()} className="lets-talk-btn">
                    Hablemos <UpperArrow />
                </Link>
            </div>
        </div>
    );
}

export default Navigation;