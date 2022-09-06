import { Link } from 'react-router-dom';
import style from '../CommoneStyle/CommoneStyle.module.css';
import s from './RedirectToSidebarPage.module.css';

export default function RedirectToSidebarPage() {
  return (
    <div className={s.redirect__container}>
      <p className={style.article_title}>
        The sidebar page is available{' '}
        <Link className={s.redirect__link} to="/travel">
          here
        </Link>
        .
      </p>
    </div>
  );
}
