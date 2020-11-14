import {
	faCalendarDay,
	faInfoCircle,
	faListOl,
	faMale,
	faUserTie,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import '../styles/pages/movieDetails.css';

export default function MovieDetails(props) {
	const { location } = props;
	const [movie, setMovie] = useState('');

	console.log('Data', location.data);

	useEffect(() => {
		const timer = setTimeout(() => {
			setMovie(location.data);
		});

		return () => {
			clearTimeout(timer);
		};
	}, [location.data]);

	return (
		<div
			key={location.key}
			id={`movie${location.key}`}
			className="movie-details container-fluid"
		>
			{movie && (
				<div className="movie-details-body">
					<div className="movie-details-content row">
						<h3 className="movie-title row">{movie.title}</h3>
						<div className="movie-info">
							<h4 className="movie-info-title row">Details:</h4>
							<ul className="movie-info-list list-group">
								<li className="movie-info-list-item row">
									<p className="stats-text">
										<span className="stats-icon">
											<FontAwesomeIcon icon={faCalendarDay} />
										</span>
										{`${new Date(movie.release_date).toLocaleDateString()}`}
									</p>
								</li>
								<li className="movie-info-list-item row">
									<p className="stats-text">
										<span className="stats-icon">
											<FontAwesomeIcon icon={faMale} />
										</span>
										{movie.director}
									</p>
								</li>
								<li className="movie-info-list-item row">
									<p className="stats-text">
										<span className="stats-icon">
											<FontAwesomeIcon icon={faListOl} />
										</span>
										{movie.episode_id}
									</p>
								</li>
								<li className="movie-info-list-item row">
									<p className="stats-text">
										<span className="stats-icon">
											<FontAwesomeIcon icon={faInfoCircle} />
										</span>
										{movie.opening_crawl}
									</p>
								</li>
								<li className="movie-info-list-item row">
									<p className="stats-text">
										<span className="stats-icon">
											<FontAwesomeIcon icon={faUserTie} />
										</span>
										{movie.producer}
									</p>
								</li>
							</ul>
						</div>
						<div className="featured-characters"></div>
					</div>
				</div>
			)}
		</div>
	);
}
