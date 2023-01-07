import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import styles from './style.module.css';

function Footer() {
  const date = new Date();

  return (
    <footer className={styles.footer}>
      <ul className={styles.social_list}>
        <li>
          <FaFacebook />
        </li>
        <li>
          <FaInstagram />
        </li>
        <li>
          <FaLinkedin />
        </li>
      </ul>

      <p className={styles.copy_right}>
        <span>Costs</span> &copy; {date.getFullYear()}
      </p>
    </footer>
  );
}

export default Footer;
