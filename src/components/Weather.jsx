import React, { useState, useEffect } from "react";
import axios from "axios";

const Weather = () => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_KEY = "7aa7338fc4084d6296a143419250803";
  const city = "Sorsogon";

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await axios.get(
          `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`
        );
        setWeather(response.data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchWeather();
  }, [API_KEY, city]);

  if (loading)
    return (
      <div className="text-xs sm:text-sm text-white">Loading weather...</div>
    );
  if (error)
    return (
      <div className="text-xs sm:text-sm text-red-400">Error: {error}</div>
    );

  return (
    <div className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm md:text-base text-white">
      <img
        src={weather.current.condition.icon}
        alt={weather.current.condition.text}
        className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7"
      />
      <span>
        {weather.current.temp_c}°C | {weather.current.condition.text}
      </span>
    </div>
  );
};

export default Weather;