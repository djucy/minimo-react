import Container from 'components/Container/Container';
// import AppBar from 'components/AppBar/AppBar';
import Hero from 'components/Hero/Hero';
import Articles from 'components/Articles/Articles';
// import SignupForm from 'components/SignupForm/SignupForm';

export default function HomePage() {
  return (
    <>
      <Container>
        {/* <AppBar></AppBar> */}
        <Hero></Hero>{' '}
      </Container>
      <Articles></Articles>
    </>
  );
}
