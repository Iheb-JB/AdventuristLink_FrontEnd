import Breadcrumb from "@/components/common/Breadcrumb";
import Newslatter from "@/components/common/Newslatter";
import Footer from "@/components/footer/Footer";
import Header2 from "@/components/header/Header2";
import Icon from "@/uitils/Icon";
import Link from "next/link";
import React from "react";
export const metadata = {
  title: "Adventurist's Link ",
  description:
    "Adventurist's Link is a MERN full stack application to meet fellow travelers",
  icons: {
    icon: "/assets/img/logoAdv.svg",
  },
};
const page = () => {
  return (
    <>
      <Header2 />
      <Breadcrumb pagename="Activities" pagetitle="Activities" />
      <div className="activites-pages pt-120 mb-120">
        <div className="container">
          <div className="row g-4">
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="activity-card">
                <img src="/assets/img/innerpage/jungle-hiking1.jpg" alt="" />
                <div className="activity-card-content-wrapper">
                  <div className="activity-card-content">
                    <div className="icon">
                    <Icon name="Hiking" width={40} height={40} viewBox="0 0 54 54"></Icon> 
                    </div>
                    <div className="content">
                      <h6>
                        <Link href="/activities/activities-details">Jungle Hiking</Link>
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="activity-card">
                <img src="/assets/img/innerpage/via-ferrate-01.jpg" alt="" />
                <div className="activity-card-content-wrapper">
                  <div className="activity-card-content">
                    <div className="icon">
                    <Icon name="Hiking" width={40} height={40} viewBox="0 0 40 40"></Icon>
                    </div>
                    <div className="content">
                      <h6>
                        <Link href="/activities/activities-details">Climbing</Link>
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="activity-card">
                <img src="/assets/img/innerpage/mountain-01.jpg" alt="" />
                <div className="activity-card-content-wrapper">
                  <div className="activity-card-content">
                    <div className="icon">
                    <Icon name="Trekking" width={40} height={40} viewBox="0 0 40 40"></Icon>
                    </div>
                    <div className="content">
                      <h6>
                        <Link href="/activities/activities-details">Trekking</Link>
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="activity-card">
                <img src="/assets/img/innerpage/caving.jpg" alt="" />
                <div className="activity-card-content-wrapper">
                  <div className="activity-card-content">
                    <div className="icon">
                    <Icon name="Caving" width={40} height={40} viewBox="0 0 40 40"></Icon>
                    </div>
                    <div className="content">
                      <h6>
                        <Link href="/activities/activities-details">Caving</Link>
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="activity-card">
                <img src="/assets/img/innerpage/scuba-diving-01.jpg" alt="" />
                <div className="activity-card-content-wrapper">
                  <div className="activity-card-content">
                    <div className="icon">
                    <Icon name="Scuba" width={40} height={40} viewBox="0 0 40 40"></Icon>
                    </div>
                    <div className="content">
                      <h6>
                        <Link href="/activities/activities-details">Scuba Diving</Link>
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="activity-card">
                <img src="/assets/img/innerpage/sky-diving-01.jpg" alt="" />
                <div className="activity-card-content-wrapper">
                  <div className="activity-card-content">
                    <div className="icon">
                    <Icon name="Skydiving" width={40} height={40} viewBox="0 0 40 40"></Icon> 
                    </div>
                    <div className="content">
                      <h6>
                        <Link href="/activities/activities-details">Skydiving</Link>
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default page;
