import { AuthContext } from "@/hooks/AuthContext";
import axios from "axios";
import React, { useContext, useState } from "react";
import toast from "react-hot-toast";

const PasswordResetModal = () => {
  const { showPasswordResetModal ,togglePasswordResetModal } = useContext(AuthContext);
  const [email, setEmail]= useState("");

  if (!showPasswordResetModal) {
    console.log("Password Reset Modal is hidden");
    return null;
  } else {
    console.log("Password Reset Modal is shown");
  }

  const handleSubmit = async (e)=>{
    e.preventDefault();
    try {
        const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/forgetpassword`, {email});
        if(response.status === 200){
            toast.success('Password reset link sent to your email.');
            togglePasswordResetModal();
        }
    } catch (error) {
        toast.error(error.response?.data.message || "Failed to send password reset email.");
    }
  }
  return (
    <>
      <div
        className="modal passwordReset-modal"
        //style={{ display: showPasswordResetModal ? 'block' : 'none' }}
        id="password-reset"
        data-bs-keyboard="false"
        tabIndex={-1}
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header relative">
              {/* <img src="/assets/img/home1/login-modal-header-img.jpg" alt="" /> */}
              <span
                className="modal-close-box"
                onClick={togglePasswordResetModal}
              >
                &times;
              </span>
            </div>
            <div className="modal-body">
              <div className="login-registration-form">
                <div className="form-title">
                  <h2>Reset password</h2>
                </div>
                <div className="content">
                <form onSubmit={handleSubmit}>
                  <div className="form-inner mb-20">
                    <label className="label p-2">
                      <span className="text-base label-text">
                        Email address
                      </span>
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your registered Email *"
                      value={email}
                      onChange={(e)=> setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <button type="submit" className="login-btn mb-25">
                      Send link
                    </button>
                  </div>
                </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PasswordResetModal;
