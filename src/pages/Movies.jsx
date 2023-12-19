import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import SearchForm from 'components/SearchForm/SearchForm';
import MoviesList from 'components/MoviesList/MoviesList';
import { getMoviesBySearch } from 'service/getMovies';
// import { Link } from 'react-router-dom';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [curPage, setPage] = useState(1);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');
  console.log(query);

  useEffect(() => {
    if (!query) return;

    getMovies(query, curPage);
  }, [query, curPage]);

  const getMovies = async (query, curPage) => {
    try {
      // TODO Pagination
      const { /* page */, results, /* total_pages */ } = await getMoviesBySearch(
        query,
        curPage
      );

      setMovies(results);
    } catch (err) {
      console.error(err);
    }
  };

  const handleSubmit = value => {
    setPage(1);
    setSearchParams({ query: value, page: curPage });
  };

  return (
    <>
      <SearchForm onSubmit={handleSubmit} />
      {movies.length > 0 && <MoviesList movies={movies} />}
    </>
  );
};

export default Movies;
