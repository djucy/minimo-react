import { images } from 'images';
import s from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={s.footer}>
      <ul className={s.footer__list}>
        <li className={s.footer__item}>
          <a href="/" className={s.footer__terms__link}>
            Terms and conditions
          </a>
        </li>
        <li>
          <a href="/" className={s.footer__terms__link}>
            Privacy
          </a>
        </li>
      </ul>
      <ul className={s.footer__list}>
        <li className={s.footer__item}>
          <p>Follow</p>
        </li>
        <li className={s.footer__item}>
          <img src={images.icons.facebook} alt="Facebook"></img>
        </li>
        <li className={s.footer__item}>
          <img src={images.icons.twitter} alt="Twitter"></img>
        </li>
        <li className={s.footer__item}>
          <img src={images.icons.instagram} alt="Instagram"></img>
        </li>
      </ul>
    </footer>
  );
}
