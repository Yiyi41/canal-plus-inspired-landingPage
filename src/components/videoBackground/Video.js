"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import styles from "./Video.module.css";
import pauseIcon from "./assets/pause_icon.svg";
import playIcon from "./assets/play_icon.svg";

import Header from "../header/Header";

export default function Video() {
  const [isPlay, setIsPlay] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  const videoRef = useRef(null);

  const handlePause = () => {
    videoRef.current.pause();
    setIsPlay(false);
  };

  const handlePlay = () => {
    videoRef.current.play();
    setIsPlay(true);
  };

  return (
    <>
      <Header />
      <div className={styles.videoBackground}>
        <video
          ref={videoRef}
          className={styles.video}
          preload="auto"
          playsInline
          autoPlay
          muted={isMuted}
          loop
        >
          <source
            src="https://res.cloudinary.com/dps4zteie/video/upload/v1700069584/GiveWonder_elihlw.mp4"
            type="video/mp4"
          />
        </video>
        <div className={styles.highlightCallWrapper}>
          <div className={styles.highlightCallContent}>
            <span className={styles.highlightCallTitle}>
              ne confiez pas votre rêve à n'importe qui
            </span>
            <p className={styles.highlightCallDetail}>
              Profitez de mes compétences techniques ainsi que mes compétences
              humaines et transversales !
            </p>
            <div className={styles.btnWrapper}>
              <Link
                href="https://www.linkedin.com/in/yiyi-plantinet/"
                className={styles.highlightCallBtn}
              >
                DECOUVRIR MON PROFIL
              </Link>

              {isPlay ? (
                <Image
                  className={styles.pause}
                  src={pauseIcon}
                  width={50}
                  height={50}
                  alt="play video button"
                  onClick={handlePause}
                />
              ) : (
                <Image
                  className={styles.pause}
                  src={playIcon}
                  width={50}
                  height={50}
                  alt="pause video button"
                  onClick={handlePlay}
                />
              )}
            </div>
          </div>
        </div>
      </div>
      <div className={styles.footerBCG}>
        <span className={styles.footerTitle}>
          Vous avez besoin d'une dev <span className={styles.react}>REACT</span>{" "}
          ? Profitez de mes talents!
        </span>
        <Link
          href="https://www.linkedin.com/in/yiyi-plantinet/"
          target="_blank"
        >
          J'EN PROFITE
        </Link>
      </div>
    </>
  );
}
