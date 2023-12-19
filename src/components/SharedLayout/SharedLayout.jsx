import {
  Header,
  HeaderWrapper,
  Logo,
  NavList,
  PageLink,
  Wrapper,
} from './SharedLayout.styled';
import { Link, Outlet } from 'react-router-dom';

const SharedLayout = () => {
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

      <main>
        <Wrapper>
          <Outlet />
        </Wrapper>
      </main>
    </>
  );
};

export default SharedLayout;
