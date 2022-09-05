import Container from './Container/Container';
import AppBar from './AppBar/AppBar';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage/HomePage';
import SinglePost from '../pages/SinglePostPage/SinglePostPage';
import SinglePostWithSidebar from '../pages/SinglePostWithSidebar/SinglePostWithSidebar';

export const App = () => {
  return (
    <>
      <Container>
        <AppBar></AppBar>
      </Container>
      <Routes>
        <Route path="/" element={<HomePage></HomePage>}></Route>
        <Route path="/singlepost" element={<SinglePost></SinglePost>}></Route>

        <Route path="/lifestile"></Route>
        <Route path="/photodiary"></Route>
        <Route path="/music"></Route>
        <Route
          path="/travel"
          element={<SinglePostWithSidebar></SinglePostWithSidebar>}
        ></Route>
      </Routes>
    </>
  );
};
