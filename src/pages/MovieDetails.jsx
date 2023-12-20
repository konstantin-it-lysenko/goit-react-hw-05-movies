import { CastReviewLink, CastReviewsList } from 'components/App/App.styled';
import Movie from 'components/Movie/Movie';
import { Suspense, useEffect, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { getMovieById } from 'service/getMovies';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  const location = useLocation();

  useEffect(() => {
    if (!movieId) return;
    getSelectedMovie(movieId);
  }, [movieId]);

  const getSelectedMovie = async id => {
    try {
      const response = await getMovieById(id);

      setMovie(response);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <Link to={location.state?.from ?? '/'}>Back to movies</Link>
      {movie && <Movie movie={movie} />}

      <CastReviewsList>
        <li>
          <CastReviewLink to="credits">CAST</CastReviewLink>
        </li>
        <li>
          <CastReviewLink to="reviews">REVIEWS</CastReviewLink>
        </li>
      </CastReviewsList>

      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetails;
