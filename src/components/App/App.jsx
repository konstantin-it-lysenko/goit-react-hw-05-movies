import Home from 'pages/Home';
import MovieDetails from 'pages/MovieDetails';
import Movies from 'pages/Movies';
import { Link, Route, Routes } from 'react-router-dom';

import {
  Wrapper,
  Header,
  Logo,
  NavList,
  PageLink,
  HeaderWrapper,
} from './App.styled';

export const App = () => {
  return (
    <>
      <Header>
        <Wrapper>
          <HeaderWrapper>
            <div>
              <Logo>
                <Link to={'/'}>LOGOFLIX</Link>
              </Logo>
            </div>
            <nav>
              <NavList>
                <li>
                  <PageLink to="/">HOME</PageLink>
                </li>
                <li>
                  <PageLink to="/movies">MOVIES</PageLink>
                </li>
              </NavList>
            </nav>
          </HeaderWrapper>
        </Wrapper>
      </Header>
      <Wrapper>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />} />
          {/* <Route path="/movies/:movieId/cast" element={<div>Cast</div>} /> */}
          <Route
            path="/movies/:movieId/reviews "
            element={<div>Reviews</div>}
          />
        </Routes>
      </Wrapper>
    </>
  );
};
