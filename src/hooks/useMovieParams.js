import { useState } from 'react';
import { useParams } from 'react-router-dom';

export const useMovieParams = () => {
  const params = useParams();
  const [movies, setMovies] = useState([]);
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(false);
  const [cast, setCast] = useState(null);
  const [reviews, setReviews] = useState([]);

  return {
    params,
    movies,
    setMovies,
    movie,
    setMovie,
    loading,
    setLoading,
    cast,
    setCast,
    reviews,
    setReviews,
  };
};
