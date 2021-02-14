import React from "react";
import LBoard from "./LBoard";
import PropTypes from "prop-types";
import "./Leaderboards.css";

function Leaderboards({ props: {leaderboards} }) {
  const boards = leaderboards.map((board, key) => {
    return (
      <section key={key}>
        <LBoard props={board} />
      </section>
    );
  });

  return (
    <>
      <header role='banner'>
        <h1>Leaderboards</h1>
      </header>

      <section className='leaderboards'>{boards}</section>
    </>
  );
}

Leaderboards.defaultProps = {
  props: {
    leaderboards: [
      {
        distance: "5k",
        competitors: {
          first: {
            name: "Brad",
            time: "00:17:30",
            date: "2021-02-02",
          },
          second: {
            name: "RunReg",
            time: "00:18:00",
            date: "2021-02-02",
          },
          third: {
            name: "Jake",
            time: "00:18:30",
            date: "2021-02-02",
          },
          fourth: {
            name: "Max",
            time: "00:18:35",
            date: "2021-02-02",
          },
          fifth: {
            name: "Christine",
            time: "00:18:56",
            date: "2021-02-02",
          },
        },
      },
    ],
  },
};

Leaderboards.propTypes = {
  props: PropTypes.shape({
    leaderboards: PropTypes.array.isRequired,
  }),
};
export default Leaderboards;
