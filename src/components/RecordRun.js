import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import PropTypes from 'prop-types';
import RunApiService from '../services/run-api-service';
import "./RecordRun.css";

function RecordRun({ props: { allRunsCopy, setAllRuns, setAllRunsCopy } }) {
  const [formData, setFormData] = useState({
    id: JSON.stringify(
      new Date() + Math.floor(Math.random() * Math.floor(100))
    ),
    date: "",
    location: "",
    distance: "",
    hours: "00",
    minutes: "00",
    seconds: "00",
    weather: "clear",
    surface: "pavement",
    terrain: "mixed",
    notes: "",
    public: false,
  });

  const handleChange = (e) => {
    const { name, type, value, checked } = e.target;
    type === "checkbox"
      ? setFormData({ ...formData, [name]: checked })
      : setFormData({ ...formData, [name]: value });
  };

  let history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    setAllRunsCopy([...allRunsCopy, formData])
    setAllRuns([...allRunsCopy, formData]);
    RunApiService.postRun(formData)
    history.push("/summary");
  };

  const requiredValuesPresent = () => {
    const required = [
      formData.date,
      formData.location,
      formData.hours,
      formData.minutes,
      formData.seconds,
    ];

    const areEmptyInputs = Object.values(required).some((value) => {
      return typeof value === "string"
        ? value.trim().length === 0
        : value.length === 0;
    });
    return areEmptyInputs;
  };

  const getPresentDate = () => {
    let today = new Date();
    const dd = String(today.getDate()).padStart(2, "0");
    const mm = String(today.getMonth() + 1).padStart(2, "0");
    const yyyy = today.getFullYear();
    today = yyyy + "-" + mm + "-" + dd;
    return today;
  };

  return (
    <>
      <header role='banner'>
        <h1>Record run</h1>
      </header>

      <section className='record-run'>
        <form
          action='#'
          className='record-run__form'
          onSubmit={(e) => handleSubmit(e)}>
          <p><em>(* = required)</em></p>

          <label htmlFor='date'>Date*:</label>
          <input
            type='date'
            id='date'
            name='date'
            min='1950-01-01'
            max={getPresentDate()}
            value={formData.date}
            onChange={(e) => handleChange(e)}
          />

          <label htmlFor='location'>Location*:</label>
          <input
            type='text'
            id='location'
            name='location'
            value={formData.location}
            onChange={(e) => handleChange(e)}
          />

          <label htmlFor='distance'>Distance* (km):</label>
          <input
            type='number'
            id='distance'
            name='distance'
            value={formData.distance}
            onChange={(e) => handleChange(e)}
          />

          <label>Time*:</label>
          <div className='record-run__time'>
            <input
              type='number'
              id='hours'
              name='hours'
              min='00'
              max='24'
              value={formData.hours}
              onChange={(e) => handleChange(e)}
            />
            :
            <input
              type='number'
              id='minutes'
              name='minutes'
              min='00'
              max='59'
              value={formData.minutes}
              onChange={(e) => handleChange(e)}
            />
            :
            <input
              type='number'
              id='seconds'
              name='seconds'
              min='00'
              max='59'
              value={formData.seconds}
              onChange={(e) => handleChange(e)}
            />
          </div>

          <label>Weather:</label>
          <div className='record-run__weather'>
            <input
              type='radio'
              id='clear'
              name='weather'
              defaultChecked
              value='clear'
              onChange={(e) => handleChange(e)}
            />
            <label htmlFor='clear'>Clear</label>
            <br />
            <input
              type='radio'
              id='rain'
              name='weather'
              value='rain'
              onChange={(e) => handleChange(e)}
            />
            <label htmlFor='rain'>Rain</label>
            <br />
            <input
              type='radio'
              id='snow'
              name='weather'
              value='snow'
              onChange={(e) => handleChange(e)}
            />
            <label htmlFor='snow'>Snow</label>
          </div>

          <label htmlFor='surface'>Surface:</label>
          <select
            id='surface'
            name='surface'
            value={formData.surface}
            onChange={(e) => handleChange(e)}>
            <option value='pavement'>pavement</option>
            <option value='trail'>trail</option>
          </select>

          <label htmlFor='terrain'>Terrain:</label>
          <select
            id='terrain'
            name='terrain'
            value={formData.terrain}
            onChange={(e) => handleChange(e)}>
            <option value='mixed'>mixed</option>
            <option value='flat'>flat</option>
            <option value='uphill'>uphill</option>
            <option value='downhill'>downhill</option>
          </select>

          <label htmlFor='notes'>Notes:</label>
          <textarea
            id='notes'
            name='notes'
            rows='5'
            cols='33'
            placeholder='Notes...'
            value={formData.notes}
            onChange={(e) => handleChange(e)}
          />

          <div className='record-run__buttons'>
            <button type='button' onClick={() => history.goBack()}>
              Cancel
            </button>
            <button
              className={requiredValuesPresent() ? "disabled-button" : ""}
              disabled={requiredValuesPresent()}
              aria-disabled={requiredValuesPresent()}>
              Submit
            </button>
          </div>
        </form>
      </section>
    </>
  );
}

RecordRun.defaultProps = {
  props: {
    allRunsCopy: [],
    setAllRuns: () => {},
    setAllRunsCopy: () => {},
  },
};

RecordRun.propTypes = {
  props: PropTypes.shape({
    allRunsCopy: PropTypes.array.isRequired,
    setAllRuns: PropTypes.func.isRequired,
    setAllRunsCopy: PropTypes.func.isRequired,
  })
}

export default RecordRun;
