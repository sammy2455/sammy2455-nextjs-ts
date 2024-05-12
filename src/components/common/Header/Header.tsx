import React from "react";
import { Logo } from "./components/Logo";
import { Navigation } from "./components/Navigation";
import MobileMenu from "@/components/common/Header/components/Navigation/components/MobileMenu/MobileMenu";

const Header: React.FC = () => {
    return (
        <header className="header-area">
            <nav className="navbar">
                <div className="container">
                    <div className="menu-container">
                        <Logo />
                        <Navigation />
                        <MobileMenu />
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;