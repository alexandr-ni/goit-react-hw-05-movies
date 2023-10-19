import { Loader } from 'components/Loader/Loader';
import { fetchMovieBySearch } from 'components/api';
import { useMovieParams } from 'hooks/useMovieParams';
import { useEffect } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';

const Movies = () => {
  const location = useLocation();

  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query' ?? '');

  const { movies, setMovies, loading, setLoading } = useMovieParams();

  useEffect(() => {
    if (searchParams === '') {
      return;
    }

    async function fetchMovieByInput() {
      try {
        setLoading(true);
        const fetchedMovies = await fetchMovieBySearch(query);

        setMovies(fetchedMovies.results);
      } catch (error) {
        console.log('ERROR');
      } finally {
        setLoading(false);
      }
    }

    fetchMovieByInput();
  }, [setMovies, setLoading, searchParams, query]);

  return (
    <div>
      <hr />
      <form
        onSubmit={evt => {
          evt.preventDefault();
          searchParams.set('query', evt.target.elements.filmInput.value);
          setSearchParams(searchParams);
        }}
      >
        <input type="text" name="filmInput" />
        <button type="submit">Search</button>
      </form>
      {loading && <Loader />}
      {movies.length > 0 && query !== null && (
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
      )}
    </div>
  );
};

export default Movies;
