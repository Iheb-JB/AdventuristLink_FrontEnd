"use client";
import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignUpModal, setShowSignUpModal] = useState(false);
  const [showNotificationModal, setShowNotificationModal] = useState(false);
  const [showActivityModal, setShowActivityModal] = useState(false);
  const [showPasswordResetModal, setShowPasswordResetModal]= useState(false);
  // const [authUser, setAuthUser] = useState(JSON.parse(localStorage.getItem('adventur-user')) || null);

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
    console.log("Toggling Password Reset Modal: ", !showPasswordResetModal);
     setShowPasswordResetModal(!showPasswordResetModal);
  };


  return (
    <AuthContext.Provider
      value={{
        showLoginModal,
        showSignUpModal,
        showNotificationModal,
        showActivityModal,
        // authUser,
        showPasswordResetModal,
        toggleLoginModal,
        toggleSignUpModal,
        toggleNotificationModal,
        toggleActivityModal,
        // setAuthUser,
        togglePasswordResetModal,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
