
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
    <div className="sideBarOverlay">
      <motion.div
        initial={{ x: -300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="sideBarMotion"
      >
        <div className="sideBarContent">
          <img
            className="sideBarLogo"
            src={logo}
            alt="logoLight"
          />
          <ul className="sideBarNavList">
            {navBarList.map((item) => (
              <li
                className="sideBarNavItem"
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
          <div className="sideBarSection">
            <h1
              onClick={() => setCategory(!category)}
              className="sideBarSectionTitle"
            >
              Shop by Category{" "}
              <span className="text-lg">{category ? "-" : "+"}</span>
            </h1>
            {category && (
              <motion.ul
                initial={{ y: 15, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.4 }}
                className="sideBarSectionList"
              >
                <li className="headerSedenavLi">New Arrivals</li>
                <li className="headerSedenavLi">Gudgets</li>
                <li className="headerSedenavLi">Accessories</li>
                <li className="headerSedenavLi">Electronics</li>
                <li className="headerSedenavLi">Others</li>
              </motion.ul>
            )}
          </div>
          <div className="sideBarSection">
            <h1
              onClick={() => setBrand(!brand)}
              className="sideBarSectionTitle"
            >
              Shop by Brand
              <span className="text-lg">{brand ? "-" : "+"}</span>
            </h1>
            {brand && (
              <motion.ul
                initial={{ y: 15, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.4 }}
                className="sideBarSectionList"
              >
                <li className="headerSedenavLi">New Arrivals</li>
                <li className="headerSedenavLi">Gudgets</li>
                <li className="headerSedenavLi">Accessories</li>
                <li className="headerSedenavLi">Electronics</li>
                <li className="headerSedenavLi">Others</li>
              </motion.ul>
            )}
          </div>
        </div>
        <span
          onClick={() => setSidenav(false)}
          className="sideBarClose"
        >
          <MdClose />
        </span>
      </motion.div>
    </div>
  );
};