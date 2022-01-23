import styles from '../styles/Footer.module.css';

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <div>
          Okkoma Co. © 2021
        </div>
        <div>
          <a>Privacy Plicy</a> | <a>Cookie Policy</a>
        </div>
      </footer>
    </>
  )
}
