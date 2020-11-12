import React from 'react';

const Results = (props) => {
	const { searchResults } = props;
	return (
		<div className="search-results-list list-group">
			{searchResults.length > 0 &&
				searchResults.map((result, index) => {
					return (
						<div key={index} className="search-results-list-item row">
							<h5 className="search-results-name">
								{result.name || result.title}
							</h5>
							<div className="results-details-item">
								<button
									id="btnDetails"
									name="btnDetails"
									type="button"
									className="results-details-button"
									value={index + 1}
								>
									Details
								</button>
							</div>
						</div>
					);
				})}
		</div>
	);
};

export default Results;
