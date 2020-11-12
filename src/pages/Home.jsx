import React, { useEffect, useState } from 'react';
import { fetchMovies, fetchPeople, fetchStarWars } from '../apis/swApi';
import SearchForm from '../components/SearchForm';
import SearchResults from '../components/SearchResults';
import { SELECT_ENDPOINTS } from '../constants/selectEndpoints';
import '../styles/pages/home.css';

export default function Home() {
	const endpointOptions = SELECT_ENDPOINTS;
	const [endpointValue, setEndpointValue] = useState('');
	const [movies, setMovies] = useState('');
	const [people, setPeople] = useState('');
	const [endpointData, setEndpointData] = useState('');
	const [isLoading, setIsLoading] = useState(false);
	const [isError, setIsError] = useState(false);

	const fetchingMovies = async () => {
		try {
			setIsLoading(true);
			const response = await fetchMovies();
			const results = await response.data.results;
			setMovies(results);
		} catch (err) {
			setIsError(true);
			console.log('Error:', err.message);
		}
	};

	const fetchingPeople = async () => {
		try {
			setIsLoading(true);
			const response = await fetchPeople();
			const results = await response.data.results;
			setPeople(results);
			setIsLoading(false);
		} catch (err) {
			setIsError(true);
			console.log('Error:', err);
			setIsLoading(false);
		}
	};

	const fetchingStarWars = async (endpointValue) => {
		try {
			setIsLoading(true);
			let response;
			if (endpointValue) {
				response = await fetchStarWars(endpointValue);
				let responseData = await response.data.results;
				setEndpointData(responseData);
				setIsLoading(false);
			}
		} catch (err) {
			setIsError(true);
			console.log('Error:', err);
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
				return fetchingStarWars(endpointValue);
			} else {
				fetchingMovies();
				fetchingPeople();
			}
		});

		return () => {
			clearTimeout(timer);
		};
	}, [endpointValue]);

	return (
		<div id="home" className="home container-fluid">
			<div className="search-container row">
				<div className="search-container-col">
					<SearchForm
						selectEndpoints={selectEndpoints}
						rbOptions={endpointOptions}
						endpointOption={endpointValue}
					/>
				</div>
				<div className="search-container-col">
					<SearchResults
						people={people}
						movies={movies}
						endpointData={endpointData}
					/>
				</div>
			</div>
		</div>
	);
}
