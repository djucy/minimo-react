import { images } from 'images';
import style from './HeroImage.module.css';

export default function HeroImage() {
  return (
    <img
      className={style.hero__img}
      src={images.images_articles.hero}
      alt="Two women standing in the desert"
    ></img>
  );
}
