import React from "react";
import SummaryEntry from './SummaryEntry';
import "./Summary.css";

function Summary({props: {runEntries, prs} }) {

  const loggedRuns = runEntries.map((run, key) => {
    return (
      <section key={key}>
        <SummaryEntry props={run} />
      </section>
    );
  })

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
        <div className="summary-stats__badges">
          <img
          src='https://placehold.it/25x25?text=Badge'
          alt='jogger'
          title="jogger"
          />
          <img
          src='https://placehold.it/25x25?text=Badge'
          alt='runner'
          title="runner"
          />
        </div>
        <div className="summary-stats__pr">
          <h3>Personal Records</h3>
          <ul>
            <li><strong>5k:</strong> {prs["5k"]}</li>
            <li><strong>10k:</strong> {prs["10k"]}</li>
            <li><strong>15k:</strong> {prs["15k"]}</li>
            <li><strong>25k:</strong> {prs["25k"]}</li>
            <li><strong>30k:</strong> {prs["30k"]}</li>
            <li><strong>half-marathon:</strong> {prs["half-marathon"]}</li>
            <li><strong>marathon:</strong> {prs["marathon"]}</li>
          </ul>
        </div>
      </section>

      <section className='summary-entries'>
        <header>
          <h2>Runs</h2>
        </header>
        
        <div className='summary-entries__controls'>
          <label htmlFor='search'>Search: </label>
          <input name='search' id='search' placeholder='search by location' />

          <label htmlFor='sort'>Sort by: </label>
          <select name='sort' id='sort'>
            <option>distance</option>
            <option>time</option>
            <option>weather</option>
            <option>terrain</option>
            <option>location</option>
          </select>
        </div>

        {loggedRuns}

      </section>
    </>
  );
}

Summary.defaultProps = {
  props: {
    runEntries: [],
    prs: {
      "5k": "00:19:30",
      "10k": "00:49:00",
      "15k": "00:55:30",
      "25k": "01:40:30",
      "30k": "02:19:30",
      "half-marathon": "01:49:30",
      "marathon": "03:40:30",
    }
  }
}

export default Summary;
