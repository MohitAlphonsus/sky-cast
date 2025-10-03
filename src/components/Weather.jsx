import { useState, useEffect } from 'react';
import OtherDetails from './OtherDetails';
import Temp from './Temp';

export default function Weather({ cityName, intial }) {
	const [weatherData, setWeatherData] = useState();
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState('');

	const getWeatherData = async cityName => {
		try {
			setIsLoading(true);
			setError('');
			const geoCodeResponse = await fetch(
				`https://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=${
					import.meta.env.VITE_API_KEY
				}`,
			);
			const geoCodedata = await geoCodeResponse.json();

			if (geoCodedata.length === 0) {
				setError('City not found');
				setWeatherData(null);
				setIsLoading(false);
				return;
			}

			const { lat, lon, name } = geoCodedata[0];
			const weatherResponse = await fetch(
				`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${
					import.meta.env.VITE_API_KEY
				}`,
			);
			const weatherData = await weatherResponse.json();
			console.log(weatherData);
			if (weatherData.cod === 200) {
				setWeatherData({
					temp: weatherData.main.temp,
					feels_like: weatherData.main.feels_like,
					humidity: weatherData.main.humidity,
					pressure: weatherData.main.pressure,
					condition: weatherData.weather[0].description,
					icon: weatherData.weather[0].icon,
					wind: weatherData.wind.speed,
					name,
				});
			} else {
				setError('Weather data not found');
				setWeatherData(null);
			}
		} catch (err) {
			setError('Error Fetching data');
			setWeatherData(null);
		} finally {
			setIsLoading(false);
		}
	};

	useEffect(() => {
		if (intial) return;
		getWeatherData(cityName);
	}, [cityName, intial]);

	return (
		<main>
			{intial && (
				<div className="initial-display">
					<h2>Welcome to SkyCast</h2>
					<p>Search for city to see its weather conditions</p>
				</div>
			)}
			{isLoading && <p className="loading">Loading...</p>}
			{error && <p className="error">{error}</p>}
			{!isLoading && !error && !intial && weatherData && (
				<>
					<Temp weatherData={weatherData} />
					<span className="city-name">{weatherData.name}</span>
					<OtherDetails weatherData={weatherData} />
				</>
			)}
		</main>
	);
}
