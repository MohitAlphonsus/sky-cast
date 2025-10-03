import { FaWind, FaTemperatureHigh } from 'react-icons/fa';
import { FaDroplet } from 'react-icons/fa6';
import { FaFan } from 'react-icons/fa';

export default function OtherDetails({ weatherData }) {
	return (
		<div className="other-section">
			<div className="other-detail-group">
				<FaWind className="other-detail-icon" />
				<span className="other-detail-text">{weatherData.wind}/hr</span>
			</div>
			<div className="other-detail-group">
				<FaTemperatureHigh className="other-detail-icon" />
				<span className="other-detail-text">
					{weatherData.feels_like}
					<sup>0</sup>C
				</span>
			</div>
			<div className="other-detail-group">
				<FaDroplet className="other-detail-icon" />
				<span className="other-detail-text">{weatherData.humidity}%</span>
			</div>
			<div className="other-detail-group">
				<FaFan className="other-detail-icon" />
				<span className="other-detail-text">
					{weatherData.pressure / 100}hpa
				</span>
			</div>
		</div>
	);
}
