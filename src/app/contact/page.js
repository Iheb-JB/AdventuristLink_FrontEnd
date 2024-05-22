import Icon from "@/uitils/Icon";
import React from "react";

const page = () => {
  return (
    <>
      <div className="contact-page pt-120 mb-120">
        <div className="container">
          <div className="row g-lg-4 gy-5">
              <div className="contact-form-area">
                <h3>Reach Us Anytime</h3>
                <form>
                  <div className="single-contact mb-40">
                <div className="title">
                  <h6>Phone</h6>
                </div>
                <div className="icon">
                <Icon name="phone"  width={22} height={20} viewBox="0 0 22 20"></Icon>
                </div>
                <div className="content">
                  <h6>
                    <a href="tel:">+36 20 519 3429</a>
                  </h6>
                </div>
              </div>
              <div className="single-contact mb-40">
                <div className="title">
                  <h6>Email Now</h6>
                </div>
                <div className="icon">
                  <Icon name="email"  width={27} height={20} viewBox="0 0 27 20"></Icon>
                </div>
                <div className="content">
                  <h6>
                    <a href="mailto:adventuristLink@gmail.com">testpurposecd1@gmail.com</a>
                  </h6>
                </div>
              </div>
              <div className="single-contact mb-40">
                <div className="title">
                  <h6>Location</h6>
                </div>
                <div className="icon">
                 <Icon name="destSearch"  width={25} height={20} viewBox="0 0 25 20"></Icon>
                </div>
                <div className="content">
                  <h6>
                    <a href="#">
                      Műegyetem rkp. 3, 1111 ,Budapest ,
                      Hungary
                    </a>
                  </h6>
                </div>
              </div>
                </form>
              </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
