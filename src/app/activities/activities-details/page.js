
"use client"
import React, { useEffect, useState } from "react";
import Breadcrumb from '@/components/common/Breadcrumb'
import QuantityCounter from "@/uitils/QuantityCounter";
import Footer from "@/components/footer/Footer";
import Header2 from "@/components/header/Header2";
import Icon from "@/uitils/Icon";
const Page = () => {
  const [isOpenimg, setOpenimg] = useState({
    openingState: false,
    openingIndex: 0,
  });
  const [destinations, setDestinations] = useState([
    { name: "Tunis Medina", lat: 36.8008, lng: 10.1807 }
 
  ]);
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
        zoom: 9,
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
    <Header2/>
    <Breadcrumb pagename="Activitiy Details" pagetitle="Activitiy Details"/>
     <div className="package-details-area pt-120 mb-120">
      <div className="container">
            <div className="eg-tag2">
              <span>Ativity</span>
            </div>
            <h2>Traditioal craft and artisan workshops</h2>
            <ul className="tour-info-metalist">
              <li>
               <Icon name="itinDate" width={14} height={14} viewBox="0 0 14 14"></Icon>
                24 May 2024
              </li>
              <li>
              <Icon name="activit" width={14} height={14} viewBox="0 0 14 14"></Icon>
                 Cultural and city Exploration
              </li>
            </ul>
            <p>Explore the heart of Tunisian culture with hands-on workshops held in the historic Medina of Tunis.
               we will learn directly from skilled artisans who are masters of their crafts. The workshops cover a variety of traditional techniques,
               including pottery making, textile weaving, and intricate mosaic creation.
               This activity is perfect for cultural enthusiasts and anyone looking to connect 
               with the rich heritage of Tunisia in a tangible way.
              </p>

            <div className="tour-location">
              <h4>Activity Location on Map</h4>
              <div className="map-area mb-30" id="map" style={{ width: '800px', height: '450px' }}>
              </div>
            </div>
      </div>
     </div>
    <Footer/>
    </>
  )
}

export default Page
