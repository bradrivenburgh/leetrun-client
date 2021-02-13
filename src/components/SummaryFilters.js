import React, { useState } from "react";
import "./SummaryFilters.css";

function SummaryFilters({ props: { handleFilter } }) {
  const [formData, setFormData] = useState({
    search: "",
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

  return (
    <>
      <div className='summary-filters__controls'>
        <form
          className='summary-filters__search'
          onSubmit={(e) => handleFilter(e, formData)}
          // onSubmit={(e) => handleSearch(e, formData.search)}
          >
          <label htmlFor='search'>Search: </label>
          <input
            name='search'
            id='search'
            placeholder='search by location'
            value={formData.search}
            onChange={(e) => handleChange(e)}
          />
          <button>Search</button>
        </form>

        <form
          className='summary-filters__filters'
          onSubmit={(e) => handleFilter(e, { ...formData })}>
          <p>Filter by: </p>
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

export default SummaryFilters;
