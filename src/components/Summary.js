import React, { useState, useEffect } from "react";
import PropTypes from 'prop-types';
import Chart from './Chart';
import RunApiService from '../services/run-api-service';
import runFrequency from '../Utils/run-frequency';
import SummaryEntry from "./SummaryEntry";
import SummaryFilters from "./SummaryFilters";
import "./Summary.css";

function Summary({
  props: { allRuns, allRunsCopy, setAllRunsCopy, setAllRuns, setCurrentRun },
}) {

  const [chartData, setChartData] = useState(null);

  /* Get run entries when the component mounts */
  useEffect(() => {
    RunApiService.getRuns()
      .then((runs) => {
        setAllRuns(runs);
        setAllRunsCopy(runs);
      })
  }, []);

  useEffect(() => {
    if (allRunsCopy.length > 0) {
      setChartData(runFrequency.addRunOccurrences(allRunsCopy))
    }
  }, [allRunsCopy])

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
          <h2>Your runs over time</h2>
        </header>

        {chartData 
        ? <Chart props={{chartData}} />
        : <p>Loading chart...</p>}
      </section>

      <section style={{marginTop: "3em"}} className='summary-entries'>
        <h2>Run entries</h2>
        
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
    setAllRuns: () => {},
    setAllRunsCopy: () => {},
    setCurrentRun: () => {},
  },
};

Summary.propTypes = {
  props: PropTypes.shape({
    allRuns: PropTypes.array.isRequired,
    allRunsCopy:PropTypes.array.isRequired,
    setAllRuns:PropTypes.func.isRequired,
    setCurrentRun:PropTypes.func.isRequired,
  })
}

export default Summary;
