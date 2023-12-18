import Hero from 'components/Hero/Hero';
import MoviesList from 'components/MoviesList/MoviesList';
import { useEffect, useState } from 'react';
import { getTranding } from 'service/getMovies';

const Home = () => {
  const [trendings, setTrendings] = useState([]);

  useEffect(() => {
    getTrandingMovies();
  }, []);

  const getTrandingMovies = async () => {
    try {
      const response = await getTranding();

      setTrendings(response);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <main>
      <Hero />
      <MoviesList movies={trendings} />
    </main>
  );
};

export default Home;
