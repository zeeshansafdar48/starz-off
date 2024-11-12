/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

import PageHeading from "../../components/PageHeading";
import ProgressLoader from "../../components/ProgressLoader";
import { fetchPopularMovies } from "../../services/movies";
import { MOVIES_IMAGE_BASE_URL } from "../../constants";
import { formatDate } from "../../utils/formatDate";
import CircularProgressBar from "./CircularProgressBar";

let isDataFetchedOnInitialLoad = false;

function PopularMovies() {
  const [isLoading, setIsLoading] = useState(false);
  const [movies, setMovies] = useState({
    page: 0,
    results: [],
    total_pages: 1,
    total_results: 0
  });

  useEffect(() => {
    async function fetchPeople() {
      setIsLoading(true);
      try {
        const data = await fetchPopularMovies(movies?.page || 1);

        if (data.results) {
          setMovies((prevState) => {
            const mergeResults = [...prevState.results, ...data.results];
            const uniqueResults = Array.from(
              new Map(mergeResults.map((item) => [item.id, item])).values()
            );

            return {
              page: data.page,
              results: uniqueResults,
              total_pages: data.total_pages,
              total_results: data.total_results
            };
          });
          setIsLoading(false);
          isDataFetchedOnInitialLoad = true;
        }
      } catch (error) {
        console.log("==> ~ fetchPeople ~ error:", error);
      }
    }

    if (isDataFetchedOnInitialLoad && movies?.page === 1) return;

    fetchPeople();
  }, [movies?.page]);

  async function handleLoadMore() {
    setMovies((prevState) => {
      return {
        ...prevState,
        page: prevState.page + 1
      };
    });
  }

  return (
    <div>
      {isLoading && <ProgressLoader />}
      <PageHeading>Popular Movies</PageHeading>
      <InfiniteScroll
        dataLength={movies?.results.length}
        next={handleLoadMore}
        hasMore={movies?.page < 500}
      >
        <ul className="flex flex-wrap gap-9 mb-10">
          {movies?.results?.map((movie) => {
            return <MovieItem key={movie?.id} movie={movie} />;
          })}
        </ul>
      </InfiniteScroll>
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
