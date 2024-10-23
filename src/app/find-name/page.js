"use client"
import React, { useState, useEffect } from 'react';
import data_name from "../../data/players_data.json";

const findNamePage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [letterCount, setLetterCount] = useState(''); // New state for number of letters
  const [filteredPlayers, setFilteredPlayers] = useState(data_name);
  const [playersData, setPlayersData] = useState(data_name);

// Function to handle search input
const handleSearch = (event) => {
    const value = event.target.value.toLowerCase();
    setSearchTerm(value);

    // Filter players based on search term and letter count
    const filtered = playersData.filter((player) => {
      const nameMatches = player.name.toLowerCase().includes(value);
      const lengthMatches = letterCount ? player.name.length === parseInt(letterCount) : true;
      return nameMatches && lengthMatches;
    });

    setFilteredPlayers(filtered);
  };

  // Function to handle letter count input
  const handleLetterCountChange = (event) => {
    const value = event.target.value;
    setLetterCount(value);

    // Apply the filter when letter count changes
    const filtered = playersData.filter((player) => {
      const nameMatches = player.name.toLowerCase().includes(searchTerm);
      const lengthMatches = value ? player.name.length === parseInt(value) : true;
      return nameMatches && lengthMatches;
    });

    setFilteredPlayers(filtered);
  };

  return (
    <div>
      <h1>Player Search By Name</h1>
      <div className="grid w-full grid-cols-6 gap-2 px-4 py-5 sm:p-6">
      {/* Input for search term */}
      <div className="col-span-3">
        <label>Lettre du name</label>
      <input
        type="text"
        placeholder="Search by letter..."
        className='text-black bg-black'
        value={searchTerm}
        onChange={handleSearch}
      />
      </div>

      <div className="col-span-3 ">
        <label htmlFor='nbLetter '>Filtre par nombre de lettre </label>
        <input
          id='nbLetter'
          type="number"
          min="0"
          className='text-black'

          value={letterCount}
          onChange={handleLetterCountChange}
        />
        
      </div>
      
      </div>
      <ul>
        {filteredPlayers.map((player, index) => (
          <li key={index}>
            {player.name} (Rating: {player.rating})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default findNamePage;