// import { images } from 'images';
import SinglePost from 'components/SinglePost/SinglePost';
import AlsoLikeArticles from 'components/AlsoLikeArticles/AlsoLikeArticles';
import Comments from 'components/Comments/Comments';
export default function SinglePostPage() {
  return (
    <>
      <SinglePost></SinglePost>
      <AlsoLikeArticles></AlsoLikeArticles>
      <Comments></Comments>
    </>
  );
}
