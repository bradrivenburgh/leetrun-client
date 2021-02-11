import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./RecordRun.css";

function RecordRun() {
  return (
    <>
      <header role='banner'>
        <h1>New run</h1>
      </header>

      <section className='record-run'>
        <form action='#' className='record-run__form'>
          <label htmlFor='date'>Date:</label>
          <input type='date' id='date' name='date' />

          <label htmlFor='location'>Location:</label>
          <input type='text' id='location' name='location' />

          <label htmlFor='distance'>Distance:</label>
          <input type='number' id='distance' name='distance' />

          <label htmlFor='race'>Race:</label>
          <input type='text' id='race' name='race' />

          <label>Time:</label>
          <div className='record-run__time'>
            <input type='number' id='hours' name='hours' min='00' max='24' />
            :
            <input
              type='number'
              id='minutes'
              name='minutes'
              min='00'
              max='59'
            />
            :
            <input
              type='number'
              id='seconds'
              name='seconds'
              min='00'
              max='59'
            />
          </div>

          <label>Weather:</label>
          <div className='record-run__weather'>
            <input type='checkbox' id='hot' name='hot' />
            <label htmlFor='hot'>Hot</label>
            <br />
            <input type='checkbox' id='cold' name='cold' />
            <label htmlFor='cold'>Cold</label>
            <br />
            <input type='checkbox' id='humid' name='humid' />
            <label htmlFor='humid'>Humid</label>
            <br />
            <input type='checkbox' id='rain' name='rain' />
            <label htmlFor='rain'>Rain</label>
            <br />
            <input type='checkbox' id='snow' name='snow' />
            <label htmlFor='snow'>Snow</label>
          </div>

          <label htmlFor='surface'>Surface:</label>
          <select id='surface' name='surface'>
            <option value=''>--Please choose an option--</option>
            <option value='pavement'>pavement</option>
            <option value='trail'>trail</option>
          </select>

          <label htmlFor='terrain'>Terrain:</label>
          <select id='terrain' name='terrain'>
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
            placeholder='Notes...'></textarea>

          <label>Share:</label>
          <div className='record-run__share'>
            <input type='radio' id='yes' name='share' value='true' />
            <label htmlFor='yes'>Yes</label>

            <input type='radio' id='no' name='share' value='false' />
            <label htmlFor='no'>No</label>
          </div>

          <div className='record-run__buttons'>
            <button>
              <a href='index.html'>Cancel</a>
            </button>
            <button>
              <a href='index.html'>Submit</a>
            </button>
          </div>
        </form>
      </section>
    </>
  );
}

export default RecordRun;
