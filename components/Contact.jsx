import styles from "../styles/Contact.module.css";
import React from "react";
import Link from "next/link";

const Contact = () => {
  return (
    <div>
      <h2>SAY Hi!</h2>
      <div className={styles.contact_container}>
        <div className={styles.email_wrapper}>
          <a href={"mailto:hi@okkoma.co"}>
            <h1 className={styles.mail}>hi@okkoma.co</h1>
          </a>
        </div>
        <div className={styles.bottom_sec}>
          <ul className={styles.pn_wrapper}>
            <li className={styles.pn}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
              >
                <path
                  id="Icon_awesome-phone-square-alt"
                  data-name="Icon awesome-phone-square-alt"
                  d="M17.857,2.25H2.143A2.143,2.143,0,0,0,0,4.393V20.107A2.143,2.143,0,0,0,2.143,22.25H17.857A2.143,2.143,0,0,0,20,20.107V4.393A2.143,2.143,0,0,0,17.857,2.25Zm-.732,13.722-.67,2.9a.67.67,0,0,1-.652.519A12.947,12.947,0,0,1,2.857,6.446a.7.7,0,0,1,.519-.652l2.9-.67a.814.814,0,0,1,.15-.017.726.726,0,0,1,.616.406L8.383,8.638a.8.8,0,0,1,.054.264.759.759,0,0,1-.246.518L6.5,10.8a10.353,10.353,0,0,0,4.946,4.946l1.384-1.692a.759.759,0,0,1,.518-.246.8.8,0,0,1,.264.054l3.125,1.339a.725.725,0,0,1,.406.616.777.777,0,0,1-.017.15Z"
                  transform="translate(0 -2.25)"
                />
              </svg>
              <Link href="tel:0717579790">071 75 79 79 0</Link>
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
              >
                <path
                  id="Icon_awesome-whatsapp-square"
                  data-name="Icon awesome-whatsapp-square"
                  d="M10,6.3a5.883,5.883,0,0,0-4.987,9.013l.138.223-.594,2.17,2.228-.585L7,17.254a5.868,5.868,0,0,0,3,.821h0a5.95,5.95,0,0,0,5.951-5.884,5.911,5.911,0,0,0-1.79-4.161A5.839,5.839,0,0,0,10,6.3Zm3.46,8.411a1.8,1.8,0,0,1-1.192.839,3.45,3.45,0,0,1-2.121-.442,7.947,7.947,0,0,1-3.022-2.67,3.427,3.427,0,0,1-.723-1.83,1.981,1.981,0,0,1,.621-1.478A.644.644,0,0,1,7.5,8.911c.116,0,.237,0,.339,0s.254-.04.4.3.5,1.223.545,1.313a.312.312,0,0,1,.013.308c-.339.679-.7.652-.518.964a4.819,4.819,0,0,0,2.406,2.1c.179.089.281.076.384-.045s.442-.518.558-.692.237-.147.4-.089,1.031.487,1.21.576.295.134.339.205a1.571,1.571,0,0,1-.107.853Zm4.4-12.464H2.143A2.143,2.143,0,0,0,0,4.393V20.107A2.143,2.143,0,0,0,2.143,22.25H17.857A2.143,2.143,0,0,0,20,20.107V4.393A2.143,2.143,0,0,0,17.857,2.25ZM10,19.268a7.073,7.073,0,0,1-3.384-.862l-3.754.987,1-3.67a7.093,7.093,0,1,1,13.281-3.531A7.145,7.145,0,0,1,10,19.268Z"
                  transform="translate(0 -2.25)"
                />
              </svg>
              076 75 78 12 7
            </li>
          </ul>
          <address className={styles.adr}>
            <svg className={styles.adr_logo}
              xmlns="http://www.w3.org/2000/svg"
              width="26.667"
              height="20"
              viewBox="0 0 26.667 20"
            >
              <path
                id="Icon_awesome-envelope"
                data-name="Icon awesome-envelope"
                d="M26.161,11.1a.314.314,0,0,1,.505.245V22a2.5,2.5,0,0,1-2.5,2.5H2.5A2.5,2.5,0,0,1,0,22V11.354a.311.311,0,0,1,.505-.245c1.167.906,2.714,2.057,8.026,5.917,1.1.8,2.953,2.49,4.8,2.479,1.859.016,3.75-1.708,4.807-2.479C23.453,13.167,24.995,12.01,26.161,11.1ZM13.333,17.833c1.208.021,2.948-1.521,3.823-2.156,6.911-5.016,7.437-5.453,9.031-6.7a1.246,1.246,0,0,0,.479-.984V7a2.5,2.5,0,0,0-2.5-2.5H2.5A2.5,2.5,0,0,0,0,7v.99a1.254,1.254,0,0,0,.479.984c1.594,1.245,2.12,1.687,9.031,6.7C10.385,16.313,12.125,17.854,13.333,17.833Z"
                transform="translate(0 -4.5)"
              />
            </svg>
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
