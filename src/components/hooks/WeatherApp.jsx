import { useState } from "react";

const WeatherApp = () => {
    const [city, setCity] = useState("");
    const [weather, setWeather] = useState(null);

    const apiKey = import.meta.env.VITE_WEATHER_API_KEY;

    const getWeather = async () => {
        if (!city) return;

        const res = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
        );
        const data = await res.json();
        setWeather(data);
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-blue-100 px-4">
            <h1 className="text-3xl font-bold text-blue-600 mb-4">Weather App</h1>
            <div className="flex gap-2">
                <input
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="Enter city..."
                    className="px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <button
                    onClick={getWeather}
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
                >
                    Searching
                </button>
            </div>
            {weather && weather.main && (
                <div className="mt-6 bg-white p-6 rounded shadow text-center">
                    <h2 className="text-xl font-semibold text-gray-800">{weather.name}</h2>
                    <p className="text-gray-700 text-lg">{weather.weather[0].main}</p>
                    <p className="text-2xl font-bold text-blue-600">{weather.main.temp}°C</p>
                </div>
            )}
        </div>
    );
};

export default WeatherApp;
