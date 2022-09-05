import s from './SideBar.module.css';
import { images } from 'images';

export default function SideBar() {
  return (
    <aside className={s.sidebar__container}>
      <img src={images.about_me.cofe} alt="The cup of cofe"></img>
      <h4 className={s.sidebar__title}>About me</h4>
      <p className={s.sidebar__text}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris
      </p>
      <ul className={s.sidebar__icons__list}>
        <li className={s.icons__item}>
          <img src={images.icon_singlepost.fb} alt="Facebook"></img>
        </li>
        <li className={s.icons__item}>
          <img src={images.icon_singlepost.instagram} alt="Instagram"></img>
        </li>
        <li className={s.icons__item}>
          <img src={images.icon_singlepost.pinterest} alt="Pinterest"></img>
        </li>
      </ul>
      <p className={s.sidebar__post__title}>Top posts</p>
      <ul className={`${s.sidebar__post__list} ${s.post__list}`}>
        <li className={`${s.post__item} `}>
          <p className={s.item__title}>A day exploring the Alps</p>
          <p className={s.item__text}>24 comments</p>
        </li>
        <li className={`${s.post__item}`}>
          <p className={s.item__title}>American dream</p>
          <p className={s.item__text}>19 comments</p>
        </li>
        <li className={`${s.post__item}`}>
          <p className={s.item__title}>Cold winter days</p>
          <p className={s.item__text}>15 comments</p>
        </li>
      </ul>
      <div className={s.post__img__box}>
        <img src={images.about_me.book} alt="The book in the handes"></img>
        <div className={s.img__banner__box}>
          <p className={s.img__banner__size}>250x250</p>
          <p className={s.img__banner__spot}>banner spot</p>
        </div>
      </div>
    </aside>
  );
}
