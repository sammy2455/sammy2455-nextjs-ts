import {ProfileCard} from "@/components/common/ProfileCard";
import {ServiceCard} from "@/components/pages/Services/ServicesCard";

export default function Services() {
    return (
        <section className="content-box-area mt-4">
            <div className="container">
                <div className="row g-4">
                    <div className="col-xl-4">
                        <ProfileCard />
                    </div>
                    <div className="col-xl-8">
                        <ServiceCard />
                    </div>
                </div>
            </div>
        </section>
    )
}