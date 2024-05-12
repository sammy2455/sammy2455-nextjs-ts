import React from "react";
import Image from "next/image";

const BackgroundShapes: React.FC = () => {
    return (
        <div className="background-shapes">
            <div className="shape-1 common-shape">
                <Image src="/assets/img/bg/banner-shape-1.png" height={1088} width={1088} alt="banner-shape-1"/>
            </div>
            <div className="shape-2 common-shape">
                <Image src="/assets/img/bg/banner-shape-1.png" height={1088} width={1088} alt="banner-shape-1"/>
            </div>
            <div className="threed-shape-1 move-with-cursor" data-value="1">
                <Image src="/assets/img/bg/object-3d-1.png" height={64} width={64} alt="object-3d-1"/>
            </div>
            <div className="threed-shape-2 move-with-cursor" data-value="1">
                <Image src="/assets/img/bg/object-3d-2.png" height={116} width={104} alt="object-3d-2"/>
            </div>
        </div>
    );
}

export default BackgroundShapes;