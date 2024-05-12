import React from "react";

const UpperArrow: React.FC = () => {
    return (
        <svg className="icon" width="20" height="20" viewBox="0 0 20 20" fill="none"
             xmlns="http://www.w3.org/2000/svg">
            <path d="M17.5 11.6665V6.6665H12.5" stroke="white" strokeWidth="1.5" strokeLinecap="round"
                  strokeLinejoin="round"/>
            <path d="M17.5 6.6665L10 14.1665L2.5 6.6665" stroke="white" strokeWidth="1.5"
                  strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    );
}

export default UpperArrow;