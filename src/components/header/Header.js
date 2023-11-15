import Image from "next/image";

import styles from "./Header.module.css";
import logo from "public/canalplus-logo-v2.svg";
import magnifiyingGlass from "./assets/magnifiying_glass_icon.svg";
import userIcon from "./assets/user-solid.svg";

export default function Header() {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.logoContainer}>
        <Image
          src={logo}
          width={50}
          height={50}
          alt="logo canal plus"
          className={styles.logo}
        />
      </div>

      <nav className={styles.navBar}>
        <ul className={styles.menu}>
          <li>Nos Créations</li>
          <li>Cinéma</li>
          <li>Séries</li>
          <li>Sport</li>
          <li>Docs</li>
          <li>Jeunesse</li>
          <li>Chaînes</li>
        </ul>
      </nav>
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

        <button className={styles.subscribetBtn}>S'ABONNER</button>
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
    </div>
  );
}
