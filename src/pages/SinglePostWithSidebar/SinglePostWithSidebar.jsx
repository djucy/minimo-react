import Container from 'components/Container/Container';
import HeroImage from 'components/SinglePost/HeroImage/HeroImage';
import SinglePost from 'components/SinglePost/SinglePost';
import AlsoLikeArticles from 'components/AlsoLikeArticles/AlsoLikeArticles';
import Comments from 'components/Comments/Comments';
export default function SinglePostPage() {
  return (
    <>
      <Container>
        <HeroImage></HeroImage>
      </Container>
      <SinglePost></SinglePost>
      <AlsoLikeArticles></AlsoLikeArticles>
      <Comments></Comments>
    </>
  );
}
