import { GET_OPTIONS, BASE_URL } from "../constants";

async function fetchPopularMovies(page) {
  const url = `${BASE_URL}/movie/popular?language=en-US&page=${page}`;

  const result = await fetch(url, GET_OPTIONS);
  const data = await result.json();
  return data;
}

export { fetchPopularMovies };