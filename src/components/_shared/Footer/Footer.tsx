import { useState } from "react";
import { motion } from "framer-motion";
import { FaFacebook, FaYoutube, FaLinkedin, FaGithub } from "react-icons/fa";
import { AiOutlineCopyright } from "react-icons/ai";
import '@/components/_shared/Footer/Footer.scss';
import { ListTitle, Image }  from "@/components/_shared";
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
    <div className="footer-wrapper">
      <div className="footer-container">
        <div className="footer-col-span2">
          <ListTitle className="footer-list-title" title=" More about Orebi Shop" />
          <div className="flex flex-col gap-6">
            <p className="footer-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim sint ab ullam, numquam nesciunt in.
            </p>
            <ul className="footer-social-list">
              <a href="https://www.youtube.com" target="_blank" rel="noreferrer">
                <li className="footer-social-item"><FaYoutube /></li>
              </a>
              <a href="https://github.com" target="_blank" rel="noreferrer">
                <li className="footer-social-item"><FaGithub /></li>
              </a>
              <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
                <li className="footer-social-item"><FaFacebook /></li>
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
                <li className="footer-social-item"><FaLinkedin /></li>
              </a>
            </ul>
          </div>
        </div>
        <div>
          <ListTitle className="footer-list-title" title="Shop" />
          <ul className="footer-list">
            <li className="footer-list-item">Accesories</li>
            <li className="footer-list-item">Clothes</li>
            <li className="footer-list-item">Electronics</li>
            <li className="footer-list-item">Home appliances</li>
            <li className="footer-list-item">New Arrivals</li>
          </ul>
        </div>
        <div>
          <ListTitle className="footer-list-title" title="Your account" />
          <ul className="footer-list">
            <li className="footer-list-item">Profile</li>
            <li className="footer-list-item">Orders</li>
            <li className="footer-list-item">Addresses</li>
            <li className="footer-list-item">Account Details</li>
            <li className="footer-list-item">Payment Options</li>
          </ul>
        </div>
        <div className="footer-subscribe-col">
          <ListTitle className="footer-subscribe-title" title="Subscribe to our newsletter." />
          <div className="w-full">
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
              className={`footer-payment-img${subscription ? ' subscribed' : ''}`}
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
          Copyright 2022 | Orebi shopping | All Rights Reserved |
          <a href="https://reactbd.com/" target="_blank" rel="noreferrer">
            <span className="footer-copyright-link">Powered by ReactBD.com</span>
          </a>
        </p>
      </div>
    </div>
  );
};