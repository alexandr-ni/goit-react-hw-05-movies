import axios from 'axios';

const url = 'https://api.themoviedb.org/3/trending/movie/day?language=en-US';
const options = {
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZWYwNzZkYzkxYmE1ZGM1YzNhNzg0ZmEyZjhkYjJmOCIsInN1YiI6IjY1MmU1MzcyZWE4NGM3MDBlYmEzNDk3NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.eb5AtnB5In8Rid9oVZN6shMyC5JnuDma5srOC9ipFqk',
  },
};

export const fetchMovies = async () => {
  const resp = await axios.get(url, options);

  return resp.data;
};

export const fetchMoviesById = async movieId => {
  const newUrl = `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`;
  const resp = await axios.get(newUrl, options);

  return resp.data;
};

export const fetchMovieCredits = async movieId => {
  const newUrl = `https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US`;
  const resp = await axios.get(newUrl, options);

  return resp.data;
};

export const fetchMovieReviews = async movieId => {
  const newUrl = `https://api.themoviedb.org/3/movie/${movieId}/reviews?language=en-US&page=1`;
  const resp = await axios.get(newUrl, options);

  return resp.data;
};

export const fetchMovieBySearch = async searchMovieByInput => {
  const newUrl = `https://api.themoviedb.org/3/search/movie?query=${searchMovieByInput}&include_adult=false&language=en-US&page=1`;
  const resp = await axios.get(newUrl, options);

  return resp.data;
};
