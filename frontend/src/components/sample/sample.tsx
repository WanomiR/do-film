import React from "react";
import styles from "./sample.module.scss";

const SamplePage: React.FC = () => {
  return (
      <>
        <div className={styles.title}>CSS module works!</div>
        <div className={styles.subtitle}>CSS module + Tailwind works!</div>
        <div
            className={
              'border-[10px] border-solid border-red-800 rounded-full w-[200px] h-[200px] flex items-center justify-center text-center'
            }
        >
          Tailwind works!
        </div>
        <div>Absolute Path Works!</div>
      </>
  )
};

export default SamplePage;
