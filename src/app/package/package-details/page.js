'use client';
import React, { useContext, useEffect, useState } from "react";
import ModalVideo from "react-modal-video";
import Breadcrumb from "@/components/common/Breadcrumb";
import QuantityCounter from "@/uitils/QuantityCounter";
import Lightbox from "yet-another-react-lightbox";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Footer from "@/components/footer/Footer";
import Header2 from "@/components/header/Header2";
import Icon from "@/uitils/Icon";
import { AuthContext } from "@/hooks/AuthContext";
import ReviewModal from "@/components/common/ReviewModal";
import Link from "next/link";
const Page = () => {
  const [isOpen, setOpen] = useState(false);
  const [isOpenimg, setOpenimg] = useState({
    openingState: false,
    openingIndex: 0,
  });
  const [destinations, setDestinations] = useState([
    { name: "Sousse", lat: 35.825603, lng: 10.636991 }, 
    { name: "Tunis", lat: 36.806389, lng: 10.181667 }, 
    { name: "Alger", lat: 36.737232, lng: 3.086472 }, 
    { name: "Fes", lat: 34.034653, lng: -5.016193 }, 
    { name: "Tangier", lat: 35.759465, lng: -5.834009 }
  ]);
  const {showReviewModal,toggleReviewModal} = useContext(AuthContext);

  const review_modal_show = () => {
    toggleReviewModal();
    
  }
  const scriptOptions = {
    googleMapsApiKey: "AIzaSyCMTO6uC2oPpuii98yZi68pKaoIpq2YT_k",
    libraries: ["places"],
  };
  useEffect(() => {
    const loadMapScript = ()=>{
    // Load script after component mounts
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${scriptOptions.googleMapsApiKey}&callback=initMap`;
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);
    }

    const initMap = () => {
      const initialCenter = destinations.length > 0 ? 
    { lat: destinations[0].lat, lng: destinations[0].lng } : 
    { lat: 36.806389, lng: 10.181667 };
      const map = new google.maps.Map(document.getElementById('map'), {
        center: initialCenter,
        zoom: 5,
      });
      // Example to add a marker at the center
      destinations.forEach(destination => {
        new google.maps.Marker({
          position: new google.maps.LatLng(destination.lat, destination.lng),
          map: map,
          title: destination.name,
        });
      });
    };
    window.initMap = initMap;
    loadMapScript();
    
  }, [destinations]);
  return (
    <>
      <Header2 />
      <Breadcrumb pagename="Itinerary Details" pagetitle="  Itinerary Details" />
      <div className="package-details-area pt-95 mb-95 position-relative">
        <div className="container">
          <div className="row g-xl-4 gy-5">
              <h2>
                Cultural Riches of North Africa (Maghreb)
              </h2>
              <ul className="tour-info-metalist">
                <li>
                   <Icon name="littleDate" width={14}  height={14}  viewBox="0 0 14 14"></Icon>
                   <span style={{ fontWeight: '', margin: '0 5px' }}>15 May - 20 June 2024</span>
                </li>
                <li>
                <Icon name="peopleFace" width={14}  height={14}  viewBox="0 0 14 14"></Icon>
                  Max Group size : 3
                </li>
                <li>
                <Icon name="activit" width={14}  height={14}  viewBox="0 0 14 14"></Icon>
                  Cultural &amp; Food and Culinary.
                </li>
              </ul>
              <ul>
              <li>
                  <Icon name="traveler" width={20} height={20} viewBox="0 0 20 20"></Icon>
                   Creator: <span className="creator-name">amino_slov</span>
                </li>
              </ul>
              
              <h4>Description:</h4>
              <p>
                 Explore the vibrant culture of three north african countries, from bustling marketplaces in Tunis to the historic architecture of Casablanca.
                  Discover and enjoy the traditional meals, and search for the best activities with locals.
              </p>
              <div className="card-content-bottom">
                          <Link
                            href="/package/package-details"
                            className="primary-btn2"
                          >
                            Join this Itinerary
                            <Icon name="plane" width={18}  height={18}  viewBox="0 0 18 18"></Icon>
                          </Link>
                        </div>
              <h4>Itinerary activities:</h4>
              <h6>
                <Link href="/activities/activities-details">
                   Traditional Craft and Artisan Workshops
                </Link>
              </h6>
              <h6>
                <Link href="/activities/activities-details">
                Archaeological Exploration of Ancient Ruins
                </Link>
              </h6>
              <div className="tour-location">
                <h4>Location Map</h4>
                <div className="map-area mb-30" id="map" style={{ width: '800px', height: '450px' }}>
                 
                </div>
              </div>
              <div className="review-wrapper">
                <h4>Only participants can leave review for this Itinerary</h4>
                <div className="review-box">
                  

                  <button
                    className="primary-btn1"
                    data-bs-toggle="modal"
                    data-bs-target="#reviewModal"
                    onClick={review_modal_show}
                  >
                    GIVE A RATING
                  </button>
                </div>
              </div>
              <div className="review-area">
                  <ul className="comment">
                    <li>
                      <div className="single-comment-area">
                        <div className="author-img">
                          <img
                            src="/assets/img/innerpage/comment-author-01.jpg"
                            alt=""
                          />
                        </div>
                        <div className="comment-content">
                          <div className="author-name-deg">
                            <h6>iheb_jabeur</h6>
                            <span>20 May, 2024</span>
                          </div>
                          <ul className="review-item-list">
                            <li>
                              <span>Overall</span>
                              <ul className="star-list">
                                <li>
                                  <i className="bi bi-star-fill" />
                                </li>
                                <li>
                                  <i className="bi bi-star-fill" />
                                </li>
                                <li>
                                  <i className="bi bi-star-fill" />
                                </li>
                                <li>
                                  <i className="bi bi-star-fill" />
                                </li>
                                
                              </ul>
                            </li>
                          </ul>
                          <p>
                          I had an incredible time on this itinerary!The destinations were breathtaking and fellow travelers were great.
                          Amine was an excellent travel companion. He was punctual, friendly and always ready to help.{" "}
                          </p>
                         
                        </div>
                      </div>
                     
                    </li>
                  </ul>
                </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Page;
