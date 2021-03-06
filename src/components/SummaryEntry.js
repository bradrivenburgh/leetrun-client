import React, { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import RunApiService from "../services/run-api-service";
import "./SummaryEntry.css";

function SummaryEntry({
  props: { allRunsCopy, run, setAllRuns, setAllRunsCopy, setCurrentRun },
}) {
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
    const postDelete = allRunsCopy.filter((current) => current.id !== run.id);
    RunApiService.deleteRun(run.id);

    setAllRunsCopy(postDelete);
    setAllRuns(postDelete);
  };

  const formatDate = (date) => {
    const dateArr = date.split("-");
    const newDate = `${dateArr[1]}-${dateArr[2]}-${dateArr[0]}`;
    return newDate;
  };

  const formatTime = (hours, minutes, seconds) => {
    const time = {
      hours,
      minutes,
      seconds,
    };

    for (const [key, value] of Object.entries(time)) {
      if (value.length === 1) {
        time[key] = "0" + value;
      }
    }
    return `${time.hours}:${time.minutes}:${time.seconds}`;
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
            <strong>Time:</strong>{" "}
            {formatTime(run.hours, run.minutes, run.seconds)}
          </p>
        </div>
        {!expand ? <p>&#9660;</p> : <p>&#9650;</p>}

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
      </div>
      <div className='summary-entries__buttons'>
        <Link to='edit-run'>
          <button onClick={() => setCurrentRun(run)}>Edit</button>
        </Link>
        <button className="summary-entries__buttons-delete" onClick={handleDelete}>Delete</button>
      </div>
    </>
  );
}

SummaryEntry.defaultProps = {
  props: {
    allRunsCopy: [],
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
    setAllRunsCopy: () => {},
    setCurrentRun: () => {},
  },
};

SummaryEntry.propTypes = {
  props: PropTypes.shape({
    allRunsCopy: PropTypes.array.isRequired,
    run: PropTypes.object.isRequired,
    setAllRuns: PropTypes.func.isRequired,
    setCurrentRun: PropTypes.func.isRequired,
    setAllRunsCopy: PropTypes.func.isRequired,
  }),
};

export default SummaryEntry;
