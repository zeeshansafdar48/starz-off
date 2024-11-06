/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

import PageHeading from "../../components/PageHeading";
import ProgressLoader from "../../components/ProgressLoader";
import { fetchPopularMovies } from "../../services/movies";
import { MOVIES_IMAGE_BASE_URL } from "../../constants";
import { formatDate } from "../../utils/formatDate";
import CircularProgressBar from "./CircularProgressBar";

function PopularMovies() {
  const [isLoading, setIsLoading] = useState(false);
  const [movies, setMovies] = useState({
    page: 1,
    results: [],
    total_pages: 1,
    total_results: 0
  });
  console.log("==> ~ Popular ~ movies:", movies);

  useEffect(() => {
    async function fetchPeople() {
      setIsLoading(true);
      const data = await fetchPopularMovies(movies?.page);
      setMovies(data);
      setIsLoading(false);
    }

    fetchPeople();
  }, [movies?.page]);

  return (
    <div>
      {isLoading && <ProgressLoader />}
      <PageHeading>Popular Movies</PageHeading>
      <ul className="flex flex-wrap gap-9">
        {movies?.results?.map((movie) => {
          return <MovieItem key={movie?.id} movie={movie} />;
        })}
      </ul>
    </div>
  );
}

function MovieItem({ movie }) {
  const ratings = movie?.vote_average * 10;
  return (
    <li key={movie?.id} className="border border-gray-300 rounded-lg w-56">
      <img
        src={`${MOVIES_IMAGE_BASE_URL}${movie.poster_path}`}
        alt={movie?.title}
        className="w-full rounded-t-lg"
      />
      {/* <div className="w-full bg-gray-300 h-1">
        <div
          className={`h-1 bg-gradient-to-r from-tertiary-500 to-secondary-500 text-xs font-sm text-blue-100 text-center leading-none`}
          style={{ width: `${ratings}%` }}
        ></div>
      </div> */}

      <div className="pl-3 pb-4 mt-2 relative">
        <div className="absolute -top-8">
          <CircularProgressBar sqSize={44} strokeWidth={4} percentage={ratings} />
        </div>
        <h4 className="text-zinc-900 font-bold text-md pt-5">{movie?.title}</h4>
        <p className="text-sm text-black/60">{formatDate(movie?.release_date)}</p>
      </div>
    </li>
  );
}

export default PopularMovies;
