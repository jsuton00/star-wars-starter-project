import React from 'react';
import { MovieResults, PeopleResults, EndpointResults } from './Results';
import '../styles/components/searchResults.css';
import '../styles/components/results.css';

export default function SearchResults(props) {
	const { people, movies, endpointData } = props;

	const renderResults = () => {
		if (people.length > 0) {
			return people.map((p, i) => {
				return <PeopleResults key={i} peopleId={i + 1} people={p} />;
			});
		}
		if (movies.length > 0) {
			return movies.map((m, i) => {
				return <MovieResults key={i} movieId={i + 1} movies={m} />;
			});
		}
	};

	return (
		<div id="search-results" className="search-results">
			<div className="search-results-body">
				<h1 className="search-results-title row">Results</h1>
				<hr className="divider" />
				<div className="search-results-content">
					<div className="search-results-list list-group">
						{endpointData.length > 0
							? endpointData.map((endpoint, index) => {
									return (
										<EndpointResults
											key={index}
											endpointId={index + 1}
											endpoint={endpoint}
										/>
									);
							  })
							: renderResults()}
					</div>
				</div>
			</div>
		</div>
	);
}
