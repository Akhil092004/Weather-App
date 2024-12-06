
# A Weather App

This is a weather application built with React, Redux, and the WeatherAPI that provides current weather data and hourly forecasts for a specific city.


## Features

- Displays the current weather conditions (temperature, humidity, etc.)
- Shows hourly weather forecast for the current day and tomorrow.
- Fullscreen mode
- Fetches weather data using the WeatherAPI.


## Setup Instructions

Install my-project with npm

```bash
  git clone https://github.com/yourusername/weather-app.git

  cd weather-app
```

```bash
 npm i
```

- Get Your API KEY From = https://www.weatherapi.com/


    
## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`VITE_API_KEY`


## Run Locally

Clone the project

```bash
  git clone https://link-to-project
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```


## Usage

- Search for a City: Enter the name of the city in the search bar and press "Search".
- View Weather: The app will display the current weather data along with an hourly forecast.
- Hourly Forecast: The app shows hourly forecasts for the current day and tomorrow.

## Endpoints

Current Weather:
- GET "https://api.weatherapi.com/v1/current.json?key={API_KEY}&q={CITY_NAME}"

Hourly Forecast:

- GET "https://api.weatherapi.com/v1/forecast.json?key={API_KEY}&q={CITY_NAME}&hours=24"
