import { useState } from "react";
import { BsCheckCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";

import { logo } from "@/assets/images";
import "./SignUpPage.scss";

export const SignUpPage = () => {
  // ============= Initial State Start here =============
  const [clientName, setClientName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [zip, setZip] = useState("");
  const [checked, setChecked] = useState(false);
  // ============= Initial State End here ===============
  // ============= Error Msg Start here =================
  const [errClientName, setErrClientName] = useState("");
  const [errEmail, setErrEmail] = useState("");
  const [errPhone, setErrPhone] = useState("");
  const [errPassword, setErrPassword] = useState("");
  const [errAddress, setErrAddress] = useState("");
  const [errCity, setErrCity] = useState("");
  const [errCountry, setErrCountry] = useState("");
  const [errZip, setErrZip] = useState("");
  // ============= Error Msg End here ===================
  const [successMsg, setSuccessMsg] = useState("");
  // ============= Event Handler Start here =============
  const handleName = (e: any) => {
    setClientName(e.target.value);
    setErrClientName("");
  };
  const handleEmail = (e: any) => {
    setEmail(e.target.value);
    setErrEmail("");
  };
  const handlePhone = (e: any) => {
    setPhone(e.target.value);
    setErrPhone("");
  };
  const handlePassword = (e: any) => {
    setPassword(e.target.value);
    setErrPassword("");
  };
  const handleAddress = (e: any) => {
    setAddress(e.target.value);
    setErrAddress("");
  };
  const handleCity = (e: any) => {
    setCity(e.target.value);
    setErrCity("");
  };
  const handleCountry = (e: any) => {
    setCountry(e.target.value);
    setErrCountry("");
  };
  const handleZip = (e: any) => {
    setZip(e.target.value);
    setErrZip("");
  };
  // ============= Event Handler End here ===============
  // ================= Email Validation start here =============
  const EmailValidation = (email: string) => {
    return String(email)
      .toLowerCase()
      .match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i);
  };
  // ================= Email Validation End here ===============

  const handleSignUp = (e: any) => {
    e.preventDefault();
    if (checked) {
      if (!clientName) {
        setErrClientName("Enter your name");
      }
      if (!email) {
        setErrEmail("Enter your email");
      } else {
        if (!EmailValidation(email)) {
          setErrEmail("Enter a Valid email");
        }
      }
      if (!phone) {
        setErrPhone("Enter your phone number");
      }
      if (!password) {
        setErrPassword("Create a password");
      } else {
        if (password.length < 6) {
          setErrPassword("Passwords must be at least 6 characters");
        }
      }
      if (!address) {
        setErrAddress("Enter your address");
      }
      if (!city) {
        setErrCity("Enter your city name");
      }
      if (!country) {
        setErrCountry("Enter the country you are residing");
      }
      if (!zip) {
        setErrZip("Enter the zip code of your area");
      }
      // ============== Getting the value ==============
      if (
        clientName &&
        email &&
        EmailValidation(email) &&
        password &&
        password.length >= 6 &&
        address &&
        city &&
        country &&
        zip
      ) {
        setSuccessMsg(
          `Hello dear ${clientName}, Welcome you to OREBI Admin panel. We received your Sign up request. We are processing to validate your access. Till then stay connected and additional assistance will be sent to you by your mail at ${email}`
        );
        setClientName("");
        setEmail("");
        setPhone("");
        setPassword("");
        setAddress("");
        setCity("");
        setCountry("");
        setZip("");
      }
    }
  };
  return (
    <div className="sign-up">
      <div className="sign-up-left">
        <div className="sign-up-left-content">
          <Link to="/">
            <img src={logo} alt="logoImg" className="sign-up-left-logo" />
          </Link>
          <div className="sign-up-left-info">
            <h1 className="sign-up-left-title">Get started for free</h1>
            <p className="sign-up-left-desc">Create your account to access more</p>
          </div>
          <div className="sign-up-left-feature">
            <span className="sign-up-left-feature-icon">
              <BsCheckCircleFill />
            </span>
            <p className="sign-up-left-feature-section">
              <span className="sign-up-left-feature-text">Get started fast</span>
              <br />
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab omnis nisi dolor recusandae consectetur!
            </p>
          </div>
          <div className="sign-up-left-feature">
            <span className="sign-up-left-feature-icon">
              <BsCheckCircleFill />
            </span>
            <p className="sign-up-left-feature-section">
              <span className="sign-up-left-feature-text">Access all services</span>
              <br />
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab omnis nisi dolor recusandae consectetur!
            </p>
          </div>
          <div className="sign-up-left-feature">
            <span className="sign-up-left-feature-icon">
              <BsCheckCircleFill />
            </span>
            <p className="sign-up-left-feature-section">
              <span className="sign-up-left-feature-text">Trusted by online Shoppers</span>
              <br />
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab omnis nisi dolor recusandae consectetur!
            </p>
          </div>
          <div className="sign-up-left-footer">
            <p className="sign-up-left-footer-link">Terms</p>
            <p className="sign-up-left-footer-link">Privacy</p>
            <p className="sign-up-left-footer-link">Security</p>
          </div>
        </div>
      </div>
      <div className="sign-up-right">
        {successMsg ? (
          <div className="sign-up-right-success">
            <p className="sign-up-right-success-msg">{successMsg}</p>
            <Link to="/signin">
              <button className="sign-up-right-success-btn">Sign in</button>
            </Link>
          </div>
        ) : (
          <form className="sign-up-right-form">
            <div className="sign-up-right-form-inner">
              <h1 className="sign-up-right-form-title">Create your account</h1>
              <div className="sign-up-right-form-group">
                <p className="sign-up-right-form-label">Full Name</p>
                <input
                  onChange={handleName}
                  value={clientName}
                  className="sign-up-right-form-input"
                  type="text"
                  placeholder="eg. John Doe"
                />
                {errClientName && (
                  <p className="sign-up-right-form-error">
                    <span>!</span>
                    {errClientName}
                  </p>
                )}
              </div>
              <div className="sign-up-right-form-group">
                <p className="sign-up-right-form-label">Work Email</p>
                <input
                  onChange={handleEmail}
                  value={email}
                  className="sign-up-right-form-input"
                  type="email"
                  placeholder="john@workemail.com"
                />
                {errEmail && (
                  <p className="sign-up-right-form-error">
                    <span>!</span>
                    {errEmail}
                  </p>
                )}
              </div>
              <div className="sign-up-right-form-group">
                <p className="sign-up-right-form-label">Phone Number</p>
                <input
                  onChange={handlePhone}
                  value={phone}
                  className="sign-up-right-form-input"
                  type="text"
                  placeholder="008801234567891"
                />
                {errPhone && (
                  <p className="sign-up-right-form-error">
                    <span>!</span>
                    {errPhone}
                  </p>
                )}
              </div>
              <div className="sign-up-right-form-group">
                <p className="sign-up-right-form-label">Password</p>
                <input
                  onChange={handlePassword}
                  value={password}
                  className="sign-up-right-form-input"
                  type="password"
                  placeholder="Create password"
                />
                {errPassword && (
                  <p className="sign-up-right-form-error">
                    <span>!</span>
                    {errPassword}
                  </p>
                )}
              </div>
              <div className="sign-up-right-form-group">
                <p className="sign-up-right-form-label">Address</p>
                <input
                  onChange={handleAddress}
                  value={address}
                  className="sign-up-right-form-input"
                  type="text"
                  placeholder="road-001, house-115, example area"
                />
                {errAddress && (
                  <p className="sign-up-right-form-error">
                    <span>!</span>
                    {errAddress}
                  </p>
                )}
              </div>
              <div className="sign-up-right-form-group">
                <p className="sign-up-right-form-label">City</p>
                <input
                  onChange={handleCity}
                  value={city}
                  className="sign-up-right-form-input"
                  type="text"
                  placeholder="Your city"
                />
                {errCity && (
                  <p className="sign-up-right-form-error">
                    <span>!</span>
                    {errCity}
                  </p>
                )}
              </div>
              <div className="sign-up-right-form-group">
                <p className="sign-up-right-form-label">Country</p>
                <input
                  onChange={handleCountry}
                  value={country}
                  className="sign-up-right-form-input"
                  type="text"
                  placeholder="Your country"
                />
                {errCountry && (
                  <p className="sign-up-right-form-error">
                    <span>!</span>
                    {errCountry}
                  </p>
                )}
              </div>
              <div className="sign-up-right-form-group">
                <p className="sign-up-right-form-label">Zip/Postal code</p>
                <input
                  onChange={handleZip}
                  value={zip}
                  className="sign-up-right-form-input"
                  type="text"
                  placeholder="Your country"
                />
                {errZip && (
                  <p className="sign-up-right-form-error">
                    <span>!</span>
                    {errZip}
                  </p>
                )}
              </div>
              <div className="sign-up-right-form-checkbox-row">
                <input
                  onChange={() => setChecked(!checked)}
                  className="sign-up-right-form-checkbox"
                  type="checkbox"
                />
                <p className="sign-up-right-form-checkbox-label">
                  I agree to the <span>Terms of Service </span>and <span>Privacy Policy</span>.
                </p>
              </div>
              <button
                onClick={handleSignUp}
                className={`sign-up-right-form-btn ${checked ? "active" : "inactive"}`}
              >
                Create Account
              </button>
              <div className="sign-up-right-form-footer">
                Don't have an Account?{' '}
                <Link to="/signin" className="sign-up-right-form-footer-link">
                  Sign in
                </Link>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
