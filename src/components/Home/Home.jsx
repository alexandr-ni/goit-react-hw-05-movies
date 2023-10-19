import { useEffect } from 'react';
import { fetchMovies } from 'components/api';
import { Link, useLocation } from 'react-router-dom';
import { Loader } from 'components/Loader/Loader';
import { useMovieParams } from 'hooks/useMovieParams';

const Home = () => {
  const location = useLocation();
  const { movies, setMovies, loading, setLoading } = useMovieParams();

  useEffect(() => {
    async function getMovies() {
      try {
        setLoading(true);
        const movies = await fetchMovies();

        setMovies(movies.results);
      } catch (error) {
        console.log('ERROR');
      } finally {
        setLoading(false);
      }
    }

    getMovies();
  }, [setMovies, setLoading]);

  return (
    <div>
      <hr />
      <h2>Trending today</h2>
      {loading && <Loader />}
      <ul>
        {movies.map(item => {
          return (
            <li key={item.id}>
              <Link to={`/movies/${item.id}`} state={{ from: location }}>
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Home;
