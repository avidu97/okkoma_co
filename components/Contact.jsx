import styles from "../styles/Contact.module.css";
import React from "react";
import Link from "next/link";

const Contact = () => {
  return (
    <div>
      <h2>SAY Hi!</h2>
      <div className={styles.contact_container}>
        <div className={styles.email_wrapper}>
          <a href={"mailto:hi@okkoma.co"}><h1 className={styles.mail} >hi@okkoma.co</h1></a>
        </div>
        <div className={styles.bottom_sec}>
          <ul className={styles.pn_wrapper}>
            <li>071 75 79 79 0</li>
            <li>076 75 78 12 7</li>
          </ul>
          <address className={styles.adrs}>
            Kurunegala raod, <br />
            Kumbukgete, <br />
            60508.
          </address>
        </div>
      </div>
    </div>
  );
};

export default Contact;
