import React, { useState } from "react";
import "./SummaryEntry.css";

function SummaryEntry() {
  const [expand, setExpand] = useState(false);

  const handleClick = () => {
    setExpand(!expand);
    console.log(expand);
  };

  return (
    <>
      <section>
        <header onClick={handleClick}>
          <h3>Philadelphia, PA</h3>
          <h3>01/01/2021</h3>
          <div className="snapshot">
          <p>
            <strong>Distance:</strong> 5k
          </p>
          <p>
            <strong>Time:</strong> 21:00
          </p>

          </div>

        </header>
        <div className={expand ? "collapse expand" : "collapse"}>
          <p>
            <strong>Weather:</strong> Clear
          </p>
          <p>
            <strong>Surface:</strong> Pavement
          </p>
          <p>
            <strong>Terrain:</strong> Flat
          </p>
          <p>
            <strong>Notes: </strong>
            Training run. Felt sluggish at the start, but my stride opened up
            about 5 minutes in.
          </p>
        </div>
        <div className='summary-entries__buttons'>
          <button>Edit</button>
          <button>Delete</button>
        </div>
      </section>
    </>
  );
}

export default SummaryEntry;
