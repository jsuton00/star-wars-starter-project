import axios from 'axios';

export const fetchPeople = async () => {
	return await axios.get('https://swapi.dev/api/people/');
};

export const fetchMovies = async () => {
	return await axios.get('https://swapi.dev/api/films/');
};

export const searchStarWars = async (endpoint, searchTerm) => {
	return await axios.get(
		`https://swapi.dev/api/${endpoint}/?search=${searchTerm}`,
	);
};
