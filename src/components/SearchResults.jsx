import React from 'react';
import Results from './Results';
import { Loader, SearchError } from './FetchStatus';
import '../styles/components/searchResults.css';
import '../styles/components/results.css';

export default function SearchResults(props) {
	const { searchResults, loadingStatus } = props;

	return (
		<div id="search-results" className="search-results">
			<div className="search-results-body">
				<h1 className="search-results-title row">Results</h1>
				<hr className="divider" />
				<div className="search-results-content row">
					{loadingStatus && <Loader />}
					{searchResults.length > 0 ? (
						<div className="search-results-list list-group">
							{searchResults.map((result, index) => {
								return (
									<Results
										key={index}
										searchId={index + 1}
										searchResults={result}
									/>
								);
							})}
						</div>
					) : (
						<SearchError />
					)}
				</div>
			</div>
		</div>
	);
}
