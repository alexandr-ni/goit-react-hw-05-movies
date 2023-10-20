import { Loader } from 'components/Loader/Loader';
import { fetchMovieBySearch } from 'components/api';
import { useMovieParams } from 'hooks/useMovieParams';
import { useEffect, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';

const Movies = () => {
  const location = useLocation();

  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query' ?? '');

  const { movies, setMovies, loading, setLoading } = useMovieParams();
  const [movieInput, setMovieInput] = useState('');

  useEffect(() => {
    if (searchParams === '') {
      return;
    }

    async function fetchMovieByInput() {
      try {
        setLoading(true);
        const fetchedMovies = await fetchMovieBySearch(query);

        setMovieInput(query);
        setMovies(fetchedMovies.results);
      } catch (error) {
        console.log('ERROR');
      } finally {
        setLoading(false);
      }
    }

    fetchMovieByInput();
  }, [setMovies, setLoading, searchParams, query]);

  const changeInput = evt => {
    setMovieInput(evt.target.value);
  };

  return (
    <div>
      <hr />
      <form
        onSubmit={evt => {
          evt.preventDefault();
          searchParams.set('query', movieInput);
          setSearchParams(searchParams);
        }}
      >
        <input
          type="text"
          onChange={changeInput}
          value={movieInput ? movieInput : ''}
        />
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
