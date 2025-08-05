"use client";

import React from "react";
import styles from "./page.module.css";

const Home = () => {
  const categories = {
    // "Function calling": "function-calling",
    // "File search": "file-search",
    // All: "all",
  };

  return (
    <main className={styles.main}>
      <div className={styles.titles}>
        <div className={styles.title}>
          안녕하세요? 저는 메디바이스 MeDevice에요.<br/>
        </div>
        <div className={styles.subtitle}>
         불편한 증상을 저에게 말해보세요 :)
        </div>
      </div>
      <div className={styles.container}>
        <a
          key={"시작하기"}
          className={styles.category} href={`/chatboard/medevice`}>
          {"시작하기"}
        </a>
      </div>
    </main>
  );
};

export default Home;
