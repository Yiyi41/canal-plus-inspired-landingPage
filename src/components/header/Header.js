import { useEffect, useState, useLayoutEffect } from "react";

import Image from "next/image";
import Link from "next/link";

import styles from "./Header.module.css";
import magnifiyingGlass from "./assets/magnifiying_glass_icon.svg";
import userIcon from "./assets/user-solid.svg";
import burgerMenu from "./assets/bars-solid.svg";

import SideBar from "../sideBar/SideBar";

export default function Header() {
  const [windowWidth, setWindowWidth] = useState(null);
  const [openSideBar, setOpenSideBar] = useState(false);

  const breakPoint = 996;

  const isWindow = typeof window !== "undefined";

  const getWidth = () => (isWindow ? window.innerWidth : windowWidth);

  const resize = () => setWindowWidth(getWidth());

  useEffect(() => {
    if (isWindow) {
      setWindowWidth(getWidth());

      window.addEventListener("resize", resize);

      return () => window.removeEventListener("resize", resize);
    }
  }, [isWindow]);

  const handleOpenSideBar = () => {
    setOpenSideBar((prevState) => !prevState);
  };

  return (
    <>
      <header className={styles.headerContainer}>
        <div className={styles.logoContainer}>
          <span className={styles.logo}>Yiyi Plantinet</span>
        </div>

        <nav className={styles.navBar}>
          <ul className={styles.menu}>
            <li>React</li>
            <li>NextJS</li>
            <li>React Native</li>
            <li>Typescript</li>
            <li>Nodejs</li>
            <li>Sass</li>
            <li>MongoDB</li>
          </ul>
        </nav>

        {windowWidth <= breakPoint ? (
          <div className={styles.userContainer}>
            <Image
              className={styles.menuBurger}
              src={burgerMenu}
              width={25}
              height={25}
              alt="burger menu icon"
              onClick={handleOpenSideBar}
            />
          </div>
        ) : (
          <div className={styles.userContainer}>
            <div className={styles.searchIconContainer}>
              <Image
                src={magnifiyingGlass}
                width={25}
                height={25}
                alt="search icon"
                className={styles.searchIcon}
              />
            </div>

            <Link
              className={styles.subscribetBtn}
              href="https://github.com/Yiyi41"
              target="_blank"
            >
              Github
            </Link>
            <div className={styles.profilIconBCG}>
              <Image
                src={userIcon}
                width={30}
                height={30}
                alt="user profil icon"
                className={styles.profilIcon}
              />
            </div>
          </div>
        )}
      </header>
      {openSideBar ? (
        <SideBar openSideBar={openSideBar} setOpenSideBar={setOpenSideBar} />
      ) : null}
    </>
  );
}
