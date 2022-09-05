import Container from 'components/Container/Container';
import HeroImage from 'components/SinglePost/HeroImage/HeroImage';
import SinglePost from 'components/SinglePost/SinglePost';
import AlsoLikeArticles from 'components/AlsoLikeArticles/AlsoLikeArticles';
import Comments from 'components/Comments/Comments';
import SideBarContainer from 'components/SideBarContainer/SideBarContainer';
import SideBar from 'components/SideBar/SideBar';
import Footer from 'components/Footer/Footer';
export default function SinglePostPage() {
  return (
    <>
      <Container>
        <HeroImage></HeroImage>
      </Container>
      <SideBarContainer>
        <SinglePost></SinglePost>
        <SideBar></SideBar>
      </SideBarContainer>
      <AlsoLikeArticles></AlsoLikeArticles>
      <Comments></Comments>
      <Footer></Footer>
    </>
  );
}
