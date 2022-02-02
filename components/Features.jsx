import styles from "../styles/Features.module.css";
import React from "react";
import Image from "next/image";
import grow from "../public/images/grow.svg";
import aio from "../public/images/aio.svg";
import rates from "../public/images/rates.svg";

const Features = () => {
  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <div className={styles.box}>
          <div>
            <Image src={aio}></Image>
          </div>
          <div className={styles.desc}>
            <h3 className={styles.title}>AIO SOLUTION</h3>
            <p>
              We have everything you need to run your business, So you don't
              need to go around for each services.
            </p>
          </div>
        </div>
        <div className={styles.box}>
          <div>
          <Image src={grow}></Image>
          </div>
          <div className={styles.desc}>
            <h3 className={styles.title}>LONG TERM GROWTH</h3>
            <p>
              Final purpose of every step we take today is to achieve the main
              goal of your company. We are here to make your journey more
              easier.
            </p>
          </div>
        </div>
        <div className={styles.box}>
          <div>
            <Image src={rates}></Image>
          </div>
          <div className={styles.desc}>
            <h3 className={styles.title}>FLEXIBLE RATES</h3>
            <p>
              You can customize your package by adding or removing servieces as
              you want, so that you can same some money and time.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
