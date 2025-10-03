import { useState } from 'react';
import SearchCity from './components/SearchCity';
import Weather from './components/Weather';

export default function App() {
	const [search, setSearch] = useState('');
	const [city, setCity] = useState('Mumbai');
	const [intial, setInitial] = useState(true);

	function handleSearchCity(e) {
		e.preventDefault();
		if (search.trim() !== '') {
			setCity(search);
			setSearch('');
			setInitial(false);
		}
	}

	return (
		<div className="app">
			<SearchCity
				search={search}
				setSearch={setSearch}
				onSearchCity={handleSearchCity}
			/>
			<Weather cityName={city} intial={intial} />
		</div>
	);
}
