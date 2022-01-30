import styles from "../styles/About.module.css";
import React from "react";
import Image from "next/image";
import pic from "../public/images/pic.jpg";

const About = () => {
  return (
    <div>
      <h2>ABOUT US</h2>
      <div className={styles.wrapper}>
        <div>
          <div className={styles.comma_box}>
            <span className={styles.comma}>"</span>
            <p className={styles.define}>
              This is where we add little bit about ourselves
            </p>
          </div>
        </div>
        <div className={styles.mission_vision_wrapper}>
          <div className={styles.mission}>
            <h2>MISSION</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              voluptate quam ut velit sed quis distinctio modi, recusandae totam
              inventore.
            </p>
          </div>
          <div className={styles.vision}>
            <h2>VISION</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos
              earum dolorum laborum iure doloremque beatae quam quod nihil porro
              dolores.
            </p>
          </div>
        </div>
        <div className={styles.members}>
          <div className={styles.person}>
            <div className={styles.image_wrapper}>
              <Image
                className={styles.image}
                src={pic}
                width={200}
                height={200}
              ></Image>
            </div>
            <p className={styles.name}>Avidu</p>
          </div>
          <div className={styles.person}>
            <div className={styles.image_wrapper}>
              <Image
                className={styles.image}
                src={pic}
                width={200}
                height={200}
              ></Image>
            </div>
            <p className={styles.name}>Chanaka</p>
          </div>
          <div className={styles.person}>
            <div className={styles.image_wrapper}>
              <Image
                className={styles.image}
                src={pic}
                width={200}
                height={200}
              ></Image>
            </div>
            <p className={styles.name}>Salika</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
