"use client";

import React from "react";
import styles from "./page.module.css";

const Home = () => {
  const categories = {
    "nUBoard 질문봇": "nuboard",
    "nUDR 질문봇": "nudr",
    // "Function calling": "function-calling",
    // "File search": "file-search",
    // All: "all",
  };

  return (
    <main className={styles.main}>
      <div className={styles.titles}>
        <div className={styles.title}>
          안녕하세요? 저는 미디바이스 Me-Device에요.<br/>
        </div>
        <div className={styles.subtitle}>
          지금 불편한 증상을 저에게 설명해주세요 :)
        </div>
      </div>
      <div className={styles.container}>
        <a
          key={"시작하기"}
          className={styles.category} href={`/chatboard/medevice`}>
          {"시작하기"}
        </a>
        {/* <a
          key={"nUBoard 질문봇"}
          className={styles.category} href={`/dashboard/nuboard`}>
          {"nUBoard 질문하기"}
        </a>
        <a
          key={"nUDR 질문봇"}
          className={styles.category} href={`/dashboard/nudr`}>
          {"nUDR 질문하기"}
        </a> */}
      </div>
    </main>
  );
};

export default Home;
