"use client";
import Breadcrumb from "@/components/common/Breadcrumb";
import Newslatter from "@/components/common/Newslatter";
import Footer from "@/components/footer/Footer";
import Header2 from "@/components/header/Header2";
import Icon from "@/uitils/Icon";
import SelectComponent from "@/uitils/SelectComponent";
import QuantityCounter from "@/uitils/QuantityCounter";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <>
      <Header2 />
      <Breadcrumb pagename="Itinerary Grid" pagetitle="Itinerary grid" />
      <div className="package-grid-with-sidebar-section pt-75 mb-75">
        <div className="container">
              <div className="package-inner-title-section mb-25">
                <p>Showing 1–6 of 11 results</p>
              </div>
              <div className="list-grid-product-wrap mb-70">
                <div className="row gy-4">
                  <div className="col-md-6 item">
                    <div className="package-card">
                    <div className="batch">
                          <span className="date">bSuggested Group Size: 4</span>
                        </div>
                      <div className="package-card-content">
                        <div className="card-content-top">
                          <h5>
                            <Link href="/package/package-details">
                               Exploring wildLife in west Africa
                            </Link>
                          </h5>
                          <div className="location-area">
                            <ul className="location-list scrollTextAni">
                              <li>
                                <Link href="/package">Namibia</Link>
                              </li>
                              <li>
                                <Link href="/package">Angola</Link>
                              </li>
                              <li>
                                <Link href="/package">Botswana</Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="card-content-bottom">
                          <Link
                            href="/package/package-details"
                            className="primary-btn2"
                          >
                            Join this Itinerary
                            <Icon name="plane" width={18}  height={18}  viewBox="0 0 18 18"></Icon>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 item">
                    <div className="package-card">
                    <div className="batch">
                          <span className="date">bSuggested Group Size: 3</span>
                        </div>
                      <div className="package-card-content">
                        <div className="card-content-top">
                          <h5>
                            <Link href="/package/package-details">
                               Cultural Riches of North Africa (Maghreb)
                            </Link>
                          </h5>
                          <div className="location-area">
                            <ul className="location-list scrollTextAni">
                              <li>
                                <Link href="/package">Sousse</Link>
                              </li>
                              <li>
                                <Link href="/package">Tunis</Link>
                              </li>
                              <li>
                                <Link href="/package">Alger</Link>
                              </li>
                              <li>
                                <Link href="/package">Fes</Link>
                              </li>
                              <li>
                                <Link href="/package">Tangier</Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="card-content-bottom">
                          <Link
                            href="/package/package-details"
                            className="primary-btn2"
                          >
                            Join this Itinerary
                            <Icon name="plane" width={18}  height={18}  viewBox="0 0 18 18"></Icon>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 item">
                    <div className="package-card">
                    <div className="batch">
                          <span className="date">bSuggested Group Size: 4</span>
                        </div>
                      <div className="package-card-content">
                        <div className="card-content-top">
                          <h5>
                            <Link href="/package/package-details">
                               European Culinary Tour
                            </Link>
                          </h5>
                          <div className="location-area">
                            <ul className="location-list">
                              <li>
                                <Link href="/package">Napoli</Link>
                              </li>
                              <li>
                                <Link href="/package">Rome</Link>
                              </li>
                              <li>
                                <Link href="/package">Marseille</Link>
                              </li>
                              <li>
                                <Link href="/package">Barcelona</Link>
                              </li>
                              <li>
                                <Link href="/package">Lisboa</Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="card-content-bottom">
                          <Link
                            href="/package/package-details"
                            className="primary-btn2"
                          >
                            Join this Itinerary
                            <Icon name="plane" width={18}  height={18}  viewBox="0 0 18 18"></Icon>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 item">
                    <div className="package-card">
                    <div className="batch">
                          <span className="date">bSuggested Group Size: 2</span>
                        </div>
                      <div className="package-card-content">
                        <div className="card-content-top">
                          <h5>
                            <Link href="/package/package-details">
                              Relaxing Bali Retreat
                            </Link>
                          </h5>
                          <div className="location-area">
                            <ul className="location-list scrollTextAni">
                              <li>
                                <Link href="/package">Bali</Link>
                              </li>
                              <li>
                                <Link href="/package">Ubud</Link>
                              </li>
                              <li>
                                <Link href="/package">Seminyak</Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="card-content-bottom">
                          <Link
                            href="/package/package-details"
                            className="primary-btn2"
                          >
                            Join this Itinerary
                            <Icon name="plane" width={18}  height={18}  viewBox="0 0 18 18"></Icon>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 item">
                    <div className="package-card">
                    <div className="batch">
                          <span className="date">bSuggested Group Size: 3</span>
                      </div>
                      <div className="package-card-content">
                        <div className="card-content-top">
                          <h5>
                            <Link href="/package/package-details">
                              Japan’s Cherry Blossom Festival
                            </Link>
                          </h5>
                          <div className="location-area">
                            <ul className="location-list scrollTextAni">
                              <li>
                                <Link href="/package">Tokyo</Link>
                              </li>
                              <li>
                                <Link href="/package">Kyoto</Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="card-content-bottom">
                          <Link
                            href="/package/package-details"
                            className="primary-btn2"
                          >
                            Join this Itinerary
                            <Icon name="plane" width={18}  height={18}  viewBox="0 0 18 18"></Icon>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 item">
                    <div className="package-card">
                    <div className="batch">
                          <span className="date">bSuggested Group Size: 5</span>
                      </div>
                      <div className="package-card-content">
                        <div className="card-content-top">
                          <h5>
                            <Link href="/package/package-details">
                               Adventures in the Andes
                            </Link>
                          </h5>
                          <div className="location-area">
                            <ul className="location-list scrollTextAni">
                              <li>
                                <Link href="/package">Machu Picchu</Link>
                              </li>
                              <li>
                                <Link href="/package">Sacred Valley</Link>
                              </li>
                              <li>
                                <Link href="/package">Cusco</Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="card-content-bottom">
                          <Link
                            href="/package/package-details"
                            className="primary-btn2"
                          >
                            Join this Itinerary
                            <Icon name="plane" width={18}  height={18}  viewBox="0 0 18 18"></Icon>
                          </Link>
                        </div>
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
                        <a href="#" className="active">1</a>
                      </li>
                      <li>
                        <a href="#" >
                          2
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="bi bi-three-dots" />
                        </a>
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
