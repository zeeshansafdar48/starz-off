/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

function PeopleItem({ person }) {
  return (
    <li key={person?.id} className="border border-gray-300 rounded-lg w-80">
      <img
        src={`https://media.themoviedb.org/t/p/w235_and_h235_face${person?.profile_path}`}
        alt={person?.name}
        className="w-full rounded-t-lg"
      />
      <div className="pl-3 mt-1">
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

function PopularPeople() {
  const [people, setPeople] = useState({
    page: 1,
    results: []
  });

  useEffect(() => {
    async function fetchPopularPeople() {
      const API_KEY = process.env.REACT_APP_TMDB_API_KEY;

      console.log("==> ~ fetchPopularPeople ~ API_KEY:", API_KEY);

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
      console.log("==> ~ fetchPopularPeople ~ data:", data);
      setPeople(data);
    }

    fetchPopularPeople();

    return () => {};
  }, [people?.page]);

  return (
    <div>
      <h3>Popular People</h3>
      <ul className="flex flex-wrap gap-5">
        {people?.results?.map((person) => {
          return <PeopleItem person={person} key={person?.id} />;
        })}
      </ul>
      <button
        onClick={() =>
          setPeople((prevState) => {
            return { ...prevState, page: prevState.page + 1 };
          })
        }
      >
        Next Page
      </button>
      <button
        onClick={() =>
          setPeople((prevState) => {
            return { ...prevState, page: prevState.page - 1 };
          })
        }
      >
        Prev Page
      </button>
    </div>
  );
}

export default PopularPeople;
