import axios from 'axios';

export const fetchPeople = async (url) => {
	return await axios.get(url);
};

export const fetchMovies = async (url) => {
	return await axios.get(url);
};

export const fetchStarWars = async (url) => {
	return await axios.get(url);
};

export const searchStarWars = async (endpoint, searchTerm) => {
	return await axios.get(
		`https://swapi.dev/api/${endpoint}/?search=${searchTerm}`,
	);
};
