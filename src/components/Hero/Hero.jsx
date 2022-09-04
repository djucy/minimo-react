import { images } from 'images';
import { Link, Outlet } from 'react-router-dom';
import style from '../Hero/Hero.module.css';
import s from '../CommoneStyle/CommoneStyle.module.css';
import CarouselImg from 'components/Carousel/Carousel';
export default function Hero() {
  return (
    <>
      <h1 className={style.hero__title}>
        Magazine about style,travel, photos and music
      </h1>
      <div className={style.hero__carousel__box}>
        <CarouselImg></CarouselImg>
      </div>
      <div className={s.article__text_container}>
        <Link to="/photodiary" className={s.article_category}>
          photodiary
        </Link>
        <h2 className={s.article_title}>The perfect weekend getaway</h2>
        <p className={s.article__text}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum. Sed ut
          perspiciatis unde omnis iste natus error sit voluptatem accusantium
          doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
          inventore veritatis et quasi architecto beatae vitae dicta sunt
          explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
          odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
          voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum
          quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam
          eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat
          voluptatem.
        </p>
        <Link to="/singlepost" className={style.article_link_comment}>
          Leave a comment
        </Link>
      </div>
    </>
  );
}
