import Container from './Container/Container';
import AppBar from './AppBar/AppBar';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage/HomePage';
import SinglePost from '../pages/SinglePostPage/SinglePostPage';
import SinglePostWithSidebar from '../pages/SinglePostWithSidebar/SinglePostWithSidebar';
import RedirectPage from 'pages/RedirectPage/RedirectPage';

export const App = () => {
  return (
    <>
      <Container>
        <AppBar></AppBar>
      </Container>
      <Routes>
        <Route path="/" element={<HomePage></HomePage>}></Route>
        <Route path="/singlepost" element={<SinglePost></SinglePost>}></Route>

        <Route
          path="/lifestile"
          element={<RedirectPage></RedirectPage>}
        ></Route>
        <Route
          path="/photodiary"
          element={<RedirectPage></RedirectPage>}
        ></Route>
        <Route path="/music" element={<RedirectPage></RedirectPage>}></Route>
        <Route
          path="/travel"
          element={<SinglePostWithSidebar></SinglePostWithSidebar>}
        ></Route>
      </Routes>
    </>
  );
};
