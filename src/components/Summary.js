import React from "react";
import SummaryEntry from "./SummaryEntry";
import SummaryFilters from "./SummaryFilters";
import "./Summary.css";

function Summary({
  props: {
    allRuns,
    prs,
    allRunsCopy,
    setAllRuns,
    setCurrentRun,
  },
}) {
  const loggedRuns = allRuns.map((run, key) => {
    return (
      <section key={key}>
        <SummaryEntry props={{ allRuns, run, setAllRuns, setCurrentRun }} />
      </section>
    );
  });

  const handleSearch = (e, value) => {
    e.preventDefault();
    const trimmedVal = value.trim();
    const result =
      trimmedVal === ""
        ? allRunsCopy
        : allRuns.filter((run) => run.location.includes(trimmedVal));
    setAllRuns(result);
  };

  const handleFilter = (e, data) => {
    e.preventDefault();

  };

  return (
    <>
      <header role='banner'>
        <h1>Summary</h1>
      </header>

      <section className='summary-stats'>
        <header>
          <h2>Stats</h2>
        </header>

        <h3>Run Frequency</h3>
        <img
          src='https://placehold.it/600x300?text=line%20graph%20run%20frequency'
          alt='chart showing run frequency'
        />

        <h3>Badges</h3>
        <div className='summary-stats__badges'>
          <img
            src='https://placehold.it/25x25?text=Badge'
            alt='jogger'
            title='jogger'
          />
          <img
            src='https://placehold.it/25x25?text=Badge'
            alt='runner'
            title='runner'
          />
        </div>
        <div className='summary-stats__pr'>
          <h3>Personal Records</h3>
          <ul>
            <li>
              <strong>5k:</strong> {prs["5k"]}
            </li>
            <li>
              <strong>10k:</strong> {prs["10k"]}
            </li>
            <li>
              <strong>15k:</strong> {prs["15k"]}
            </li>
            <li>
              <strong>25k:</strong> {prs["25k"]}
            </li>
            <li>
              <strong>30k:</strong> {prs["30k"]}
            </li>
            <li>
              <strong>half-marathon:</strong> {prs["half-marathon"]}
            </li>
            <li>
              <strong>marathon:</strong> {prs["marathon"]}
            </li>
          </ul>
        </div>
      </section>

      <section className='summary-entries'>
        <h2>Runs</h2>
        <SummaryFilters props={{ handleFilter, handleSearch }} />

        {loggedRuns}
      </section>
    </>
  );
}

Summary.defaultProps = {
  props: {
    allRuns: [],
    allRunsCopy: [],
    prs: {
      "5k": "00:19:30",
      "10k": "00:49:00",
      "15k": "00:55:30",
      "25k": "01:40:30",
      "30k": "02:19:30",
      "half-marathon": "01:49:30",
      marathon: "03:40:30",
    },
    setAllRuns: () => {},
    setCurrentRun: () => {},
  },
};

export default Summary;
