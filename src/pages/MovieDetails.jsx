import Movie from 'components/Movie/Movie';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieById } from 'service/getMovies';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    if (!movieId) return;
    getSelectedMovie(movieId);
  }, [movieId]);

  const getSelectedMovie = async id => {
    try {
      const response = await getMovieById(id);
      console.log('One movie', response);
      setMovie(response);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <main>
      {movie && <Movie movie={movie} />}
      <p>Additional information</p>
      <ul>
        <li>Cast</li>
        <li>Reviews</li>
      </ul>
    </main>
  );
};

export default MovieDetails;
