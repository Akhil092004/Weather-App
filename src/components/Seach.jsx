/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchWeather } from '../store/weatherAction.js';

const Search = () => {
  const [city, setCity] = useState('');
  const dispatch = useDispatch();

  const handleSearch = () => {
    if (city.trim() === '') {
      alert('Please enter a city name!');
      return;
    }
    dispatch(fetchWeather(city));
  };

  const handleKeyPress = (e) => {
    if(e.key == "Enter"){
      handleSearch()
    }
  }

  return (
    <div className="flex items-center space-x-4">
      <input
        type="text"
        placeholder="Enter city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        onKeyDown={handleKeyPress}
        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
      />
      <button
        onClick={handleSearch}
        className="bg-primary text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition duration-200"
      >
        Search
      </button>
    </div>
  );
};

export default Search;
