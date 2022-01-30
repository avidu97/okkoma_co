import styles from "../styles/Faqs.module.css";
import React from "react";

const Faqs = () => {
  return (
    <div>
      <h2>FAQs</h2>
      <div className={styles.faq_container}>
        <div className={styles.faq_section}>
          <div className={styles.faq_wrapper}>
            <div className={styles.question}>
              What is the difference between web design and development?
            </div>
            <div className={styles.answer}>
              Web design is the visual look of a website and the functionality
              from a user's perspective. Web development is the process of
              coding a website to go live.
            </div>
          </div>
          <div className={styles.faq_wrapper}>
            <div className={styles.question}>
              What is social meida marketing?
            </div>
            <div className={styles.answer}>
              Social media marketing is the use of social media platforms and
              websites to promote a product or service.
            </div>
          </div>
          <div className={styles.faq_wrapper}>
            <div className={styles.question}>
              How much does it cost to build a website in Sri Lanka?
            </div>
            <div className={styles.answer}>
              Compairing to global rates, Creating a website in Sri Lanka is
              much cheaper. It'll will cost around 20,000 rupees and upwards.
            </div>
          </div>
          <div className={styles.faq_wrapper}>
            <div className={styles.question}>
              What are the types of social media marketing?
            </div>
            <div className={styles.answer}>
              Thare are no any unified method, but we can catagorized as,
              <ul></ul>
              <li>Content marketing</li>
              <li>Advertising</li>
              <li>Influencer Marketing</li>
            </div>
          </div>
          <div className={styles.faq_wrapper}>
            <div className={styles.question}>
              How much does social media marketing cost?
            </div>
            <div className={styles.answer}>
              Cheapest package starts around 7,500 rupees per month.(This does
              not include advertising cost provided by the client side.
            </div>
          </div>
          <div className={styles.faq_wrapper}>
            <div className={styles.question}>
              Working with a digital marketing agency vs. hiring in-house
              marketing team.
            </div>
            <div className={styles.answer}>
              Managing a in-house marketing team will cost you more money and
              resources, but it will give you more result. So if you are just
              starting out it's good to go with agency.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faqs;
