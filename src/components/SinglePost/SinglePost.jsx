import { Link } from 'react-router-dom';
import style from '../CommoneStyle/CommoneStyle.module.css';
import s from './SinnglePost.module.css';

// import SinglePostContainer from 'components/SinglePostContainer/SinglePostContainer';
import { images } from 'images';

export default function SinglePost() {
  return (
    // <SinglePostContainer>
    <div>
      <Link to="/photodiary" className={style.article_category}>
        photodiary
      </Link>
      <h2 className={style.article_title}>The perfect weekend getaway</h2>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. “Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.{' '}
        <b>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium,
        </b>{' '}
        totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
        architecto beatae vitae dicta sunt explicabo.” Lorem ipsum dolor sit
        amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
        illo inventore veritatis et quasi architecto beatae vitae dicta sunt
        explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
        odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
        voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum
        quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam
        eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat
        voluptatem.
      </p>
      <p>
        {' '}
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>

      <ul className={s.singlepost__gallery_list}>
        <li className={s.singlepost__galery_item}>
          <img
            src={images.single_post.woman_with_scarf}
            alt="Woman in the desert"
          ></img>
        </li>
        <li className={s.singlepost__galery_item}>
          <img
            src={images.single_post.woman_black_skirt}
            alt="Woman in the desert"
          ></img>
        </li>
        <li className={s.singlepost__galery_item}>
          <img
            src={images.single_post.woman_in_sun}
            alt="Woman in the desert"
          ></img>
        </li>
      </ul>
      <p
        className={`${s.singlepost__text_italic} ${s.singlepost__text_italic_position}`}
      >
        “Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
        illo inventore veritatis et quasi architecto beatae vitae dicta sunt
        explicabo.”
      </p>
      <p className={s.singlepost__text_position}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus
        error sit voluptatem accusantium doloremque laudantium, totam rem
        aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto
        beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
        voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni
        dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
        est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
        sed quia non numquam eius modi tempora incidunt ut labore et dolore
        magnam aliquam quaerat voluptatem.
      </p>
      <ul className={`${s.singlepost__icons__list} ${s.icons__list}`}>
        <li className={s.icons__item}>
          <span className={s.icons__item__share}>Share</span>
        </li>
        <li className={s.icons__item}>
          <img src={images.icon_singlepost.fb} alt="Facebook"></img>
        </li>
        <li className={s.icons__item}>
          <img src={images.icon_singlepost.tw} alt="Twitter"></img>
        </li>
        <li className={s.icons__item}>
          <img src={images.icon_singlepost.google} alt="Google"></img>
        </li>
        <li className={s.icons__item}>
          <img src={images.icon_singlepost.tumblr} alt="Tumblr"></img>
        </li>
        <li className={s.icons__item}>
          <img src={images.icon_singlepost.pinterest} alt="Pinterest"></img>
        </li>
      </ul>
    </div>
    // </SinglePostContainer>
  );
}
