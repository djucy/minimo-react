import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { images } from 'images';
import style from '../Carousel/Carousel.module.css';

export default function CarouselImg() {
  return (
    <Carousel
      autoPlay="true"
      showThumbs={false}
      infiniteLoop="true"
      animationHandler="fade"
      showStatus={false}
      showArrows={false}
      showIndicators={false}
    >
      <div className={style.carousel_box}>
        <img
          src={images.images_articles.hero}
          alt="Two women standing in the desert"
          className={style.carousel_img}
        />
        {/* <p className="legend">Legend 1</p> */}
      </div>
      <div className={style.carousel_box}>
        <img src={images.carousel.woman_with_scarf} alt="Woman in the desert" />
        {/* <p className="legend">Legend 2</p> */}
      </div>
      <div className={style.carousel_box}>
        <img
          src={images.carousel.woman_black_skirt}
          alt="Woman in the desert"
        />
        {/* <p className="legend">Legend 3</p> */}
      </div>
      <div className={style.carousel_box}>
        <img src={images.carousel.woman_in_sun} alt="Woman in the desert" />
        {/* <p className="legend">Legend 3</p> */}
      </div>
    </Carousel>
  );
}
