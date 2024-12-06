/* eslint-disable no-unused-vars */
import React from 'react';
import Search from './components/Seach.jsx';
import WeatherDetails from './components/WeatherDetails.jsx';

const App = () => {
  return (
    <div className="bg-background min-h-screen text-text flex flex-col">
      <header className="bg-primary text-white py-6">
        <h1 className="text-center text-4xl font-bold">Weather Dashboard</h1>
      </header>
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="bg-white shadow-lg rounded-lg p-6">
          {/* Search bar for user input */}
          <Search />

          {/* Weather details fetched from the API */}
          <WeatherDetails />
        </div>
      </main>
      <footer className="bg-secondary text-white py-4 text-center">
        <p className="text-sm">Made By Akhil Jain</p>
      </footer>
    </div>
  );
};

export default App;
