import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const movies = ['film-1', 'film-2', 'film-3'];

const Movies = () => {
  useEffect(() => {
    // Query
  }, []);

  return (
    <div>
      <ul>
        {movies.map(movie => {
          return (
            <Link key={movie} to={`${movie}`}>
              {movie}
            </Link>
          );
        })}
      </ul>
      {/* <form>
        <input type="text" />
        <button type="submit">Search</button>
      </form>
      <button>Go back</button>
      <h2>Film name</h2>
      <p>User score: %</p> */}
    </div>
  );
};

export default Movies;
