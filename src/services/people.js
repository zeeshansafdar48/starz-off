import { GET_OPTIONS, BASE_URL } from "../constants";

async function fetchPopularPeople(page) {
  const url = `${BASE_URL}/person/popular?language=en-US&page=${page}`;

  const result = await fetch(url, GET_OPTIONS);
  const data = await result.json();
  return data;
}

export { fetchPopularPeople };
