"use client";
import React, { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignUpModal, setShowSignUpModal] = useState(false);
  const [showNotificationModal, setShowNotificationModal] = useState(false);
  const [showActivityModal, setShowActivityModal] = useState(false);
  const [showPasswordResetModal, setShowPasswordResetModal]= useState(false);
  const [showReviewModal, setShowReviewModal]= useState(false);
  const [authUser, setAuthUser] = useState(null);

  const toggleLoginModal = () => {
    setShowLoginModal(!showLoginModal);
  };

  const toggleSignUpModal = () => {
    setShowSignUpModal(!showSignUpModal);
  };

  const toggleNotificationModal = () => {
    setShowNotificationModal(!showNotificationModal);
  };

  const toggleActivityModal = () => {
    setShowActivityModal(!showActivityModal);
  };

  const togglePasswordResetModal = ()=>{
    //console.log("Toggling Password Reset Modal: ", !showPasswordResetModal);
     setShowPasswordResetModal(!showPasswordResetModal);
  };

  const toggleReviewModal =()=>{
      setShowReviewModal(!showReviewModal);
  };

  useEffect(()=>{
     // Access localStorage only when component is mounted on the client
     const user = localStorage.getItem('adventur-user');
     if (user) {
         setAuthUser(JSON.parse(user));
     }
  },[]);
 

  return (
    <AuthContext.Provider
      value={{
        showLoginModal,
        showSignUpModal,
        showNotificationModal,
        showActivityModal,
        authUser,
        showPasswordResetModal,
        showReviewModal,
        toggleLoginModal,
        toggleSignUpModal,
        toggleNotificationModal,
        toggleActivityModal,
        setAuthUser,
        togglePasswordResetModal,
        toggleReviewModal,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
