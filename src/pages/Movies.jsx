import { useEffect, useMemo, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import SearchForm from 'components/SearchForm/SearchForm';
import MoviesList from 'components/MoviesList/MoviesList';
import { getMoviesBySearch } from 'service/getMovies';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [curPage, setPage] = useState(1);

  const location = useLocation();

  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  useEffect(() => {
    if (!query) return;

    getMovies(query, curPage);
  }, [query, curPage]);

  const getMovies = async (query, curPage) => {
    try {
      // TODO Pagination
      const { /* page */ results /* total_pages */ } = await getMoviesBySearch(
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
    if (value === '') return setSearchParams({});
    setSearchParams({ query: value.toLocaleLowerCase(), page: curPage });
  };

  const filteredMovies = useMemo(() => {
    return movies.filter(movie => {
      return movie.title.toLowerCase().includes(query);
    });
  }, [movies, query]);

  return (
    <>
      <SearchForm onSubmit={handleSubmit} />
      {movies.length > 0 && (
        <MoviesList movies={filteredMovies} location={location} />
      )}
    </>
  );
};

export default Movies;
