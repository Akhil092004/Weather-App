Weather App
This is a weather application built with React, Redux, and the WeatherAPI that provides current weather data and hourly forecasts for a specific city.

Features
Displays the current weather conditions (temperature, humidity, etc.).
Shows hourly weather forecast for the current day and tomorrow.
Fetches weather data using the WeatherAPI.
Prerequisites
Before running this application, make sure you have the following installed:

Node.js: Download Node.js
npm (Node Package Manager): Installed with Node.js.
Setup Instructions
Clone the repository:

bash
Copy code
git clone https://github.com/yourusername/weather-app.git
cd weather-app
Install dependencies:

In your terminal, run:

bash
Copy code
npm install
Get an API Key:

You will need a WeatherAPI key to fetch weather data. Follow these steps to get one:

Visit WeatherAPI.
Create an account and generate your API key.
Configure the API Key:

Once you have your API key, create a .env file in the root of the project directory and add the following line:

bash
Copy code
REACT_APP_WEATHER_API_KEY=your-api-key-here
Replace your-api-key-here with the API key you received from WeatherAPI.

Start the Development Server:

After configuring the API key, you can run the application locally by using:

bash
Copy code
npm start
This will start the development server and you can access the app in your browser at http://localhost:3000.

Project Structure
Here's an overview of the project structure:

bash
Copy code
weather-app/
│
├── public/             # Static files like index.html
├── src/                # Source code
│   ├── components/     # React components (WeatherDetails, etc.)
│   ├── redux/          # Redux slice, actions, and store
│   ├── App.js          # Main app component
│   └── index.js        # Entry point for the app
│
├── .env                # Environment variables for API key
├── package.json        # Project dependencies and scripts
├── README.md           # Project documentation (this file)
└── .gitignore          # Files to ignore in version control
Usage
Search for a City: Enter the name of the city in the search bar and press "Search".
View Weather: The app will display the current weather data along with an hourly forecast.
Hourly Forecast: The app shows hourly forecasts for the current day and tomorrow.
API Endpoints Used
Current Weather:

GET https://api.weatherapi.com/v1/current.json?key={API_KEY}&q={CITY_NAME}
Hourly Forecast:

GET https://api.weatherapi.com/v1/forecast.json?key={API_KEY}&q={CITY_NAME}&hours=24
Contributing
If you'd like to contribute to this project, feel free to fork the repository, make your changes, and create a pull request. Contributions are always welcome!

License
This project is open source and available under the MIT License.

