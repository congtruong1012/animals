import React from "react";
import useAnimals from "../../hooks/useAnimals";
import Animal from "../Animal";
import "../Animal/animal.css";
import Paginations from "../Paginations";
import "./main.css";

function Main(props) {
  const { isLoading, isLoadFirst, page, handleChangePage, animals } =
    useAnimals({});

  return (
    <>
      <div className="main">
        {isLoading && isLoadFirst ? (
          <div className="main__wrapper">
            {[...new Array(8)].map((item, index) => (
              <div className="main__item" key={String(index)}>
                <div className="animal__image skeleton "></div>
                <div
                  className="skeleton skeleton--text animal-skeleton"
                  style={{ "--text": "75%" }}
                ></div>
                <div
                  className="skeleton skeleton--text animal-skeleton"
                  style={{ "--text": "25%" }}
                ></div>
                <div
                  className="skeleton skeleton--text animal-skeleton"
                  style={{ "--text": "80%" }}
                ></div>
                <div
                  className="skeleton skeleton--text animal-skeleton"
                  style={{ "--text": "60%" }}
                ></div>
              </div>
            ))}
          </div>
        ) : (
          <>
            <div className="main__wrapper">
              {animals.length > 0 ? (
                <>
                  {animals?.map((animal) => (
                    <div key={animal?.id} className="main__item">
                      <Animal animal={animal} />
                    </div>
                  ))}
                </>
              ) : (
                <p>No Animals</p>
              )}
            </div>
            {isLoading && !isLoadFirst && (
              <div style={{ margin: "16px 0" }}>
                <div className="linear-progress"></div>
              </div>
            )}
            <Paginations
              currentPage={page?.current_page}
              totalPage={page?.total_pages}
              onChangePage={handleChangePage}
            />
          </>
        )}
      </div>
    </>
  );
}

Main.propTypes = {};

export default Main;
