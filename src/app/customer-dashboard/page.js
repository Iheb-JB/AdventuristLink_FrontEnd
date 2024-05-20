"use client"
import SearchForm from "@/components/GoogleSearchForm/searchForm";
import Header2 from "@/components/header/Header2";
import Icon from "@/uitils/Icon";
import QuantityCounter from "@/uitils/QuantityCounter";
import Link from "next/link";
import React, { useContext, useState } from "react";
import ActivityModal from "@/components/common/ActivityModal";
import { AuthContext } from "@/hooks/AuthContext";
import { Toast } from "bootstrap";
import toast, { Toaster } from "react-hot-toast";
import useItinerary from "@/hooks/useItinerary";
import { theme } from "../../../tailwind.config";
const page = () => {
  const { showActivityModal, toggleActivityModal } = useContext(AuthContext);
  //const [ activityModalData, setActivityModalData] = useState({});
  const {itinerary, addDestination, addParticipant, createItinerary}= useItinerary();
  const [selectedActivities, setSelectedActivities] = useState([]);
  const handleSaveModalData = (activity) => {
    if(activity && activity._id){
      setSelectedActivities(prevActivities =>[...prevActivities, activity._id]);
      toast.success('Activity added to the itinerary');
    }else{
      toast.error('Invalid activity data received');
    }
    // You can perform any other actions you need with the saved data here
  };
  const [formData, setFormData] = useState({
    title: "",
    startDate: "",
    endDate: "",
    description: "",
    groupSize:3,
    destinations:[],
    activities: [],
    participants:[]
  });

  const handleCompleteLocationSelect = (selectedPlace) => {
    console.log("Complete location data received:", selectedPlace);
    setFormData(prevFormData => ({
        ...prevFormData,
        destinations: [...prevFormData.destinations, selectedPlace]
    }));
};

  const handleSubmit = async(e)=>{
    e.preventDefault();
    toast.success('your itinerary have been created successfully !');
    try {
      const destinationIds = await Promise.all(formData.destinations.map(destination =>
        addDestination({
          name: destination.name,
          location: destination.location
        })
      ));
      await createItinerary({
         ...formData,
         destinations: destinationIds.map(dest => dest._id),
         activities: selectedActivities,
         participants: []
      });
    } catch (error) {
        toast.error('Failed to process the itinerary form :', error);
        console.log(error.message);
    }
  }


  return (
    <>
      <Header2 />
      <div className="dashboard-wrapper">
        <div className="dashboard-sidebar-wrapper">
          <div className="dashboard-sidebar-menu">
            <ul>
              <li className="active">
                <Link href="/customer-dashboard">
                  <Icon
                    name="dashboard"
                    width={18}
                    height={18}
                    viewBox="0 0 18 18"
                  ></Icon>
                  <h6>Dashboard</h6>
                </Link>
              </li>
              <li>
                <Link href="/customer-dashboard/customer-booking-list">
                  <Icon
                    name="itinerariesBook"
                    width={18}
                    height={18}
                    viewBox="0 0 18 18"
                  ></Icon>
                  <h6>Itineraries</h6>
                </Link>
              </li>
              <li>
                <Link
                  href="/customer-dashboard/customer-profile
          "
                >
                  <Icon
                    name="settings"
                    width={18}
                    height={18}
                    viewBox="0 0 30 30"
                  ></Icon>
                  <h6>Settings</h6>
                </Link>
              </li>
              <li>
                <a href="#">
                  <Icon
                    name="logout"
                    width={18}
                    height={18}
                    viewBox="0 0 18 18"
                  ></Icon>
                  <h6>Log Out</h6>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="main-content">
          <div className="row">
            <div className="col-xl-12">
              <div className="main-content-title-profile mb-50">
                <div className="author-area">
                  <div className="author-img">
                    <img src="/assets/img/innerpage/profile-img.png" alt="" />
                  </div>
                  <div className="author-content">
                    <span>Hello, </span>
                    <h4>iheb_jabeur</h4>
                  </div>
                </div>
              </div>
              <div className="recent-listing-area">
                <h6>Where next ?</h6>
                <div className="recent-listing-table">
                  <div className="booking-form-wrap mb-40">
                    <h4>Create your own Itinerary</h4>
                    <p>
                      Design your dream tarvel itinerary and let other travelers
                      enjoy it with you!
                    </p>
                    <div className="sidebar-booking-form">
                      <form onSubmit={handleSubmit}>
                        <div className="form-inner mb-20">
                          <label>
                            Title <span>*</span>
                          </label>
                          <input
                            type="text"
                            placeholder="Enter the itinerary title"
                            value={formData.title}
                            onChange={(e)=>
                              setFormData({ ...formData, title: e.target.value })
                            }
                          />
                        </div>
                        <div className="form-inner mb-20">
                          <SearchForm label={"destination"} value={formData.destinations} onSelectCompleteLocation={handleCompleteLocationSelect} />
                        </div>
                        <div className="tour-date-wrap mb-50">
                          <h6>Select Your start date:</h6>
                          <div className="form-inner mb-20">
                            <div className="form-group">
                              <input
                                type="date"
                                name="inOut"
                                placeholder="5 Jan, 2024"
                                value={formData.startDate}
                                onChange={(e)=>
                                  setFormData({...formData, startDate: e.target.value})
                                }
                              />
                            </div>
                          </div>
                        </div>
                        <div className="tour-date-wrap mb-50">
                          <h6>Select Your end date:</h6>
                          <div className="form-inner mb-20">
                            <div className="form-group">
                              <input
                                type="date"
                                name="inOut"
                                placeholder="5 Jan, 2024"
                                value={formData.endDate}
                                onChange={(e)=>
                                  setFormData({...formData, endDate: e.target.value})
                                }
                              />
                            </div>
                          </div>
                        </div>
                        <div className="form-inner mb-20">
                          <a
                            className="add-activity-button"
                            onClick={toggleActivityModal}
                          >
                            Add Activity
                          </a>
                        </div>
                        <div className="form-inner mb-20">
                          <label>
                            Participants <span></span>
                          </label>
                          <input
                            type="text"
                            placeholder="Look for participants with username"
                          />
                        </div>
                        <div className="number-input-item adults">
                          <label className="number-input-lable">
                            Group Size:<span></span>
                          </label>
                          <QuantityCounter
                            value={formData.groupSize}
                            onChange={(value) =>
                              setFormData({ ...formData, groupSize: value })
                            }
                            incIcon="bx bx-plus"
                            dcrIcon="bx bx-minus"
                          />
                        </div>
                        <div className="form-inner mb-30">
                          <label>
                            Description <span>*</span>
                          </label>
                          <textarea
                            placeholder="Write the itinerary description"
                            defaultValue={""}
                            value={formData.description}
                            onChange={(e)=>
                              setFormData({...formData, description: e.target.value})
                            }
                          />
                        </div>
                        <div className="form-inner">
                          <button type="submit" className="primary-btn1 two">
                            Create itinerary
                          </button>
                        </div>
                      </form>
                      {showActivityModal && (
                          <ActivityModal
                            onSave={handleSaveModalData}
                            onClose={toggleActivityModal}
                          />
                        )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="dashboard-footer">
          <ul className="footer-menu-list">
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Terms &amp; Conditions</a>
            </li>
          </ul>
        </div>
      </div>
      <Toaster/>
    </>
    
  );
};

export default page;
