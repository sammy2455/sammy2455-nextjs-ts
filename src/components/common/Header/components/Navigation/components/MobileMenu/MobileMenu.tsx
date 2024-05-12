import React, {Fragment} from "react";

const MobileMenu: React.FC = () => {
    return (
        <Fragment>
            <div className="mobile-menu-overlay d-block d-lg-none"></div>
            <div className="mobile-menu-control-bar d-block d-xl-none">
                <button className="mobile-menu-control-bar">
                    <i className="fas fa-bars"></i>
                </button>
            </div>
        </Fragment>
    )
}

export default MobileMenu;