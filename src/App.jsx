import { useState } from "react";
import useWeather from "./hooks/useWeather";
import WeatherCard from "./components/hooks/WeatherCard";
import "./App.css";

function App() {
  const [city, setCity] = useState("Tashkent");
  const { data, loading, error } = useWeather(city);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-blue-100 p-4">
      <h1 className="text-3xl font-bold text-blue-600 mb-6">
        Weather Forecast App
      </h1>

      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Shahar nomini kiriting..."
        className="w-full max-w-sm p-3 rounded-md border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 mb-6"
      />

      {loading && <p className="text-blue-700">Yuklanmoqda...</p>}

      {error && (
        <p className="text-red-500 font-semibold">
          Xatolik yuz berdi: {error}
        </p>
      )}

      {data && <WeatherCard weather={data} />}
    </div>
  );
}

export default App;
