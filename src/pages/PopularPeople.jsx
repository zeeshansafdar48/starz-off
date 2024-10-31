/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

const PAGINATION_LAST_NUMBER = 500;

function PopularPeople() {
  const [people, setPeople] = useState({
    page: 1,
    results: [],
    total_pages: 1,
    total_results: 0
  });

  useEffect(() => {
    async function fetchPopularPeople() {
      const API_KEY = process.env.REACT_APP_TMDB_API_KEY;

      const url = `https://api.themoviedb.org/3/person/popular?language=en-US&page=${people?.page}`;
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${API_KEY}`
        }
      };

      const result = await fetch(url, options);
      const data = await result.json();
      setPeople(data);
    }

    fetchPopularPeople();

    return () => {};
  }, [people?.page]);

  return (
    <div>
      <h3 className="text-3xl my-8">Popular People</h3>
      <ul className="flex flex-wrap gap-5">
        {people?.results?.map((person) => {
          return <PeopleItem person={person} key={person?.id} />;
        })}
      </ul>
      <Pagination currentPage={people?.page} setPeople={setPeople} />
    </div>
  );
}

function PeopleItem({ person }) {
  return (
    <li key={person?.id} className="border border-gray-300 rounded-lg w-80">
      <img
        src={`https://media.themoviedb.org/t/p/w235_and_h235_face${person?.profile_path}`}
        alt={person?.name}
        className="w-full rounded-t-lg"
      />
      <div className="pl-3 pb-2 mt-1">
        <h4 className="text-zinc-900 font-bold text-lg">{person?.name}</h4>
        <p className="text-sm text-black/60">
          {person?.known_for?.reduce((finalName, currentObj) => {
            const comma = finalName === "" ? "" : ",";
            return `${finalName}${comma} ${currentObj?.title || currentObj?.name}`;
          }, "")}
        </p>
      </div>
    </li>
  );
}

function Pagination({ currentPage, setPeople }) {
  const [inBetweenNumber, setInBetweenNumber] = useState([]);

  useEffect(() => {
    if (currentPage === 2) {
      setInBetweenNumber([currentPage + 1, currentPage + 2]);
    } else if (currentPage >= 3 && currentPage <= PAGINATION_LAST_NUMBER - 3) {
      setInBetweenNumber([currentPage - 1, currentPage, currentPage + 1, currentPage + 2]);
    } else if (currentPage === PAGINATION_LAST_NUMBER) {
      setInBetweenNumber([currentPage - 3, currentPage - 2, currentPage - 1]);
    }
  }, [currentPage]);

  return (
    <div className="my-10 flex gap-4 justify-center items-center">
      <button
        onClick={() =>
          setPeople((prevState) => {
            return { ...prevState, page: prevState.page - 1 };
          })
        }
        disabled={currentPage === 1}
        className="px-4 py-2 rounded-full text-white bg-secondary-500 hover:bg-secondary-700 hover:cursor-pointer disabled:cursor-not-allowed"
      >
        Prev Page
      </button>

      <p className="text-sm">
        <PaginationNumber number={1} setPeople={setPeople} currentPage={currentPage} />
        {currentPage <= 2 && (
          <PaginationNumber number={2} setPeople={setPeople} currentPage={currentPage} />
        )}
        {currentPage > 2 ? "..." : ""}
        {currentPage >= 2 &&
          inBetweenNumber?.map((num) => {
            return (
              <PaginationNumber
                number={num}
                setPeople={setPeople}
                currentPage={currentPage}
                key={num}
              />
            );
          })}
        {currentPage <= PAGINATION_LAST_NUMBER - 3 ? "..." : ""}
        <PaginationNumber
          number={PAGINATION_LAST_NUMBER}
          setPeople={setPeople}
          currentPage={currentPage}
        />
      </p>

      <button
        onClick={() =>
          setPeople((prevState) => {
            return { ...prevState, page: prevState.page + 1 };
          })
        }
        disabled={currentPage === PAGINATION_LAST_NUMBER}
        className="px-4 py-2 rounded-full text-white bg-secondary-500 hover:bg-secondary-700 hover:cursor-pointer disabled:cursor-not-allowed"
      >
        Next Page
      </button>
    </div>
  );
}

function PaginationNumber({ number, setPeople, currentPage }) {
  return (
    <span
      onClick={() =>
        setPeople((prevState) => {
          return { ...prevState, page: number };
        })
      }
      className={`mx-1 hover:cursor-pointer hover:bg-secondary-100 py-1 px-2 rounded-full ${
        currentPage === number ? "bg-secondary-300" : ""
      }`}
    >
      {number}
    </span>
  );
}

export default PopularPeople;
