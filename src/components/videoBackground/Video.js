"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

import styles from "./Video.module.css";
import pauseIcon from "./assets/pause_icon.svg";
import playIcon from "./assets/play_icon.svg";
import silenceIcon from "./assets/volume-xmark-solid.svg";
import soundIcon from "./assets/volume-high-solid.svg";

import Header from "../header/Header";

export default function Video() {
  const [isPlay, setIsPlay] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  const [showHighlight, setShowHighlight] = useState(false);

  const videoRef = useRef(null);

  const videoURL =
    "https://res.cloudinary.com/dps4zteie/video/upload/v1700069584/GiveWonder_elihlw.mp4";

  const handlePause = () => {
    videoRef.current.pause();
    setIsPlay(false);
  };

  const handlePlay = () => {
    videoRef.current.play();
    setIsPlay(true);
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowHighlight(true);
    }, 5000);

    return () => clearTimeout(timeoutId);
  }, []);

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
          <source src={videoURL} type="video/mp4" />
        </video>
        {showHighlight && (
          <div className={styles.highlightCallWrapper}>
            <div className={styles.highlightCallContent}>
              <span className={styles.highlightCallTitle}>
                ne confiez pas votre rêve à n'importe qui
              </span>
              <p className={styles.highlightCallDetail}>
                Profitez de mes compétences techniques ainsi que mes compétences
                humaines et transversales!
              </p>
              <div className={styles.btnWrapper}>
                <Link
                  href="https://drive.google.com/file/d/1HyYXAHqWxRDzZQxfFacaGbrM_5oiKtXD/view?usp=sharing"
                  target="_blank"
                  className={styles.highlightCallBtn}
                >
                  DECOUVRIR MON PROFIL
                </Link>
                <div className={styles.videoControlsWrapper}>
                  {isPlay ? (
                    <Image
                      className={styles.controlsBtn}
                      src={pauseIcon}
                      width={50}
                      height={50}
                      alt="play video button"
                      onClick={handlePause}
                    />
                  ) : (
                    <Image
                      className={styles.controlsBtn}
                      src={playIcon}
                      width={50}
                      height={50}
                      alt="pause video button"
                      onClick={handlePlay}
                    />
                  )}

                  {isMuted ? (
                    <Image
                      className={styles.controlsBtn}
                      src={silenceIcon}
                      width={50}
                      height={50}
                      alt="mute video button"
                      onClick={() => setIsMuted(false)}
                    />
                  ) : (
                    <Image
                      className={styles.controlsBtn}
                      src={soundIcon}
                      width={50}
                      height={50}
                      alt="with video sound button"
                      onClick={() => setIsMuted(true)}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
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
