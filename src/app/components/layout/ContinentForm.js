import React, { useState } from "react";
import countries from "@/app/data/countries.json";

export const ContinentForm = ({ onSave,setSelectedContinent,selectedContinent }) => {
  const [region, setRegion] = useState("All");
  const handleChange = (event) => {
    setSelectedContinent(event.target.value);
  };
  return (
    <>
      <form
        className="flex justify-center max-w-md gap-4"
        onSubmit={(ev) => onSave(ev, { region })}
      >
        {countries.regions.map((element) => (
          <div className="flex items-center gap-2" key={element.id}>
            <input
              type="radio"
              id={element.name}
              name="region"
              value={element.name}
              checked={selectedContinent === element.name}
              onChange={handleChange}
            />
            <label htmlFor={element.name}>{element.name}</label>
          </div>
        ))}
      </form>
    </>
  );
};
