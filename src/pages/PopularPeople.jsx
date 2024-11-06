/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { fetchPopularPeople } from "../services/people";
import { IMAGE_BASE_URL } from "../constants";
import Pagination from "../components/Pagination";
import ProgressLoader from "../components/ProgressLoader";
import defaultPerson from "../assets/images/default_people.svg";
import ShimmerPeopleItem from "../components/ShimmerPeopleItem";
import PageHeading from "../components/PageHeading";

function PopularPeople() {
  const [people, setPeople] = useState({
    page: 1,
    results: [],
    total_pages: 1,
    total_results: 0
  });
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchPeople() {
      setIsLoading(true);
      const data = await fetchPopularPeople(people?.page);
      setPeople(data);
      setIsLoading(false);
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
      {isLoading && <ProgressLoader />}
      <PageHeading>Popular People</PageHeading>
      <ul className="flex flex-wrap gap-5">
        {isLoading
          ? Array.from({ length: 20 }).map((_, idx) => <ShimmerPeopleItem key={idx} />)
          : people?.results?.map((person) => {
              return <PeopleItem person={person} key={person?.id} />;
            })}
      </ul>
      <Pagination currentPage={people?.page} setPage={setPage} />
    </div>
  );
}

function PeopleItem({ person }) {
  const imagePath = person?.profile_path
    ? `${IMAGE_BASE_URL}${person?.profile_path}`
    : defaultPerson;

  return (
    <li key={person?.id} className="border border-gray-300 rounded-lg w-80">
      <img src={imagePath} alt={person?.name} className="w-full rounded-t-lg" />
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
