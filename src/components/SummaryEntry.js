import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./SummaryEntry.css";

function SummaryEntry({ props: { run, setCurrentRun } }) {
  const [expand, setExpand] = useState(false);

  const handleClick = () => {
    setExpand(!expand);
  };

  return (
    <>
      <header onClick={handleClick}>
        <h3>{run.location}</h3>
        <h3>{run.date}</h3>
        <div className='snapshot'>
          <p>
            <strong>Distance:</strong> {run.distance}k
          </p>
          <p>
            <strong>Time:</strong> {run.hours}:{run.minutes}:{run.seconds}
          </p>
        </div>
      </header>

      <div className={expand ? "collapse expand" : "collapse"}>
        <p>
          <strong>Weather:</strong> {run.weather}
        </p>
        <p>
          <strong>Surface:</strong> {run.surface}
        </p>
        <p>
          <strong>Terrain:</strong> {run.terrain}
        </p>
        <p>
          <strong>Notes: </strong> {run.notes}
        </p>
        <p>
          <strong>Public: </strong> {run.public ? "yes" : "no"}
        </p>
      </div>
      <div className='summary-entries__buttons'>
        <button onClick={() => setCurrentRun(run)}>
          <Link to='edit-run'>Edit</Link>
        </button>
        <button>Delete</button>
      </div>
    </>
  );
}

SummaryEntry.defaultProps = {
  props: {
    run: {
      date: "01/02/2021",
      location: "Philadelphia, PA",
      distance: "5",
      hours: "00",
      minutes: "20",
      seconds: "30",
      weather: "clear",
      surface: "pavement",
      terrain: "mixed",
      notes: "Good training run!",
      public: false,
    },
  },
};

export default SummaryEntry;
