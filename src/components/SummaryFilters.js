import React, { useState } from "react";
import PropTypes from 'prop-types';
import "./SummaryFilters.css";

function SummaryFilters({ props: { handleFilter } }) {
  const [formData, setFormData] = useState({
    location: "",
    distance: "",
    weather: "",
    surface: "",
    terrain: "",
    public: false,
  });

  const handleChange = (e) => {
    const { name, type, value, checked } = e.target;
    type === "checkbox"
      ? setFormData({ ...formData, [name]: checked })
      : setFormData({ ...formData, [name]: value });
  };

  const handleReset = (e) => {
    const emptyForm = {
      location: "",
      distance: "",
      weather: "",
      surface: "",
      terrain: "",
      public: false,
    };
    setFormData(emptyForm);
    handleFilter(e, emptyForm);
  };

  return (
    <>
      <div className='summary-filters__controls'>
        <form
          className='summary-filters__filters'
          onSubmit={(e) => handleFilter(e, { ...formData })}>
          <h3>Filter by: </h3>
          <label htmlFor='location'>Location: </label>
          <input
            name='location'
            id='location'
            placeholder='enter a location'
            value={formData.location}
            onChange={(e) => handleChange(e)}
          />
          <br />
          <label htmlFor='distance'>Distance:</label>
          <select
            name='distance'
            id='distance'
            value={formData.distance}
            onChange={(e) => handleChange(e)}>
            <option value=''>--Distance--</option>
            <option value='5'>5k</option>
            <option value='10'>10k</option>
            <option value='15'>15k</option>
            <option value='25'>25k</option>
            <option value='30'>30k</option>
            <option value='half-marathon'>half-marathon</option>
            <option value='marathon'>marathon</option>
          </select>
          <br />

          <label htmlFor='weather'>Weather:</label>
          <select
            name='weather'
            id='weather'
            value={formData.weather}
            onChange={(e) => handleChange(e)}>
            <option value=''>--Weather--</option>
            <option value='clear'>clear</option>
            <option value='rain'>rain</option>
            <option value='snow'>snow</option>
          </select>
          <br />

          <label htmlFor='weather'>Surface:</label>
          <select
            name='surface'
            id='surface'
            value={formData.surface}
            onChange={(e) => handleChange(e)}>
            <option value=''>--Surface--</option>
            <option value='pavement'>pavement</option>
            <option value='trail'>trail</option>
          </select>
          <br />

          <label htmlFor='weather'>Terrain:</label>
          <select
            name='terrain'
            id='terrain'
            value={formData.terrain}
            onChange={(e) => handleChange(e)}>
            <option value=''>--Terrain--</option>
            <option value='mixed'>mixed</option>
            <option value='flat'>flat</option>
            <option value='uphill'>uphill</option>
            <option value='downhill'>downhill</option>
          </select>
          <br />

          <label htmlFor='public'>Public</label>
          <input
            type='checkbox'
            checked={formData.public}
            name='public'
            id='public'
            onChange={(e) => handleChange(e)}
          />
          <br />
          <button type='button' onClick={(e) => handleReset(e)}>
            Reset
          </button>
          <button>Filter</button>
        </form>
      </div>
    </>
  );
}

SummaryFilters.defaultProps = {
  props: {
    handleFilter: () => {},
  },
};

SummaryFilters.propTypes = {
  props: PropTypes.shape({
    handleFilter:PropTypes.func.isRequired,
  })
}


export default SummaryFilters;
