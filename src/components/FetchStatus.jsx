import React from 'react';
import { MESSAGES } from '../constants/fetchApiMessages';

export const Loader = () => {
	return <p className="fetch-status loader">{MESSAGES.loading}</p>;
};

export const SearchError = () => {
	return <p className="fetch-status search-error">{MESSAGES.errorMessage}</p>;
};
