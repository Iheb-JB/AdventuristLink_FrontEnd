import { AuthContext } from "@/hooks/AuthContext";
import Link from "next/link";
import React, { useContext } from "react";
import ReviewModal from "./ReviewModal";

const Breadcrumb = ({ pagename, pagetitle }) => {
  const {showReviewModal,toggleReviewModal} = useContext(AuthContext);
  return (
    <div
      className="breadcrumb-section"
      style={{
        backgroundImage:
          "linear-gradient(270deg, rgba(0, 0, 0, .3), rgba(0, 0, 0, 0.3) 101.02%), url(/assets/img/innerpage/inner-banner-bg.png)",
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12 d-flex justify-content-center">
            <div className="banner-content">
              <h1>{pagename}</h1>
            </div>
          </div>
        </div>
      </div>
      {showReviewModal && <ReviewModal/>}
    </div>
  );
};

export default Breadcrumb;
