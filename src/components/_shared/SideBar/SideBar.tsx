
import { motion } from "framer-motion";
import { MdClose } from "react-icons/md";
import { logo } from "@/assets/images";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { NavBarList } from "@/types";
import './SideBar.scss';

interface SiderBarProps {
  navBarList: NavBarList[],
  setSidenav: React.Dispatch<React.SetStateAction<boolean>>;
}

export const SideBar = (
  {
    navBarList,
    setSidenav
  }
  : SiderBarProps) => {

  const [category, setCategory] = useState(false);
  const [brand, setBrand] = useState(false);

  return (
    <div className="side-bar-overlay">
      <motion.div
        initial={{ x: -300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="side-bar-motion"
      >
        <div className="side-bar-content">
          <img
            className="side-bar-logo"
            src={logo}
            alt="logoLight"
          />
          <ul className="side-bar-nav-list">
            {navBarList.map((item) => (
              <li
                className="side-bar-nav-item"
                key={item._id}
              >
                <NavLink
                  to={item.link}
                  state={{ data: location.pathname.split("/")[1] }}
                  onClick={() => setSidenav(false)}
                >
                  {item.title}
                </NavLink>
              </li>
            ))}
          </ul>
          <div className="side-bar-section">
            <h1
              onClick={() => setCategory(!category)}
            className="side-bar-section-title"
            >
              Shop by Category{" "}
              <span className="text-lg">{category ? "-" : "+"}</span>
            </h1>
            {category && (
              <motion.ul
                initial={{ y: 15, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.4 }}
                className="side-bar-section-list"
              >
                <li className="header-sedenav-li">New Arrivals</li>
                <li className="header-sedenav-li">Gudgets</li>
                <li className="header-sedenav-li">Accessories</li>
                <li className="header-sedenav-li">Electronics</li>
                <li className="header-sedenav-li">Others</li>
              </motion.ul>
            )}
          </div>
          <div className="side-bar-section">
            <h1
              onClick={() => setBrand(!brand)}
            className="side-bar-section-title"
            >
              Shop by Brand
              <span className="text-lg">{brand ? "-" : "+"}</span>
            </h1>
            {brand && (
              <motion.ul
                initial={{ y: 15, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.4 }}
                className="side-bar-section-list"
              >
                <li className="header-sedenav-li">New Arrivals</li>
                <li className="header-sedenav-li">Gudgets</li>
                <li className="header-sedenav-li">Accessories</li>
                <li className="header-sedenav-li">Electronics</li>
                <li className="header-sedenav-li">Others</li>
              </motion.ul>
            )}
          </div>
        </div>
        <span
          onClick={() => setSidenav(false)}
          className="side-bar-close"
        >
          <MdClose />
        </span>
      </motion.div>
    </div>
  );
};