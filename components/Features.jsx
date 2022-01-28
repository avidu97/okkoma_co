import styles from "../styles/Features.module.css";
import React from "react";

const Features = () => {
  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <div className={styles.box}>
          <div>IMAGE</div>
          <div>
            <h3 className={styles.title}>AIO SOLUTION</h3>
            <p>
              We have everything you need to run your business, So you don't
              need to go around for each services.
            </p>
          </div>
        </div>
        <div className={styles.box}>
          <div>IMAGE</div>
          <div>
            <h3 className={styles.title}>LONG TERM GROWTH</h3>
            <p>
              Final purpose of every step we take today is to achieve the main
              goal of your company. We are here to make your journey more
              easier.
            </p>
          </div>
        </div>
        <div className={styles.box}>
          <div>IMAGE</div>
          <div>
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
