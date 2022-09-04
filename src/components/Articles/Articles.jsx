import { Link } from 'react-router-dom';
import SignupForm from 'components/SignupForm/SignupForm';
import Container from 'components/Container/Container';
import { images } from 'images';
// import Text from 'components/AppBar/ShowMoreTex/ShowMoreText';
import style from '../CommoneStyle/CommoneStyle.module.css';
import s from './Articles.module.css';

export default function Articles() {
  return (
    <>
      <Container>
        {' '}
        <ul className={s.articles__list}>
          <li className={s.articles__item}>
            <article className={s.article}>
              <img
                className={s.article__img}
                src={images.images_articles.festival}
                alt="People are at the music festival"
              ></img>
              <Link
                to="/lifestyle"
                className={`${style.article_category} ${s.article_category_position}`}
              >
                lifestyle
              </Link>
              <h3 className={style.article_title}>
                More than just a music festival{' '}
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
              </p>
            </article>
          </li>
          <li className={s.articles__item}>
            <article className={s.article}>
              <img
                className={s.article__img}
                src={images.images_articles.cofe}
                alt="Cup of cofe"
              ></img>
              <Link
                to="/lifestyle"
                className={`${style.article_category} ${s.article_category_position}`}
              >
                lifestyle
              </Link>
              <h3 className={style.article_title}>
                Life tastes better with coffee
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
              </p>
            </article>{' '}
          </li>
          <li className={s.articles__item}>
            <article className={s.article}>
              <img
                className={s.article__img}
                src={images.images_articles.dream}
                alt="Two girls are by the Golden Gate Bridge"
              ></img>
              <Link
                to="/photodiary"
                className={`${style.article_category} ${s.article_category_position}`}
              >
                photodiary
              </Link>
              <h3 className={style.article_title}>American dream</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
              </p>
            </article>
          </li>
          <li className={s.articles__item}>
            <article className={s.article}>
              <img
                className={s.article__img}
                src={images.images_articles.alps}
                alt="Girl dressed in winter clothes is standing back to the viewer"
              ></img>
              <Link
                to="/photodiary"
                className={`${style.article_category} ${s.article_category_position}`}
              >
                photodiary
              </Link>
              <h3 className={style.article_title}>A day exploring the Alps</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
              </p>
            </article>
          </li>
        </ul>
      </Container>

      <SignupForm></SignupForm>

      <Container>
        <ul className={s.articles__list}>
          <li className={s.articles__item}>
            <article className={s.article}>
              <img
                className={s.article__img}
                src={images.images_articles.song}
                alt="Girl is wearing cardigan and hat on the head"
              ></img>
              <Link
                to="/lifestyle"
                className={`${style.article_category} ${s.article_category_position}`}
              >
                lifestyle
              </Link>
              <h3 className={style.article_title}>Top 10 song for running</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
              </p>
            </article>
          </li>
          <li className={s.articles__item}>
            <article className={s.article}>
              <img
                className={s.article__img}
                src={images.images_articles.winter}
                alt="The winter road"
              ></img>
              <Link
                to="/lifestyle"
                className={`${style.article_category} ${s.article_category_position}`}
              >
                lifestyle
              </Link>
              <h3 className={style.article_title}>Cold winter days</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
              </p>
            </article>
          </li>
        </ul>
      </Container>
    </>
  );
}
