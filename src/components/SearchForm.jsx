import React from 'react';
import '../styles/components/searchForm.css';

export default function SearchForm(props) {
	const { selectEndpoints, rbOptions, endpointValue } = props;

	const handleChange = (e) => {
		return selectEndpoints(e.target.value);
	};

	return (
		<form id="search-form" name="search-form" className="search-form">
			<div className="search-form-body">
				<h3 className="search-form-title row">What are you searching for?</h3>
				<div className="form-controls select row">
					{rbOptions.length > 0 &&
						rbOptions.map((option, index) => {
							return (
								<div key={index} className="select-options">
									<input
										id={'rb' + option}
										name="endpoint"
										type="radio"
										value={option}
										className="select-option"
										onChange={handleChange}
									/>
									<label className="select-options-label">
										{option === 'films' ? 'Movies' : 'People'}
									</label>
								</div>
							);
						})}
				</div>
				<div className="form-controls input-text row">
					<input
						id="search-input"
						name="search-input"
						type="text"
						placeholder="e.g. Chewbacca, Yoda, Boba Fett"
					/>
				</div>
				<div className="form-controls submit row">
					<button
						id="btnSubmit"
						name="btnSubmit"
						type="button"
						className="btnSubmit-disabled btnSubmit-default"
					>
						Search
					</button>
				</div>
			</div>
		</form>
	);
}
