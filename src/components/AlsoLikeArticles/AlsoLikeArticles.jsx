import { images } from 'images';
import style from './AlsoLikeArticles.module.css';
import s from '../CommoneStyle/CommoneStyle.module.css';
export default function AlsoLikeArticles() {
  return (
    <div className={style.like__container}>
      <h3 className={`${s.article_category} ${style.like__title}`}>
        you may also like
      </h3>
      <ul className={style.like__list}>
        <li className={`${style.like__item} ${style.item}`}>
          <img
            src={images.images_articles.winter}
            alt="The winter road"
            className={style.item__img}
          ></img>
          <h4 className={style.item__title}>Cold winter days</h4>
        </li>
        <li className={`${style.like__item} ${style.item}`}>
          <img
            className={style.item__img}
            src={images.images_articles.alps}
            alt="Girl dressed in winter clothes is standing back to the viewer"
          ></img>
          <h4 className={style.item__title}>A day exploring the Alps</h4>
        </li>
        <li className={`${style.like__item} ${style.item}`}>
          <img
            className={style.item__img}
            src={images.images_articles.dream}
            alt="Two girls are by the Golden Gate Bridge"
          ></img>
          <h4 className={style.item__title}>American dream</h4>
        </li>
      </ul>
    </div>
  );
}
