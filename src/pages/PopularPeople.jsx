/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { fetchPopularPeople } from "../services/people";
import { IMAGE_BASE_URL } from "../constants";
import Pagination from "../components/Pagination";

function PopularPeople() {
  const [people, setPeople] = useState({
    page: 1,
    results: [],
    total_pages: 1,
    total_results: 0
  });

  useEffect(() => {
    async function fetchPeople() {
      const data = await fetchPopularPeople(people?.page);
      setPeople(data);
    }

    fetchPeople();
  }, [people?.page]);

  function setPage(pageNumber = 1, isPrevPage = false) {
    setPeople((prevState) => {
      return { ...prevState, page: isPrevPage ? prevState.page + pageNumber : pageNumber };
    });
  }

  return (
    <div>
      <h3 className="text-3xl my-8">Popular People</h3>
      <ul className="flex flex-wrap gap-5">
        {people?.results?.map((person) => {
          return <PeopleItem person={person} key={person?.id} />;
        })}
      </ul>
      <Pagination currentPage={people?.page} setPage={setPage} />
    </div>
  );
}

function PeopleItem({ person }) {
  return (
    <li key={person?.id} className="border border-gray-300 rounded-lg w-80">
      <img
        src={`${IMAGE_BASE_URL}${person?.profile_path}`}
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

export default PopularPeople;
