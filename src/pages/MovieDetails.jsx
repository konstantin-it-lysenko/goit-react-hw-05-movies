import { CastReviewLink, CastReviewsList } from 'components/App/App.styled';
import Movie from 'components/Movie/Movie';
import { Suspense, useEffect, useRef, useState } from 'react';
import {
  Link,
  Outlet,
  useLocation,
  useNavigate,
  useParams,
} from 'react-router-dom';
import { getMovieById } from 'service/getMovies';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  const navigate = useNavigate();
  const location = useLocation();
  const backLinkRef = useRef(location.state?.from ?? '/');

  useEffect(() => {
    if (!movieId) return;
    getSelectedMovie();
  });

  const getSelectedMovie = async () => {
    try {
      const response = await getMovieById(movieId);

      setMovie(response);
    } catch (err) {
      console.error(err);
      navigate('/');
    }
  };

  return (
    <>
      <Link to={backLinkRef.current}>Back to movies</Link>
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
