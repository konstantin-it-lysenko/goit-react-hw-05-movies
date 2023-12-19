import {
  Adult,
  BackgroundWrapper,
  Genres,
  MovieInfo,
  Overview,
  TimeAgeInfo,
  Title,
} from './Movie.styled';
import defaultPoster from '../../images/default-poster.jpeg';

const Movie = ({
  movie: {
    adult,
    backdrop_path,
    genres,
    original_title,
    overview,
    poster_path,
    runtime,
  },
}) => {
  const posterUrl = `https://image.tmdb.org/t/p/w300${poster_path}`;
  const posterSrc = poster_path ? posterUrl : defaultPoster;

  const backgroundUrl = `https://image.tmdb.org/t/p/w500${backdrop_path}`;
  const backgroundSrc = backdrop_path ? backgroundUrl : defaultPoster;

  return (
    <section>
      <BackgroundWrapper background={backgroundSrc}>
        <MovieInfo>
          <Title>{original_title}</Title>
          <TimeAgeInfo>
            <span>{runtime} minutes</span>
            <Adult>{adult === true ? '21+' : 'For kids'}</Adult>
          </TimeAgeInfo>
          <Overview>{overview}</Overview>
          <Genres>
            Genres:
            {genres.map(({ id, name }) => {
              return <span key={id}>{name}</span>;
            })}
          </Genres>
        </MovieInfo>
        <img src={posterSrc} alt={original_title} />
      </BackgroundWrapper>
    </section>
  );
};

export default Movie;
