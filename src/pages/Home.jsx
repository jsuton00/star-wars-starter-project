import React, { useEffect, useState } from 'react';
import { searchStarWars } from '../apis/swApi';
import SearchForm from '../components/SearchForm';
import SearchResults from '../components/SearchResults';
import { SELECT_ENDPOINTS } from '../constants/selectEndpoints';
import '../styles/pages/home.css';

export default function Home() {
	const endpointOptions = SELECT_ENDPOINTS;
	const [endpointValue, setEndpointValue] = useState('');
	const [searchResults, setSearchResults] = useState('');
	const [isLoading, setIsLoading] = useState(false);
	const [isError, setIsError] = useState(false);
	const [searchTerm, setSearchTerm] = useState('');

	const searchingStarWars = async (endpointValue, searchTerm) => {
		try {
			setIsLoading(true);
			let response;
			if (endpointValue) {
				if (searchTerm) {
					response = await searchStarWars(endpointValue, searchTerm);
					let responseData = await response.data.results;
					setSearchResults(responseData);
					setIsLoading(false);
				}
			}
			if (searchTerm) {
				if (endpointValue) {
					response = await searchStarWars(endpointValue, searchTerm);
					let responseData = await response.data.results;
					setSearchResults(responseData);
					setIsLoading(false);
				}
			}
		} catch (error) {
			setIsError(true);
			console.log('Error:', error);
			setIsLoading(false);
		}
	};

	const selectEndpoints = (value) => {
		let selectedOption = value;
		if (endpointOptions[1] === selectedOption) {
			return setEndpointValue(endpointOptions[1]);
		} else {
			return setEndpointValue(endpointOptions[0]);
		}
	};

	useEffect(() => {
		const timer = setTimeout(() => {
			if (endpointValue) {
				if (searchTerm.length > 0) {
					return searchingStarWars(endpointValue, searchTerm);
				}
			} else if (searchTerm.length > 0) {
				if (endpointValue) {
					return searchingStarWars(endpointValue, searchTerm);
				}
			}
		}, 500);

		return () => {
			clearTimeout(timer);
		};
	}, [endpointValue, searchTerm]);

	return (
		<div id="home" className="home container-fluid">
			<div className="search-container row">
				<div className="search-container-col">
					<SearchForm
						selectEndpoints={selectEndpoints}
						rbOptions={endpointOptions}
						endpointOption={endpointValue}
						searchValue={searchTerm}
						setInputValue={setSearchTerm}
						searchStarWars={searchingStarWars}
					/>
				</div>
				<div className="search-container-col">
					<SearchResults
						searchResults={searchResults}
						loadingStatus={isLoading}
						errorStatus={isError}
					/>
				</div>
			</div>
		</div>
	);
}
