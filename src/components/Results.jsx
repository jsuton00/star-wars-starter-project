import React from 'react';
import { useHistory } from 'react-router';

const Results = (props) => {
	const { searchResults, searchId } = props;

	let history = useHistory();

	const handleRedirects = (e) => {
		if (searchResults.name) {
			return history.push({
				pathname: `/people/:${e.target.value}`,
				data: searchResults,
			});
		} else if (searchResults.title) {
			return history.push({
				pathname: `/movies/:${e.target.value}`,
				data: searchResults,
			});
		}
	};

	return (
		<div id={searchId} className="search-results-list-item row">
			{searchResults.name && (
				<h5 className="search-results-name">{searchResults.name}</h5>
			)}
			{searchResults.title && (
				<h5 className="search-results-name">{searchResults.title}</h5>
			)}
			<div className="results-details-item">
				<button
					id="btnDetails"
					name="btnDetails"
					type="button"
					className="results-details-button"
					value={searchId}
					onClick={handleRedirects}
				>
					Details
				</button>
			</div>
		</div>
	);
};

export default Results;
