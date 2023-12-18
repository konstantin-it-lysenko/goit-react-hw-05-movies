import MoviesList from 'components/MoviesList/MoviesList';
import { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';

const Movies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // Query
    setMovies([]);
  }, []);

  return (
    <div>
      <form>
        <input type="text" />
        <button type="submit">Search</button>
      </form>
      {movies.length > 0 && <MoviesList movies={movies} />}
    </div>
  );
};

export default Movies;
