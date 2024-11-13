// eslint-disable-next-line no-undef
const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";
const GET_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${API_KEY}`
  }
};

const IMAGE_BASE_URL = "https://media.themoviedb.org/t/p/w235_and_h235_face";
const MOVIES_IMAGE_BASE_URL = "https://media.themoviedb.org/t/p/w220_and_h330_face";

const BUTTON_TYPES = {
  DEFAULT: "default",
  GRADIENT: "gradient"
};

export { API_KEY, BASE_URL, GET_OPTIONS, IMAGE_BASE_URL, MOVIES_IMAGE_BASE_URL, BUTTON_TYPES };
