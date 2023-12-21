import {
  Descr,
  HomeBackLink,
  NotFoundWrapper,
  Title,
} from './PageNotFound.styled';

const PageNotFound = () => {
  return (
    <NotFoundWrapper>
      <Title>Couldn't find?</Title>
      <Descr>
        We were unable to find this page. But there is a lot more interesting
        things on the home page.
      </Descr>
      <HomeBackLink to="/">Home page</HomeBackLink>
    </NotFoundWrapper>
  );
};

export default PageNotFound;
