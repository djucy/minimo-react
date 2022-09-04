import style from './AppBar.module.css';
import { Link, NavLink } from 'react-router-dom';

export default function AppBar() {
  return (
    <header className={style.header}>
      <Link to="/" className={style.logo}>
        minimø
      </Link>
      <nav>
        <ul className={style.nav__list}>
          <li className={style.nav__item}>
            <NavLink to="/lifestile" className={style.nav_link}>
              lifestyle
            </NavLink>
          </li>
          <li className={style.nav__item}>
            <NavLink to="/photodiary" className={style.nav_link}>
              photodiary
            </NavLink>
          </li>
          <li className={style.nav__item}>
            <NavLink to="/music" className={style.nav_link}>
              music
            </NavLink>
          </li>
          <li className={style.nav__item}>
            <NavLink to="/travel" className={style.nav_link}>
              travel
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
