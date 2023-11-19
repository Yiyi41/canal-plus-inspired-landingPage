import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import styles from "./SideBar.module.css";

// func for detecting if client clicked outside of sidebar
function isOutsideClick(ref) {
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    function handleClickOutside(e) {
      // console.log("ref.current", ref);
      // console.log("e.clientX", e.clientX);
      // console.log("ref.current.offsetLeft", ref.current.offsetLeft);
      if (!ref.current) return;
      if (e.clientX > ref.current.offsetLeft || e.clientY > 300) {
        setIsClicked(true);
      } else {
        setIsClicked(false);
      }
    }
    // console.log("isClicked", isClicked);
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);

  return isClicked;
}

function SideBar({ openSideBar, setOpenSideBar }) {
  const sideBarRef = useRef(null);
  const outsideOfSidebarIsClicked = isOutsideClick(sideBarRef);

  const displayStyle = openSideBar ? "translateX(350px)" : "translateX(0)";

  const closeSideBar = () => {
    if (openSideBar) {
      setOpenSideBar(false);
    }
  };

  //if sidebar open and outside of it is clicked, close sidebar
  useEffect(() => {
    if (openSideBar && outsideOfSidebarIsClicked) {
      closeSideBar();
    }
  }, [outsideOfSidebarIsClicked]);

  return (
    <>
      <div
        className={styles.sideBar}
        ref={sideBarRef}
        style={{ transform: displayStyle }}
      >
        <ul className={styles.menuList}>
          <li>React</li>
          <li>NextJS</li>
          <li>React Native</li>
          <li>Typescript</li>
          <li>Nodejs</li>
          <li>Sass</li>
          <li>MongoDB</li>
          <Link
            className={styles.subscribeBtn}
            href="https://github.com/Yiyi41"
            target="_blank"
          >
            Github
          </Link>
        </ul>
      </div>
    </>
  );
}

export default SideBar;
