import { AuthContext } from "@/hooks/AuthContext";
import React, { useContext, useState } from "react";
import useLogin from '@/hooks/useLogin';
import PasswordResetModal from "./PasswordResetModal";

const LoginModal = () => {
  const { toggleSignUpModal, toggleLoginModal , togglePasswordResetModal } = useContext(AuthContext);
  const register_modal_show = () => {
    toggleSignUpModal();
    toggleLoginModal();
  }
  const reset_Password_modal_show = ()=>{
    togglePasswordResetModal();
    toggleLoginModal();
  }
  const [email, setEmail] = useState("");
  const [password , setPasswrord]= useState("");
  const {loading,login} = useLogin();

  const handleSubmit = async (e)=>{
    e.preventDefault();
    await login(email,password);
  }
  return (
    <>
      <div
        className="modal login-modal"
        id="user-login"
        data-bs-keyboard="false"
        tabIndex={-1}
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header relative">
              <img src="/assets/img/home1/login-modal-header-img.jpg" alt="" />
              <span
                className="modal-close-box"
                onClick={toggleLoginModal}
              >
                &times;
              </span>
            </div>
            <div className="modal-body">
              <div className="login-registration-form">
                <div className="form-title">
                  <h2>Sign in to continue</h2>
                </div>
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
                    />
                  </div>
                  <div className="form-inner mb-20">
                    <label className="label p-2">
                      <span className="text-base label-text">Password</span>
                    </label>
                    <input
                      type="password"
                      placeholder="Enter your password *"
                      value={password}
                      onChange={(e)=> setPasswrord(e.target.value)}
                    />
                  </div>
                  <div>
                    <button type="submit" className="login-btn mb-25">
                      Login
                    </button>
                  </div>
                  <a className="login-link" onClick={register_modal_show}>
                    {"Don't"} have an account?
                  </a>
                  <a className="password-reset-link" onClick={reset_Password_modal_show}>
                  Forgot your password ?
                  </a>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginModal;
