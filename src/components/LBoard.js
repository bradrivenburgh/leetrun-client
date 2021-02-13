import React, { useState } from "react";
import "./LBoard.css";

function LBoard({ props: board }) {
  const formatDate = (date) => {
    const dateArr = date.split("-");
    const newDate = `${dateArr[1]}-${dateArr[2]}-${dateArr[0]}`;
    return newDate;
  };

  return (
    <>
      <header>
        <h2>{board.distance}</h2>
      </header>

      <ol>
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

export default LBoard;
