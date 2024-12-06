/* eslint-disable no-unused-vars */
import React from 'react';
import { useSelector } from 'react-redux';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const WeatherDetails = () => {
  const { weatherData, status, error } = useSelector((state) => state.weather);

  if (status === 'loading')
    return <p className="text-center text-primary font-semibold">Loading...</p>;

  if (status === 'failed')
    return (
      <p className="text-center text-red-500 font-semibold">
        Error: {error}
      </p>
    );

  if (!weatherData)
    return (
      <p className="text-center text-gray-500 font-medium">
        No data available. Please search for a city.
      </p>
    );

  // Function to format time (e.g., 14:00)
  const formatTime = (time) => time.split(" ")[1];

  // Get the current hour
  const currentHour = new Date().getHours();

  // Flatten both today's and tomorrow's forecast hour data and take the next 8 hours starting from the current hour
  const getNext8Hours = () => {
    const todayHours = weatherData.forecast.forecastday[0].hour.slice(currentHour);
  
    // If today's hours are sufficient
    if (todayHours.length >= 8) {
      return todayHours.slice(0, 8); // Only take the next 8 hours from today
    }
  
    // If we need additional hours from tomorrow
    const remainingHoursNeeded = 8 - todayHours.length;
    const tomorrowHours = weatherData.forecast.forecastday[1].hour.slice(0, remainingHoursNeeded);
  
    return [...todayHours, ...tomorrowHours];
  };

  const next8Hours = getNext8Hours();

  // Prepare data for the chart (Tomorrow's Forecast)
  const tomorrowData = weatherData.forecast.forecastday[1].hour.map((hour) => ({
    time: formatTime(hour.time),
    temperature: hour.temp_c,
  }));

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 space-y-6">
      <h2 className="text-3xl font-bold text-center">
        {weatherData.location.name}, {weatherData.location.country}
      </h2>

      <div className="text-center">
        <p className="text-xl">
          Temperature: <span className="font-semibold">{weatherData.current.temp_c}°C</span>
        </p>
        <p className="text-xl">
          Feels Like: <span className="font-semibold">{weatherData.current.feelslike_c}°C</span>
        </p>
        <p className="text-xl">
          Condition: <span className="font-semibold">{weatherData.current.condition.text}</span>
        </p>
        <p className="text-xl">
          Humidity: <span className="font-semibold">{weatherData.current.humidity}%</span>
        </p>
        <img
          src={weatherData.current.condition.icon}
          alt="Weather Icon"
          className="inline-block mt-4"
        />
      </div>

      {/* Hourly Forecast for the next 8 hours */}
      <div className="space-y-4">
        <h3 className="text-2xl font-semibold text-center">Hourly Forecast (Next 8 Hours)</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {next8Hours.map((hour, index) => (
            <div
              key={index}
              className="bg-gray-100 rounded-lg p-3 text-center shadow-md"
            >
              <p className="font-medium">{formatTime(hour.time)}</p>
              <img
                src={hour.condition.icon}
                alt="Hourly Weather Icon"
                className="w-12 h-12 mx-auto"
              />
              <p>{hour.temp_c}°C</p>
            </div>
          ))}
        </div>
      </div>

      {/* Tomorrow's Temperature Graph */}
      <div className="space-y-4">
        <h3 className="text-2xl font-semibold text-center">Tomorrow Temperature Forecast</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={tomorrowData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="time" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="temperature"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default WeatherDetails;
