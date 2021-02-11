import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./RecordRun.css";

function RecordRun() {
  const [formData, setFormData] = useState({
    date: "",
    location: "",
    distance: "",
    race: "",
    hours: "",
    minutes: "",
    seconds: "",
    weather: [],
    surface: "",
    terrain: "",
    notes: "",
    share: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
  };

  let history = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    //history.push("/");
  };

  const allFormValuesPresent = () => {
    const areEmptyInputs = Object.values(formData).some(
      (value) => value.trim().length === 0
    );
    return areEmptyInputs;
  };

  return (
    <>
      <header role='banner'>
        <h1>New run</h1>
      </header>

      <section className='record-run'>
        <form
          action='#'
          className='record-run__form'
          onSubmit={(e) => handleSubmit(e)}>
          <label htmlFor='date'>Date:</label>
          <input
            type='date'
            id='date'
            name='date'
            value={formData.date}
            onChange={(e) => handleChange(e)}
          />

          <label htmlFor='location'>Location:</label>
          <input
            type='text'
            id='location'
            name='location'
            value={formData.location}
            onChange={(e) => handleChange(e)}
          />

          <label htmlFor='distance'>Distance (kilometers):</label>
          <input
            type='number'
            id='distance'
            name='distance'
            value={formData.distance}
            onChange={(e) => handleChange(e)}
          />

          <label htmlFor='race'>Race:</label>
          <input
            type='text'
            id='race'
            name='race'
            value={formData.race}
            onChange={(e) => handleChange(e)}
          />

          <label>Time:</label>
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
              type='checkbox'
              id='hot'
              name='hot'
              value='hot'
              onChange={(e) => handleChange(e)}
            />
            <label htmlFor='hot'>Hot</label>
            <br />
            <input
              type='checkbox'
              id='cold'
              name='cold'
              value='cold'
              onChange={(e) => handleChange(e)}
            />
            <label htmlFor='cold'>Cold</label>
            <br />
            <input
              type='checkbox'
              id='humid'
              name='humid'
              value='humid'
              onChange={(e) => handleChange(e)}
            />
            <label htmlFor='humid'>Humid</label>
            <br />
            <input
              type='checkbox'
              id='rain'
              name='rain'
              value='rain'
              onChange={(e) => handleChange(e)}
            />
            <label htmlFor='rain'>Rain</label>
            <br />
            <input
              type='checkbox'
              id='snow'
              name='snow'
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
            <option value=''>--Please choose an option--</option>
            <option value='pavement'>pavement</option>
            <option value='trail'>trail</option>
          </select>

          <label htmlFor='terrain'>Terrain:</label>
          <select
            id='terrain'
            name='terrain'
            value={formData.terrain}
            onChange={(e) => handleChange(e)}>
            <option value=''>--Please choose an option--</option>
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

          <label>Share:</label>
          <div className='record-run__share'>
            <input
              type='radio'
              id='yes'
              name='share'
              value={true}
              onChange={(e) => handleChange(e)}
            />
            <label htmlFor='yes'>Yes</label>

            <input
              type='radio'
              id='no'
              name='share'
              value={false}
              onChange={(e) => handleChange(e)}
            />
            <label htmlFor='no'>No</label>
          </div>

          <div className='record-run__buttons'>
            <button type='button' onClick={() => history.goBack()}>
              Cancel
            </button>
            <button
              // disabled={allFormValuesPresent()}
              // aria-disabled={allFormValuesPresent()}
              >
              Submit
            </button>
          </div>
        </form>
      </section>
    </>
  );
}

export default RecordRun;
