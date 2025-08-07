import { WiDaySunny, WiCloud, WiRain, WiSnow } from "react-icons/wi";

const WeatherCard = ({ weather }) => {
  const { name, sys, main, weather: weatherInfo } = weather;
  const { country } = sys;
  const { temp, humidity } = main;
  const weatherMain = weatherInfo[0].main;

  const renderWeatherIcon = () => {
    switch (weatherMain) {
      case "Clear":
        return <WiDaySunny size={64} className="text-yellow-500" />;
      case "Clouds":
        return <WiCloud size={64} className="text-gray-500" />;
      case "Rain":
        return <WiRain size={64} className="text-blue-500" />;
      case "Snow":
        return <WiSnow size={64} className="text-blue-300" />;
      default:
        return <WiDaySunny size={64} className="text-yellow-500" />;
    }
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6 text-center w-full max-w-sm">
      <h2 className="text-2xl font-bold mb-2">{name}, {country}</h2>
      <div className="flex justify-center mb-4">
        {renderWeatherIcon()}
      </div>
      <p className="text-4xl font-semibold text-blue-600 mb-2">{Math.round(temp)}°C</p>
      <p className="text-gray-700 text-md capitalize mb-2">{weatherMain}</p>
      <p className="text-gray-600 text-sm">Namlik: {humidity}%</p>
    </div>
  );
};

export default WeatherCard;
