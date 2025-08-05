"use client";

import React from "react";
import styles from "../../page.module.css";
import Chat from "../../../components/chat";

const Widget = () => {
  return (
    <main className={styles.main}>
      <div className={styles.chat}>
        <Chat />
      </div>
    </main>
  );
};

export default Widget;
