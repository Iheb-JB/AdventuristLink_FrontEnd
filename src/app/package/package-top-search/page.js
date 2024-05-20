"use client";
import React from "react";
import Breadcrumb from "@/components/common/Breadcrumb";
import Link from "next/link";
import TourCategoryDropdown from "@/components/banner/TourCategoryDropdown";
import DestinationSearch from "@/components/banner/DestinationSearch";
import Newslatter from "@/components/common/Newslatter";
import Footer from "@/components/footer/Footer";
import Header2 from "@/components/header/Header2";
import Icon from "@/uitils/Icon";
import DateRange from "@/components/banner/DateRange";

const page = () => {
  return (
    <>
      <Header2 />
      <Breadcrumb
        pagename="Itinerary Top Search"
        pagetitle="Itinerary Top Search"
      />
      <div className="package-search-filter-wrapper">
        <div className="container">
          <div className="filter-group">
            <form>
              <div className="filter-area">
                <div className="row g-xl-4 gy-4">
                  <div className="col-xl-3 col-sm-6 d-flex justify-content-center">
                    <div className="single-search-box">
                      <div className="icon">
                       <Icon name="destSearch" width={27}  height={27}  viewBox="0 0 27 27"></Icon>
                      </div >
                      <DestinationSearch labelType="Destination" />
                    </div>
                  </div>
                  <div className="col-xl-3 col-sm-6 d-flex justify-content-center divider">
                              <div className="single-search-box">
                                <div className="icon">
                                  <Icon
                                    name="itinType"
                                    width={27}
                                    height={27}
                                    viewBox="0 0 27 27"
                                  ></Icon>
                                </div>
                                <TourCategoryDropdown
                                  style="style-2"
                                  noScroll="two"
                                  labelType="Itinerary Type"
                                  data={[
                                    "Cultural and city Exploration",
                                   "Food and Culinary Experience",
                                   "Adventure and Outdoor Activities",
                                  "Relaxation and Wellness", 
                                  "Party , Festivals and Events",
                                  "Other"
                                  ]}
                             />
                    </div>
                  </div>
                  <div className="col-xl-3 col-sm-6 d-flex justify-content-center">
                    <div className="single-search-box">
                      <div className="icon">
                      <Icon name="activities" width={27}  height={27}  viewBox="0 0 27 27"></Icon>
                      </div>
                      <DateRange
                        label="when"
                         style="style-2"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <button type="submit">Search</button>
            </form>
          </div>
        </div>
      </div>

      <div className="package-top-search-section pt-120 mb-120">
        <div className="container">
          <div className="row gy-5 mb-70">
            <div className="col-lg-4 col-md-6">
              <div className="package-card">
                  <div className="batch">
                    <span className="date">bSuggested Group Size: 3</span>
                  </div>
                <div className="package-card-content">
                  <div className="card-content-top">
                    <h5>
                      <Link href="/package/package-details">
                        Cultural riches of North Africa.
                      </Link>
                    </h5>
                    <div className="location-area">
                      <ul className="location-list scrollTextAni">
                        <li>
                          <Link href="/package/package">Sousse</Link>
                        </li>
                        <li>
                          <Link href="/package/package">Tunis</Link>
                        </li>
                        <li>
                          <Link href="/package/package">Alger</Link>
                        </li>
                        <li>
                          <Link href="/package/package">Fes</Link>
                        </li>
                        <li>
                          <Link href="/package/package">Tangier</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="card-content-bottom">
                    <Link
                      href="/package/package-details"
                      className="primary-btn2"
                    >
                     Join Itinerary
                     <Icon name="plane" width={18}  height={18}  viewBox="0 0 18 18"></Icon>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="package-card">
                  <div className="batch">
                    <span className="date">bSuggested Group Size: 2</span>
                  </div>
                <div className="package-card-content">
                  <div className="card-content-top">
                    <h5>
                      <Link href="/package/package-details">
                        A journey of relaxtaion in Andalucia
                      </Link>
                    </h5>
                    <div className="location-area">
                      <ul className="location-list scrollTextAni">
                        <li>
                          <Link href="/package/package">Sevilla</Link>
                        </li>
                        <li>
                          <Link href="/package/package">Malaga</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="card-content-bottom">
                    <Link
                      href="/package/package-details"
                      className="primary-btn2"
                    >
                     Join Itinerary
                     <Icon name="plane" width={18}  height={18}  viewBox="0 0 18 18"></Icon>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <nav className="inner-pagination-area">
                <ul className="pagination-list">
                  <li>
                    <a href="#" className="shop-pagi-btn">
                      <i className="bi bi-chevron-left" />
                    </a>
                  </li>
                  <li>
                    <a href="#">1</a>
                  </li>
                  <li>
                    <a href="#" className="shop-pagi-btn">
                      <i className="bi bi-chevron-right" />
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default page;
