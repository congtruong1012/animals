import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import "./paginations.css";
function Paginations({ currentPage = 987, totalPage = 1000, onChangePage }) {
  console.log("Paginations  totalPage", totalPage);
  const [page, setPage] = useState(currentPage);

  const getPaginationButtons = () => {
    if (totalPage === 0) return [];
    if (totalPage <= 4) {
      const pages = [...new Array(totalPage)].map((_, index) =>
        (index + 1).toString()
      );
      return pages;
    }

    const pages = [{ number: "1" }];

    if (page >= 4) {
      pages.push({ number: "...", pos: -1 });
    }

    if (page + 1 > totalPage) {
      pages.push({ number: (page - 2).toString() });
    }

    if (page - 1 > 1) {
      pages.push({ number: (page - 1).toString() });
    }

    if (page !== 1) {
      pages.push({ number: page.toString() });
    }

    if (page + 1 <= totalPage) {
      pages.push({ number: (page + 1).toString() });
    }

    if (page - 1 <= 0) {
      pages.push({ number: (page + 2).toString() });
    }

    if (page + 2 < totalPage) {
      pages.push({ number: "...", pos: 1 });
    }

    if (page + 1 < totalPage) {
      pages.push({ number: totalPage.toString() });
    }

    return pages;
  };

  const handleChangePage = (number, pos) => {
    if ([1, -1].includes(pos)) {
      setPage((prev) => prev + pos);
      return;
    }
    onChangePage(number);
  };

  return (
    getPaginationButtons(totalPage).length > 0 && (
      <div className="paginations">
        <button
          onClick={() => handleChangePage(currentPage - 1)}
          className="paginations__item"
          disabled={currentPage === 1}
        >
          <FontAwesomeIcon icon={faAngleLeft} />
        </button>
        {getPaginationButtons().map((page, index) => (
          <button
            key={String(index)}
            onClick={() => handleChangePage(page?.number, page?.pos)}
            className={`paginations__item ${
              page?.number === currentPage.toString()
                ? "paginations__item--active"
                : ""
            }`}
          >
            {page?.number}
          </button>
        ))}
        <button
          className="paginations__item"
          disabled={currentPage === totalPage}
          onClick={() => handleChangePage(currentPage + 1)}
        >
          <FontAwesomeIcon icon={faAngleRight} />
        </button>
      </div>
    )
  );
}

Paginations.propTypes = {};

export default Paginations;
