
"use client"
import React, { useState } from "react";
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
 
  return (
    <>
    <Header2/>
    <Breadcrumb pagename="Activitiy Details" pagetitle="Activitiy Details"/>
     <div className="package-details-area pt-120 mb-120">
      <div className="container">
            <div className="eg-tag2">
              <span>Ski touring</span>
            </div>
            <h2>Powder Quest: Exploring Snow-Covered Landscapes on Skis</h2>
            <ul className="tour-info-metalist">
              <li>
               <Icon name="itinDate" width={14} height={14} viewBox="0 0 14 14"></Icon>
                5 hours
              </li>
              <li>
                <Icon name="peopleFace" width={14} height={14} viewBox="0 0 14 14"></Icon>
                Max People : 10
              </li>
              <li>
              <Icon name="activit" width={14} height={14} viewBox="0 0 14 14"></Icon>
                Italy &amp; France.
              </li>
            </ul>
            <p>Ski touring, also known as backcountry skiing, involves traveling across snow-covered terrain using skis. It's a blend of skiing and hiking,
               allowing access to remote areas not reachable by ski lifts. Skiers ascend slopes using climbing skins on their skis or specialized equipment like splitboards,
              then descend using skis. This activity offers a unique opportunity to explore untouched wilderness, experience serene landscapes,
              and challenge oneself physically and mentally while embracing the thrill of the mountains. Safety measures, including avalanche awareness and carrying appropriate gear, are paramount in ski touring due to the inherent risks of backcountry environments.</p>

            <div className="tour-location">
              <h4>Activity Location on Map</h4>
              <div className="map-area mb-30">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193325.0481540361!2d-74.06757856146028!3d40.79052383652264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1660366711448!5m2!1sen!2sbd" width={600} height={450} style={{border: 0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
              </div>
            </div>
      </div>
     </div>
    <Footer/>
    </>
  )
}

export default Page
