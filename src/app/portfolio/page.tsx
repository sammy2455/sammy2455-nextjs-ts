import {ProfileCard} from "@/components/common/ProfileCard";
import {PortfolioCard} from "@/components/pages/Portfolio/PortfolioCard";

export default function Portfolio() {
    return (
        <section className="content-box-area mt-4">
            <div className="container">
                <div className="row g-4">
                    <div className="col-xl-4">
                        <ProfileCard />
                    </div>
                    <div className="col-xl-8">
                        <PortfolioCard />
                    </div>
                </div>
            </div>
        </section>
    )
}