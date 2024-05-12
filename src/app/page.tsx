import {ProfileCard} from "@/components/common/ProfileCard";
import {ExperienceCard} from "@/components/pages/Home/ExperienceCard";
import {ExpertiseCard} from "@/components/pages/Home/ExpertiseCard";
import {ProjectsCard} from "@/components/pages/Home/ProjectsCard";
import {ServiceCard} from "@/components/pages/Home/ServiceCard";
import {LetsTalkTogetherCard} from "@/components/pages/Home/LetsTalkTogetherCard";


export default function Home() {
  return (
      <section className="home-area">
          <div className="container">
              <div className="row g-4">
                  <div className="col-xl-4">
                      <ProfileCard />
                  </div>
                  <div className="col-xl-4">
                      <div className="row g-4">
                          <div className="col-lg-12">
                              <ExperienceCard />
                          </div>
                          <div className="col-lg-12">
                              <ExpertiseCard />
                          </div>
                      </div>
                  </div>
                  <div className="col-xl-4">
                      <ProjectsCard />
                  </div>
              </div>
              <div className="services-area mt-24">
                  <div className="row g-4">
                      <div className="col-xl-8">
                          <ServiceCard />
                      </div>
                      <div className="col-xl-4">
                          <LetsTalkTogetherCard />
                      </div>
                  </div>
              </div>
          </div>
      </section>
  );
}
