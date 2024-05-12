'use client';

import React from 'react';
import { usePathname } from "next/navigation";
import navbarItems from "./Navbar.Items";

const Navbar: React.FC = () => {

    const pathname = usePathname();

    const isLinkActive = (path: string): boolean => {
        return pathname === path;
    };

    return (
        <ul className="navbar-info mx-auto">
            {navbarItems.map((item) => (
                <li key={item.path} className="nav-item me-1">
                    <a
                        className={`nav-link ${isLinkActive(item.path) ? 'active' : ''}`}
                        href={item.path}
                    >
                        {React.createElement(item.icon)}
                        <span>{item.label}</span>
                    </a>
                </li>
            ))}
        </ul>
    );
}

export default Navbar;