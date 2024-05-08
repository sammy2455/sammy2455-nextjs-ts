import React from "react";

const Header: React.FC = () => {
    return (
        <header className="header-area">
            <nav className="navbar">
                <div className="container">
                    <div className="menu-container">
                        <div className="logo">
                            <a className="navbar-brand me-0" href="index.html">
                                <span>Bento<span className="primary">Folio</span></span>
                            </a>
                        </div>
                        <div className="navbar-main d-flex flex-grow-1">
                            <div className="logo inner-logo d-block d-xl-none">
                                <a className="navbar-brand me-0" href="index.html">
                                    <span>Bento<span className="primary">Folio</span></span>
                                </a>
                            </div>
                            <ul className="navbar-info mx-auto">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="index.html">
                                        <span>Home</span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="about.html">
                                        About
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="services.html">
                                        Services
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="portfolio.html">
                                        Works
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="blog.html">
                                        Blog
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="contact.html">
                                        Contact
                                    </a>
                                </li>
                            </ul>
                            <div className="header-right-info d-flex align-items-center">
                                <button className="theme-control-btn">
                                    <span className="dark">
                                        <small className="theme-text d-block d-xl-none">Change appearance</small>
                                    </span>
                                    <span className="light">
                                        <small className="theme-text d-block d-xl-none">Change appearance</small>
                                    </span>
                                </button>
                                <a href="contact.html" className="lets-talk-btn">
                                    Let's Talk
                                </a>
                            </div>
                        </div>
                        <div className="mobile-menu-overlay d-block d-lg-none"></div>
                        <div className="mobile-menu-control-bar d-block d-xl-none">
                            <button className="mobile-menu-control-bar">
                                <i className="fas fa-bars"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;