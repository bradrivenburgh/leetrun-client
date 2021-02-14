import React, { useState } from "react";
import PropTypes from 'prop-types';
import "./LBoard.css";

function LBoard({ props: board }) {
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
        <h2>{board.distance}</h2>
      </header>

      <ol className={expand ? "collapse expand" : "collapse"}>
        <li>
          <div className='lboard'>
            <h3>{board.competitors.first.name}</h3>
            <p>
              <strong>Time: </strong>
              {board.competitors.first.time}
            </p>
            <p>
              <strong>Date: </strong>
              {formatDate(board.competitors.first.date)}
            </p>
          </div>
        </li>
        <li>
          <div className='lboard'>
            <h3>{board.competitors.second.name}</h3>
            <p>
              <strong>Time: </strong>
              {board.competitors.second.time}
            </p>
            <p>
              <strong>Date: </strong>
              {formatDate(board.competitors.second.date)}
            </p>
          </div>
        </li>
        <li>
          <div className='lboard'>
            <h3>{board.competitors.third.name}</h3>
            <p>
              <strong>Time: </strong>
              {board.competitors.third.time}
            </p>
            <p>
              <strong>Date: </strong>
              {formatDate(board.competitors.third.date)}
            </p>
          </div>
        </li>
        <li>
          <div className='lboard'>
            <h3>{board.competitors.fourth.name}</h3>
            <p>
              <strong>Time: </strong>
              {board.competitors.fourth.time}
            </p>
            <p>
              <strong>Date: </strong>
              {formatDate(board.competitors.fourth.date)}
            </p>
          </div>
        </li>
        <li>
          <div className='lboard'>
            <h3>{board.competitors.fifth.name}</h3>
            <p>
              <strong>Time: </strong>
              {board.competitors.fifth.time}
            </p>
            <p>
              <strong>Date: </strong>
              {formatDate(board.competitors.fifth.date)}
            </p>
          </div>
        </li>
      </ol>
    </>
  );
}

LBoard.defaultProps = {
  props: {
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
};

LBoard.propTypes = {
  props: PropTypes.shape({
    distance: PropTypes.string.isRequired,
    competitors: PropTypes.object.isRequired,
  }),
}

export default LBoard;
