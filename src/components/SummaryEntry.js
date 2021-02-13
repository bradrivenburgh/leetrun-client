import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./SummaryEntry.css";

function SummaryEntry({ props: { allRuns, run, setAllRuns, setCurrentRun } }) {
  const [expand, setExpand] = useState(false);

  const handleClick = (e) => {
    if (e.type === "click") {
      setExpand(!expand);
    } else {
      if (e.code === "Enter") {
        setExpand(!expand);
      }
    }
  };

  const handleDelete = () => {
    const postDelete = allRuns.filter((current) => current.id !== run.id);
    setAllRuns(postDelete);
    console.log(allRuns);
  };

  const formatDate = (date) => {
    const dateArr = date.split("-");
    const newDate = `${dateArr[1]}-${dateArr[2]}-${dateArr[0]}`;
    return newDate;
  };

  return (
    <>
      <header
        onClick={(e) => handleClick(e)}
        onKeyDown={(e) => handleClick(e)}
        tabIndex='0'>
        <h3>{run.location}</h3>
        <h3>{formatDate(run.date)}</h3>
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
        <Link to='edit-run'>
          <button onClick={() => setCurrentRun(run)}>Edit</button>
        </Link>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </>
  );
}

SummaryEntry.defaultProps = {
  props: {
    allRuns: [],
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
    setAllRuns: () => {},
    setCurrentRun: () => {},
  },
};

export default SummaryEntry;
