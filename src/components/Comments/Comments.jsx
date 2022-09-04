import { images } from 'images';
import style from './Comments.module.css';
import s from '../CommoneStyle/CommoneStyle.module.css';

export default function Comments() {
  return (
    <div className={style.comments__container}>
      <section className={style.comments__section}>
        <p className={`${style.comments__title} ${s.article_category}`}>
          2 comments
        </p>
        <ul className={style.comment__list}>
          <li className={`${style.comments__item} ${style.item}`}>
            <div className={style.item__img__box}>
              {' '}
              <img
                className={style.item__img}
                src={images.comments.john_doe}
                alt="John Doe"
              ></img>
            </div>
            <div className={style.item__box}>
              <p className={style.item__name}>John Doe</p>
              <p className={style.item__comment}>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo!
              </p>
              <button className={`${style.item__button} ${s.article_category}`}>
                Reply
              </button>
            </div>
          </li>
          <li className={`${style.comments__item} ${style.item}`}>
            <div className={style.item__img__box}>JD</div>
            <div className={style.item__box}>
              <p className={style.item__name}>Jane Doe</p>
              <p className={style.item__comment}>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque.
              </p>
              <button className={`${style.item__button} ${s.article_category}`}>
                Reply
              </button>
            </div>
          </li>
        </ul>
        <div className={style.item}>
          <div
            className={`${style.item__img__box} ${style.item__img__box_color}`}
          >
            JD
          </div>
          <form className={style.comments__form}>
            <input
              type="text"
              className={style.comments__field}
              placeholder="Join the discussion"
            ></input>
          </form>
        </div>
      </section>
    </div>
  );
}
