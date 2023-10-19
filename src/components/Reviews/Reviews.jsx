import { Loader } from 'components/Loader/Loader';
import { fetchMovieReviews } from 'components/api';
import { useMovieParams } from 'hooks/useMovieParams';
import { useEffect } from 'react';

const Reviews = () => {
  const { params, reviews, setReviews, loading, setLoading } = useMovieParams();

  useEffect(() => {
    async function fetchMovie() {
      try {
        setLoading(true);
        const fetchedCredits = await fetchMovieReviews(params.movieId);
        setReviews(fetchedCredits.results);
      } catch (error) {
        console.log('ERROR');
      } finally {
        setLoading(false);
      }
    }

    fetchMovie();
  }, [setReviews, setLoading, params.movieId]);

  return (
    <div>
      {loading && <Loader />}
      {reviews.length > 0 ? (
        <ul>
          {reviews.map(r => {
            return (
              <li key={r.id}>
                <p>{r.author}</p>
                <p>{r.content}</p>
              </li>
            );
          })}
        </ul>
      ) : (
        <p>We don't have any reviews for this movie.</p>
      )}
    </div>
  );
};

export default Reviews;
