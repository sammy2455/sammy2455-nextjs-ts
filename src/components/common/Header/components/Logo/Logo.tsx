import React from 'react';
import Link from "next/link";
import AppLinks from "@/constants/appLinks";

const Logo: React.FC = () => {
    return (
        <div className="logo">
            <Link className="navbar-brand me-0" href={AppLinks.HOME.toString()}>
                <span className="primary">sammy2455</span>
            </Link>
        </div>
    );
}

export default Logo;