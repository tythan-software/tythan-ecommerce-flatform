import { useState } from "react";
import { motion } from "framer-motion";
import { FaFacebook, FaYoutube, FaLinkedin, FaGithub } from "react-icons/fa";
import { AiOutlineCopyright } from "react-icons/ai";
import './Footer.scss';
import { ListTitle, Image }  from "@/components/common";
import { paymentCard } from "@/assets/images";
import { emailValidation } from "@/utils";

export const Footer = () => {
  const [emailInfo, setEmailInfo] = useState("");
  const [subscription, setSubscription] = useState(false);
  const [errMsg, setErrMsg] = useState("");

  const handleSubscription = () => {
    if (emailInfo === "") {
      setErrMsg("Please provide an Email !");
    } else if (!emailValidation(emailInfo)) {
      setErrMsg("Please give a valid Email!");
    } else {
      setSubscription(true);
      setErrMsg("");
      setEmailInfo("");
    }
  };
  return (
    <div className="footer-container">
      <div className="footer-columns">
        <div className="footer-col-social">
          <ListTitle className="footer-title" text=" More about Shop" />
          <div className="footer-col-social-list">
            <p className="footer-col-social-list-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim sint ab ullam, numquam nesciunt in.
            </p>
            <ul className="footer-col-social-list-icon">
              <a href="https://www.youtube.com" target="_blank" rel="noreferrer">
                <li className="footer-col-social-item"><FaYoutube /></li>
              </a>
              <a href="https://github.com" target="_blank" rel="noreferrer">
                <li className="footer-col-social-item"><FaGithub /></li>
              </a>
              <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
                <li className="footer-col-social-item"><FaFacebook /></li>
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
                <li className="footer-col-social-item"><FaLinkedin /></li>
              </a>
            </ul>
          </div>
        </div>
        <div>
          <ListTitle className="footer-title" text="Shop" />
          <ul className="footer-col-info-list">
            <li className="footer-col-info-list-item">Accesories</li>
            <li className="footer-col-info-list-item">Clothes</li>
            <li className="footer-col-info-list-item">Electronics</li>
            <li className="footer-col-info-list-item">Home appliances</li>
            <li className="footer-col-info-list-item">New Arrivals</li>
          </ul>
        </div>
        <div>
          <ListTitle className="footer-title" text="Your account" />
          <ul className="footer-col-info-list">
            <li className="footer-col-info-list-item">Profile</li>
            <li className="footer-col-info-list-item">Orders</li>
            <li className="footer-col-info-list-item">Addresses</li>
            <li className="footer-col-info-list-item">Account Details</li>
            <li className="footer-col-info-list-item">Payment Options</li>
          </ul>
        </div>
        <div className="footer-subscribe">
          <ListTitle className="footer-title" text="Subscribe to our newsletter" />
          <div className="footer-subscribe-section">
            <p className="footer-subscribe-text">A at pellentesque et mattis porta enim elementum.</p>
            {subscription ? (
              <motion.p
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="w-full text-center text-base font-titleFont font-semibold text-green-600"
              >
                Subscribed Successfully !
              </motion.p>
            ) : (
              <div className="footer-subscribe-form">
                <div className="footer-input-wrapper">
                  <input
                    onChange={(e) => setEmailInfo(e.target.value)}
                    value={emailInfo}
                    className="footer-input"
                    type="text"
                    placeholder="Insert your email ...*"
                  />
                  {errMsg && (
                    <p className="footer-error">{errMsg}</p>
                  )}
                </div>
                <button
                  onClick={handleSubscription}
                  className="footer-subscribe-btn"
                >
                  Subscribe
                </button>
              </div>
            )}
            <Image
              className={`footer-subscribe-payment-img${subscription ? ' subscribed' : ''}`}
              imgSrc={paymentCard}
            />
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <p>
          <span className="footer-copyright-icon">
            <AiOutlineCopyright />
          </span>
          Copyright 2025 | FullStack Developer |
          <a href="https://github.com/TrungDN1996/reactjs-tythan-dev" target="_blank" rel="noreferrer">
            <span className="footer-copyright-link">Powered by Tythan</span>
          </a>
        </p>
      </div>
    </div>
  );
};