// store/weatherActions.js
import { startFetch, fetchSuccess, fetchFailure } from './weatherSlice';

export const fetchWeather = (city) => async (dispatch) => {
  dispatch(startFetch());

  const apiKey = "5a153c68474f43d7a87124536240612";
  
  try {
    const weatherResponse = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=2&aqi=no&alerts=no`
    );

    if (!weatherResponse.ok) {
      throw new Error('Unable to fetch weather data!');
    }

    // Log the raw response object
    console.log('Raw Response:', weatherResponse);

    const weatherData = await weatherResponse.json();

    // Log the parsed JSON data
    console.log('Parsed Weather Data:', weatherData);

    dispatch(fetchSuccess(weatherData));
  } catch (error) {
    dispatch(fetchFailure(error.message));

    // Log the error
    console.error('Error fetching weather data:', error);
  }
};