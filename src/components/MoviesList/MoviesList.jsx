import { useLocation } from 'react-router-dom';
import defaultPoster from '../../images/default-poster.jpeg';
import { List, Item, MovieLink, MovieTitle } from './MoviesList.styled';

const MoviesList = ({ movies }) => {
  const location = useLocation();

  return (
    <section style={{ padding: '40px 0' }}>
      <List>
        {movies.map(({ id, original_title, poster_path }) => {
          return (
            <Item key={id}>
              <MovieLink to={`/movies/${id}`} state={{ from: location }}>
                <img
                  src={
                    poster_path
                      ? `https://image.tmdb.org/t/p/w500${poster_path}`
                      : defaultPoster
                  }
                  alt={original_title}
                />
                <MovieTitle>{original_title}</MovieTitle>
              </MovieLink>
            </Item>
          );
        })}
      </List>
    </section>
  );
};

export default MoviesList;
