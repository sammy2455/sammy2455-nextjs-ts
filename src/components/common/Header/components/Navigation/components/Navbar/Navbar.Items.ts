import React from "react";

import AppLinks from "@/constants/appLinks";
import HomeIcon from "@/components/common/Icons/HomeIcon";
import AboutIcon from "@/components/common/Icons/AboutIcon";
import ServicesIcon from "@/components/common/Icons/ServicesIcon";
import PortfolioIcon from "@/components/common/Icons/PortfolioIcon";
import BlogIcon from "@/components/common/Icons/BlogIcon";
import ContactIcon from "@/components/common/Icons/ContactIcon";

export interface NavItem {
    path: string;
    label: string;
    icon: React.FC;
}

const navbarItems: NavItem[] = [
    { path: AppLinks.HOME.toString(), label: 'Inicio', icon: HomeIcon },
    { path: AppLinks.ABOUT.toString(), label: 'Acerca de', icon: AboutIcon },
    { path: AppLinks.SERVICES.toString(), label: 'Servicios', icon: ServicesIcon },
    { path: AppLinks.PORTFOLIO.toString(), label: 'Portafolio', icon: PortfolioIcon },
    { path: AppLinks.CONTACT.toString(), label: 'Contacto', icon: ContactIcon },
    { path: AppLinks.BLOG.toString(), label: 'Blog', icon: BlogIcon },
];

export default navbarItems;