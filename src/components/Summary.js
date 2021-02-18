import React, { useState, useEffect } from "react";
import PropTypes from 'prop-types';
import Chart from './Chart';
import RunApiService from '../services/run-api-service';
import runFrequency from '../Utils/run-frequency';
import SummaryEntry from "./SummaryEntry";
import SummaryFilters from "./SummaryFilters";
import "./Summary.css";

function Summary({
  props: { allRuns, prs, allRunsCopy, setAllRunsCopy, setAllRuns, setCurrentRun },
}) {

  const [chartData, setChartData] = useState(null);

  /* Get run entries when the component mounts */
  useEffect(() => {
    RunApiService.getRuns()
      .then((runs) => {
        setAllRuns(runs);
        setAllRunsCopy(runs);
        if (allRunsCopy) {
          return allRunsCopy;
        }
      })
      .then(data => {
        setChartData(runFrequency.addRunOccurrences(data))
      })
  }, []);

  // useEffect(() => {
  //   if (allRunsCopy) {
  //     setChartData(runFrequency.addRunOccurrences(allRunsCopy))
  //   }
  // }, [allRunsCopy])

  const loggedRuns = allRuns.map((run, key) => {
    return (
      <section key={key}>
        <SummaryEntry props={{ allRunsCopy, run, setAllRuns, setAllRunsCopy, setCurrentRun }} />
      </section>
    );
  });

  const handleFilter = (e, data) => {
    e.preventDefault();
    let result = allRunsCopy;
    for (let [key, value] of Object.entries(data)) {
      if ((key === 'public' && value) || value.length > 0) {
        if (key === 'location') {
          result = result.filter((run) => run.location.includes(value.trim()));
        }
        else {
          result = result.filter((run) => {
            return run[key] === value
          });
        }
      }
    }
    setAllRuns(result);
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
        {chartData 
        ? <Chart props={{chartData}} />
        : <p>Loading chart...</p>}
        {/* <Chart props={{runFrequency}}/> */}

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
        <SummaryFilters props={{ handleFilter }} />

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
    setAllRunsCopy: () => {},
    setCurrentRun: () => {},
  },
};

Summary.propTypes = {
  props: PropTypes.shape({
    allRuns: PropTypes.array.isRequired,
    allRunsCopy:PropTypes.array.isRequired,
    prs:PropTypes.object.isRequired,
    setAllRuns:PropTypes.func.isRequired,
    setCurrentRun:PropTypes.func.isRequired,
  })
}

export default Summary;
