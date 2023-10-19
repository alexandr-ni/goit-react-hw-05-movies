import { fetchMoviesById } from 'components/api';
import { Suspense, useEffect, useRef } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { MovieImage, MovieWrapper } from './MovieDetails.styled';
import { Loader } from 'components/Loader/Loader';
import { useMovieParams } from 'hooks/useMovieParams';

const MovieDetails = () => {
  const location = useLocation();
  const backLinkLocationRef = useRef(location?.state?.from ?? '/movies');

  const { params, movie, setMovie, loading, setLoading } = useMovieParams();

  useEffect(() => {
    async function fetchMovie() {
      try {
        setLoading(true);
        const fetchedMovie = await fetchMoviesById(params.movieId);

        setMovie(fetchedMovie);
      } catch (error) {
        console.log('ERROR');
      } finally {
        setLoading(false);
      }
    }

    fetchMovie();
  }, [setMovie, setLoading, params.movieId]);

  return (
    <div>
      {loading && <Loader />}
      {movie && (
        <div>
          <Link to={backLinkLocationRef.current}>Back to previous page</Link>
          <hr />
          <MovieWrapper>
            <MovieImage
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt="movie-prev"
            />
            <div>
              <h2>{movie.title}</h2>
              <p>User Score: {movie.vote_average}</p>
              <h3>Overview</h3>
              <p>{movie.overview}</p>
              <h4>Genres</h4>
              <ul>
                {movie.genres.map(genre => {
                  return <li key={genre.id}>{genre.name}</li>;
                })}
              </ul>
            </div>
          </MovieWrapper>
          <hr />
          <p>Additional information</p>
          <ul>
            <li>
              <Link to="cast">Cast</Link>
            </li>
            <li>
              <Link to="reviews">Reviews</Link>
            </li>
          </ul>
          <hr />
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
        </div>
      )}
    </div>
  );
};

export default MovieDetails;
