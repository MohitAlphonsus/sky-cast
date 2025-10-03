import { FaSearch } from 'react-icons/fa';

export default function SearchCity({ search, setSearch, onSearchCity }) {
	return (
		<form className="search" onSubmit={onSearchCity}>
			<div className="search-icon-box">
				<FaSearch className="search-icon" />
			</div>
			<input
				className="search-input"
				type="text"
				placeholder="Enter city name"
				value={search}
				onChange={e => setSearch(e.target.value)}
			/>
		</form>
	);
}
