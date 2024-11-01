/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import Button from "./Button";

const PAGINATION_LAST_NUMBER = 500;

function Pagination({ currentPage, setPage }) {
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
      <Button onClick={() => setPage(-1, true)} disabled={currentPage === 1}>
        Prev Page
      </Button>

      <p className="text-sm">
        <PaginationNumber number={1} setPage={setPage} currentPage={currentPage} />
        {currentPage <= 2 && (
          <PaginationNumber number={2} setPage={setPage} currentPage={currentPage} />
        )}
        {currentPage > 2 ? "..." : ""}
        {currentPage >= 2 &&
          inBetweenNumber?.map((num) => {
            return (
              <PaginationNumber
                number={num}
                setPage={setPage}
                currentPage={currentPage}
                key={num}
              />
            );
          })}
        {currentPage <= PAGINATION_LAST_NUMBER - 3 ? "..." : ""}
        <PaginationNumber
          number={PAGINATION_LAST_NUMBER}
          setPage={setPage}
          currentPage={currentPage}
        />
      </p>

      <Button onClick={() => setPage(1, true)} disabled={currentPage === PAGINATION_LAST_NUMBER}>
        Next Page
      </Button>
    </div>
  );
}

function PaginationNumber({ number, setPage, currentPage }) {
  return (
    <span
      onClick={() => setPage(number)}
      className={`mx-1 hover:cursor-pointer hover:bg-secondary-100 py-1 px-2 rounded-full ${
        currentPage === number ? "bg-secondary-300" : ""
      }`}
    >
      {number}
    </span>
  );
}

export default Pagination;
