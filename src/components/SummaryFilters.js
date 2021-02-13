import React, { useState } from "react";
import "./SummaryFilters.css";

function SummaryFilters() {
  const [formData, setFormData] = useState({
    search: "",
    distance_f: "",
    weather_f: "",
    surface_f: "",
    terrain_f: "",
    public_f: false,
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
        <form className='summary-filters__search'>
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

        <form className="summary-filters__filters">
          <p>Filter by: </p>
          <label htmlFor='distance_f'>Distance:</label>
          <select
            name='distance_f'
            id='distance_f'
            value={formData.distance_f}
            onChange={(e) => handleChange(e)}>
            <option value="">--Distance--</option>
            <option value='5k'>5k</option>
            <option value='10k'>10k</option>
            <option value='15k'>15k</option>
            <option value='25k'>25k</option>
            <option value='30k'>30k</option>
            <option value='half-marathon'>half-marathon</option>
            <option value='marathon'>marathon</option>
          </select>
          <br />
 
          <label htmlFor='weather_f'>Weather:</label>
          <select
            name='weather_f'
            id='weather_f'
            value={formData.weather_f}
            onChange={(e) => handleChange(e)}>
            <option value="">--Weather--</option>
            <option value='clear'>clear</option>
            <option value='rain'>rain</option>
            <option value='snow'>snow</option>
          </select>
          <br />
 
          <label htmlFor='weather_f'>Surface:</label>
          <select
            name='surface_f'
            id='surface_f'
            value={formData.surface_f}
            onChange={(e) => handleChange(e)}>
            <option value="">--Surface--</option>
            <option value='pavement'>pavement</option>
            <option value='trail'>trail</option>
          </select>
          <br />

 
          <label htmlFor='weather_f'>Terrain:</label>
          <select
            name='terrain_f'
            id='terrain_f'
            value={formData.terrain_f}
            onChange={(e) => handleChange(e)}>
            <option value="">--Terrain--</option>
            <option value='mixed'>mixed</option>
            <option value='flat'>flat</option>
            <option value='uphill'>uphill</option>
            <option value='downhill'>downhill</option>
          </select>
          <br />


          <label htmlFor='public_f'>Public</label>
          <input
            type='checkbox'
            checked={formData.public_f}
            name='public_f'
            id='public_f'
            onChange={(e) => handleChange(e)}
          />
          <br />
          <button>Filter</button>
        </form>
      </div>
    </>
  );
}

export default SummaryFilters;
