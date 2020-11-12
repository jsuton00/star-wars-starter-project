import React from 'react';

export const PeopleResults = (props) => {
	const { people, peopleId } = props;
	return (
		<div className="search-results-list-item row">
			<h5 className="people-results-name">{people.name}</h5>
			<div className="results-details-item">
				<button
					id="btnDetails"
					name="btnDetails"
					type="button"
					className="results-details-button"
					value={peopleId}
				>
					Details
				</button>
			</div>
		</div>
	);
};

export const MovieResults = (props) => {
	const { movies, movieId } = props;
	return (
		<div className="search-results-list-item row">
			<h5 className="movies-results-name">{movies.name}</h5>
			<div className="results-details-item">
				<button
					id="btnDetails"
					name="btnDetails"
					type="button"
					className="results-details-button"
					value={movieId}
				>
					Details
				</button>
			</div>
		</div>
	);
};
export const EndpointResults = (props) => {
	const { endpoint, endpointId } = props;
	return (
		<div className="search-results-list-item row">
			<h5 className="endpoint-results-name">
				{endpoint.name || endpoint.title}
			</h5>
			<div className="results-details-item">
				<button
					id="btnDetails"
					name="btnDetails"
					type="button"
					className="results-details-button"
					value={endpointId}
				>
					Details
				</button>
			</div>
		</div>
	);
};
