import { useState } from "react";
import { motion } from "framer-motion";
import { FaFacebook, FaYoutube, FaLinkedin, FaGithub } from "react-icons/fa";
import { AiOutlineCopyright } from "react-icons/ai";
import { ListTitle, Image }  from "@/components/_shared";
import { paymentCard } from "@/assets/images";
import { emailValidation } from "@/utils";
import './Footer.scss';

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
    <div className="footerWrapper">
      <div className="footerContainer">
        <div className="footerColSpan2">
          <ListTitle className="footerListTitle" title=" More about Orebi Shop" />
          <div className="flex flex-col gap-6">
            <p className="footerText">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim sint ab ullam, numquam nesciunt in.
            </p>
            <ul className="footerSocialList">
              <a href="https://www.youtube.com" target="_blank" rel="noreferrer">
                <li className="footerSocialItem"><FaYoutube /></li>
              </a>
              <a href="https://github.com" target="_blank" rel="noreferrer">
                <li className="footerSocialItem"><FaGithub /></li>
              </a>
              <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
                <li className="footerSocialItem"><FaFacebook /></li>
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
                <li className="footerSocialItem"><FaLinkedin /></li>
              </a>
            </ul>
          </div>
        </div>
        <div>
          <ListTitle className="footerListTitle" title="Shop" />
          <ul className="footerList">
            <li className="footerListItem">Accesories</li>
            <li className="footerListItem">Clothes</li>
            <li className="footerListItem">Electronics</li>
            <li className="footerListItem">Home appliances</li>
            <li className="footerListItem">New Arrivals</li>
          </ul>
        </div>
        <div>
          <ListTitle className="footerListTitle" title="Your account" />
          <ul className="footerList">
            <li className="footerListItem">Profile</li>
            <li className="footerListItem">Orders</li>
            <li className="footerListItem">Addresses</li>
            <li className="footerListItem">Account Details</li>
            <li className="footerListItem">Payment Options</li>
          </ul>
        </div>
        <div className="footerSubscribeCol">
          <ListTitle className="footerSubscribeTitle" title="Subscribe to our newsletter." />
          <div className="w-full">
            <p className="footerSubscribeText">A at pellentesque et mattis porta enim elementum.</p>
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
              <div className="footerSubscribeForm">
                <div className="footerInputWrapper">
                  <input
                    onChange={(e) => setEmailInfo(e.target.value)}
                    value={emailInfo}
                    className="footerInput"
                    type="text"
                    placeholder="Insert your email ...*"
                  />
                  {errMsg && (
                    <p className="footerError">{errMsg}</p>
                  )}
                </div>
                <button
                  onClick={handleSubscription}
                  className="footerSubscribeBtn"
                >
                  Subscribe
                </button>
              </div>
            )}
            <Image
              className={`footerPaymentImg${subscription ? ' subscribed' : ''}`}
              imgSrc={paymentCard}
            />
          </div>
        </div>
      </div>
      <div className="footerCopyright">
        <p>
          <span className="footerCopyrightIcon">
            <AiOutlineCopyright />
          </span>
          Copyright 2022 | Orebi shopping | All Rights Reserved |
          <a href="https://reactbd.com/" target="_blank" rel="noreferrer">
            <span className="footerCopyrightLink">Powered by ReactBD.com</span>
          </a>
        </p>
      </div>
    </div>
  );
};