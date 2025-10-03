import { FaCloudSun } from 'react-icons/fa';

export default function Temp({ weatherData }) {
	return (
		<div className="temp-section">
			<FaCloudSun className="temp-icon" />
			<div className="temp-box">
				<span>
					{weatherData.temp}
					<sup>0</sup>C
				</span>
				<span>{weatherData.condition}</span>
			</div>
		</div>
	);
}
