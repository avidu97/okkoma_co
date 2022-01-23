import styles from "../styles/About.module.css";
import React from "react";

const About = () => {
  return (
    <div>
      <div>
        <h2>ABOUT US</h2>
        <div>
          <div>
            <span>"</span>
            <p>This is where we add little bit about ourselves</p>
          </div>
        </div>
        <div className={styles.mission_vision_wrapper}>
          <div className={styles.mission}>
            <h2>MISSION</h2>
          </div>
          <div className={styles.vision}>
            <h2>VISION</h2>
          </div>
        </div>
        <div className={styles.members}>
          <div>Member 1</div>
          <div>Member 2</div>
          <div>Member 3</div>
        </div>
      </div>
    </div>
  );
};

export default About;
