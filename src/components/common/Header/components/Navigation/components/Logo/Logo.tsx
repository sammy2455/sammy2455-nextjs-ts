import React from 'react';
import Link from "next/link";

const Logo: React.FC = () => {
    return (
        <div className="logo inner-logo d-block d-xl-none">
            <Link className="navbar-brand me-0" href="/">
                <span className="primary">sammy2455</span>
            </Link>
        </div>
    );
}

export default Logo;