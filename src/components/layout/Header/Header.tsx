
import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { HiMenuAlt2 } from "react-icons/hi";
import { logo } from "@/assets/images";
import { Image, FlexBox } from "@/components/common";
import { SideBar } from "@/components/layout/SideBar/SideBar";
import { NavBarList } from "@/types";
import './Header.scss';

const navBarList: NavBarList[] = [
  {
    _id: 1001,
    title: "Home",
    link: "/",
  },
  {
    _id: 1002,
    title: "Shop",
    link: "/shop",
  },
  {
    _id: 1003,
    title: "About",
    link: "/about",
  },
  {
    _id: 1004,
    title: "Contact",
    link: "contact",
  },
];

export const Header = () => {{

  const [showMenu, setShowMenu] = useState(true);
  const [sidenav, setSidenav] = useState(false);
  const location = useLocation();

  useEffect(() => {
    let ResponsiveMenu = () => {
      if (window.innerWidth < 667) {
        setShowMenu(false);
      } else {
        setShowMenu(true);
      }
    };
    ResponsiveMenu();
    window.addEventListener("resize", ResponsiveMenu);
  }, []);

  return (
    <div className="header-wrapper">
      <nav className="header-content">
        <FlexBox className="headerFlexBox">
          <Link to="/">
            <div>
              <Image className="header-logo" imgSrc={logo} />
            </div>
          </Link>
          <div>
            {showMenu && (
              <motion.ul
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="header-nav"
              >
                <>
                  {navBarList.map(({ _id, title, link }) => (
                    <NavLink
                      key={_id}
                      className="header-nav-item"
                      to={link}
                      state={{ data: location.pathname.split("/")[1] }}
                    >
                      <li>{title}</li>
                    </NavLink>
                  ))}
                </>
              </motion.ul>
            )}
            <HiMenuAlt2
              onClick={() => setSidenav(!sidenav)}
              className="headerMenuIcon"
            />
            {sidenav && (
              <SideBar setSidenav={setSidenav} navBarList={navBarList}></SideBar>
            )}
          </div>
        </FlexBox>
      </nav>
    </div>
  );
}}