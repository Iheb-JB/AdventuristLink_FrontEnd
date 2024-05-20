"use client";
import Header2 from "@/components/header/Header2";
import useLogout from "@/hooks/useLogout";
import UserProfile from "@/hooks/useProfile";
import Icon from "@/uitils/Icon";
import SelectComponent from "@/uitils/SelectComponent";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { Toaster } from "react-hot-toast";

const page = () => {
  const [image, setImage] = useState(null);
  const [file, setFile] = useState(null);
  const [activeTab, setActiveTab] = useState("profile");
  const fileInputRef = useRef(null);
  const imageInputRef = useRef(null);
  const {profile, setProfile, updateProfile , handleChange , handleSelectChange} = UserProfile();

  const{logout} = useLogout();

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
  };

  const handleButtonClick = () => {
    fileInputRef.current.click(); // Trigger file input click
  };
  const handleFileClick = ()=>{
     imageInputRef.current.click();// trigger image input click
  };
  useEffect(() => {
    const profileTab = document.getElementById("profile-tab");
    const changePassTab = document.getElementById("change-pass-tab");

    if (activeTab === "profile") {
      profileTab.classList.add("active");
      changePassTab.classList.remove("active");
    } else if (activeTab === "change-pass") {
      profileTab.classList.remove("active");
      changePassTab.classList.add("active");
    }
  }, [activeTab]);

  useEffect(()=>{
     const query = new URLSearchParams(window.location.search);
     const tab = query.get('tab');
     if(tab){
      setActiveTab(tab);
     }
     const user = query.get('userId');
     const token = query.get('token');
     if (user && token) {
      localStorage.setItem('resetUserId', user);
      localStorage.setItem('resetToken', token);
    }
  },[]);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader(); 
      reader.onload = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader(); 
      reader.onload = () => {
        setFile(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async(e)=>{
    e.preventDefault();
    updateProfile();
  }

  return (
    <>
      <Header2 />
      <div className="dashboard-wrapper">
        <div className="dashboard-sidebar-wrapper">
          <div className="dashboard-sidebar-menu">
            <ul>
              <li>
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
                    viewBox="0 0 20 20"
                  ></Icon>
                  <h6>Itineraries</h6>
                </Link>
              </li>
              <li className="active">
                <Link href="/customer-dashboard/customer-profile">
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
                <a href="/" onClick={(e) => {
                       e.preventDefault();
                      logout();
                 }}>
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
              <div className="dashboard-profile-wrapper">
                <div className="dashboard-profile-nav">
                  <ul
                    className="nav flex-column nav-pills"
                    id="pills-tab"
                    role="tablist"
                  >
                    <li className="nav-item" role="presentation">
                      <button
                        className={`nav-link ${activeTab === "profile" ? "active" : ""}`}
                        id="profile-tab"
                        onClick={() => handleTabChange("profile")}
                        data-bs-toggle="pill"
                        data-bs-target="#profile"
                        type="button"
                        role="tab"
                        aria-controls="profile"
                        aria-selected="true"
                      >
                        <Icon
                          name="littleProfile"
                          width={14}
                          height={14}
                          viewBox="0 0 14 14"
                        ></Icon>
                        Profile
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className={`nav-link ${activeTab === "change-pass" ? "active" : ""}`}
                        id="change-pass-tab"
                        onClick={() => handleTabChange("change-pass")}
                        data-bs-toggle="pill"
                        data-bs-target="#change-pass"
                        type="button"
                        role="tab"
                        aria-controls="change-pass"
                        aria-selected="false"
                        tabIndex={-1}
                      >
                        <Icon
                          name="security"
                          width={14}
                          height={14}
                          viewBox="0 0 14 14"
                        ></Icon>
                        Change Password
                      </button>
                    </li>
                  </ul>
                </div>
                <div className="tab-content w-100" id="pills-tabContent">
                  <div
                    className={`tab-pane fade ${activeTab === "profile" ? "show active" : ""}`}
                    id="profile"
                    role="tabpanel"
                    aria-labelledby="profile-tab"
                  >
                    <div className="dashboard-profile-tab-content">
                      <div className="profile-tab-content-title">
                        <h6>You Details</h6>
                      </div>
                      <form onSubmit={handleSubmit}>
                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-inner mb-30">
                              <label>User name</label>
                              <input type="text" name="username" value={profile.username || ''} onChange={handleChange} placeholder="username"/>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-inner mb-30">
                              <label>Bio*</label>
                              <input type="text" name="bio" value={profile.bio || ''} onChange={handleChange} placeholder="Your bio" />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="tour-date-wrap mb-50">
                              <h6> Your Birth date:</h6>
                              <div className="form-inner mb-20">
                                <div className="form-group">
                                  <input
                                    type="date"
                                    name="dateOfBirth"
                                    value={profile.dateOfBirth || ''}
                                    onChange={handleChange}
                                    placeholder="yyyy-mm-dd"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6 mb-30">
                            <div className="form-inner">
                              <label>Gender*</label>
                              <SelectComponent
                                options={["Male", "Female"]}
                                placeholder="Gender"
                                value={profile.gender}
                                onChange={(value) => setProfile({...profile, gender: value})}
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-inner">
                              <label>Travel preferences*</label>
                              <SelectComponent
                                options={[
                                  "Cultural and city Exploration",
                                  "Food and Culinary Experience",
                                  "Adventure and Outdoor Activities",
                                  "Relaxation and Wellness", 
                                  "Party , Festivals and Events",
                                  "Other"
                                ]}
                                value={profile.travelerPreferences}
                                onChange={(value) => setProfile({...profile, travelerPreferences: value})}
                                placeholder="Your preferences"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="upload-img-area">
                          <div className="upload-img-wrapper">
                            <div className="drag-area">
                              <button
                                type="button"
                                className="upload-btn"
                                onClick={handleButtonClick}
                              >
                                <i className="bi bi-plus-lg" />
                              </button>
                              <input
                                type="file"
                                hidden
                                onChange={handleImageUpload}
                                //value={profile.profilePicture}
                                ref={fileInputRef} // Reference to image input
                                accept="image/*"
                              />
                            </div>
                          </div>
                          <div className="upload-img-area-content">
                            <h6>Upload Your Profile picture</h6>
                            <p>
                              Image required size 300*300, JPEG or PNG format.
                            </p>
                          </div>
                        </div>
                        {image && (
                          <div className="uploaded-image">
                            <img
                              src={image}
                              alt="Uploaded"
                              style={{ maxWidth: 200, maxHeight: 200 }}
                            />
                          </div>
                        )}
                         <div className="upload-img-area">
                          <div className="upload-img-wrapper">
                            <div className="drag-area">
                              <button
                                type="button"
                                className="upload-btn"
                                onClick={handleFileClick}
                              >
                                <i className="bi bi-plus-lg" />
                              </button>
                              <input
                                type="file"
                                hidden
                                onChange={handleFileUpload}
                                //value={profile.profilePicture}
                                ref={imageInputRef} // Reference to file input
                                accept="application/pdf"
                              />
                            </div>
                          </div>
                          <div className="upload-img-area-content">
                            <h6>Upload Your Identity document for verification(optional)</h6>
                            <p>
                              File should be in PDF format.
                            </p>
                          </div>
                        </div>
                        {file && (
                          <div className="uploaded-image-2">
                            <object
                              data={file}
                              type="application/pdf"
                              width="100%" height="500px"
                              style={{ maxWidth: 200, maxHeight: 200 }}
                            >
                              <p>Your browser does not support PDFs. Please download the PDF to view it: <a href={file}>Download PDF</a>.</p>
                            </object>
                          </div>
                        )}
                        <div className="form-inner mb-50 mt-25">
                          <label className="containerss">
                            <input type="checkbox" />
                            <span className="checkmark" />
                            <span className="text">
                              Update details in all properties included in this form
                            </span>
                          </label>
                        </div>
                        <div className="form-inner">
                          <button type="submit" className="primary-btn3">
                            Save Profile
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div
                    className={`tab-pane fade ${activeTab === "change-pass" ? "show active" : ""}`}
                    id="change-pass"
                    role="tabpanel"
                    aria-labelledby="change-pass-tab"
                  >
                    <div className="dashboard-profile-tab-content">
                      <div className="profile-tab-content-title">
                        <h6>Change Your Password</h6>
                      </div>
                      <form>
                        <div className="row">
                         
                          <div className="col-md-6">
                            <div className="form-inner mb-30">
                              <label>New Password*</label>
                              <input
                                id="password5"
                                type="password"
                               // value={passwords.newPassword}
                                //onChange={handleChangeP}
                                placeholder="*** ***"
                                required
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-inner mb-50">
                              <label>Confirm Password*</label>
                              <input
                                id="password6"
                                type="password"
                                //value={passwords.confirmPassword}
                                //onChange={handleChangeP}
                                placeholder="*** ***"
                                required
                              />
                            </div>
                          </div>
                        </div>
                      </form>
                      <div className="change-password-form-btns">
                        <button type="submit" className="primary-btn3">
                          Save Change
                        </button>
                        <button type="button" className="primary-btn3 cancel">
                          Cancel
                        </button>
                      </div>
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
              <a href="/about">About Us</a>
            </li>
           
          </ul>
        </div>
      </div>
      <Toaster/>
    </>
  );
};

export default page;
