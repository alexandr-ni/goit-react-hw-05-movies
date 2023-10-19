import { useEffect } from 'react';
import { CharacterImg } from './Cast.styled';
import { Loader } from 'components/Loader/Loader';
import { useMovieParams } from 'hooks/useMovieParams';

const { fetchMovieCredits } = require('components/api');

const Cast = () => {
  const { params, cast, setCast, loading, setLoading } = useMovieParams();

  useEffect(() => {
    async function fetchMovie() {
      try {
        setLoading(true);
        const fetchedCredits = await fetchMovieCredits(params.movieId);

        setCast(fetchedCredits.cast);
      } catch (error) {
        console.log('ERROR');
      } finally {
        setLoading(false);
      }
    }

    fetchMovie();
  }, [setCast, setLoading, params.movieId]);

  return (
    <div>
      {loading && <Loader />}
      {cast && (
        <ul>
          {cast.map(r => (
            <li key={r.id}>
              {r.profile_path && (
                <CharacterImg
                  src={`https://image.tmdb.org/t/p/w500/${r.profile_path}`}
                  alt="cast"
                />
              )}
              <p>{r.name}</p>
              <p>Character: {r.character}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cast;