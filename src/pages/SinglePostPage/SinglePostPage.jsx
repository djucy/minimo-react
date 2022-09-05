// import { images } from 'images';
import Container from 'components/Container/Container';
import HeroImage from 'components/SinglePost/HeroImage/HeroImage';
import SinglePost from 'components/SinglePost/SinglePost';
import SinglePostContainer from 'components/SinglePostContainer/SinglePostContainer';
import AlsoLikeArticles from 'components/AlsoLikeArticles/AlsoLikeArticles';
import Comments from 'components/Comments/Comments';
import Footer from 'components/Footer/Footer';
export default function SinglePostPage() {
  return (
    <>
      <Container>
        <HeroImage></HeroImage>
      </Container>
      <SinglePostContainer>
        <SinglePost></SinglePost>
      </SinglePostContainer>
      <AlsoLikeArticles></AlsoLikeArticles>
      <Comments></Comments>
      <Footer></Footer>
    </>
  );
}
