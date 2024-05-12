import {ProfileCard} from "@/components/common/ProfileCard";
import {AboutCard} from "@/components/pages/About/AboutCard";

export default function About() {
    return (
        <section className="content-box-area mt-4">
            <div className="container">
                <div className="row g-4">
                    <div className="col-xl-4">
                        <ProfileCard />
                    </div>
                    <div className="col-xl-8">
                        <AboutCard />
                    </div>
                </div>
            </div>
        </section>
    )
}