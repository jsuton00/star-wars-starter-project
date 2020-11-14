import {
	faArrowsAltV,
	faBirthdayCake,
	faEye,
	faFemale,
	faMale,
	faTint,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import '../styles/pages/characterDetails.css';

export default function CharacterDetails(props) {
	const { location } = props;
	const [character, setCharacter] = useState('');

	useEffect(() => {
		const timer = setTimeout(() => {
			setCharacter(location.data);
		}, 100);

		return () => {
			clearTimeout(timer);
		};
	}, [location.data]);

	return (
		<div
			key={location.key}
			id={`person-details${location.key}`}
			className="person-details container-fluid"
		>
			{character && (
				<div className="person-details-body">
					<div className="person-details-content row">
						<h3 className="character-name row">{character.name}</h3>
						<div className="character-stats">
							<h4 className="character-stats-title row">Stats:</h4>
							<ul className="character-stats-list list-group">
								<li className="character-stats-list-item character-birthyear row">
									<p className="stats-text">
										<span className="stats-icon">
											<FontAwesomeIcon icon={faBirthdayCake} />
										</span>
										{character.birth_year}
									</p>
								</li>
								<li className="character-stats-list-item character-gender row">
									<p className="stats-text">
										<span className="stats-icon">
											{character.gender === 'male' ? (
												<FontAwesomeIcon icon={faMale} />
											) : (
												<FontAwesomeIcon icon={faFemale} />
											)}
										</span>
										{character.gender}
									</p>
								</li>
								<li className="character-stats-list-item character-hair row">
									<p className="stats-text">
										<span className="stats-icon">
											<FontAwesomeIcon icon={faTint} />
										</span>
										{character.hair_color}
									</p>
								</li>
								<li className="character-stats-list-item character-eyes row">
									<p className="stats-text">
										<span className="stats-icon">
											<FontAwesomeIcon icon={faEye} />
										</span>
										{character.eye_color}
									</p>
								</li>
								<li className="character-stats-list-item character-height row">
									<p className="stats-text">
										<span className="stats-icon">
											<FontAwesomeIcon icon={faArrowsAltV} />
										</span>
										{`${character.height} cm`}
									</p>
								</li>
							</ul>
						</div>
						<div className="character-movies"></div>
					</div>
				</div>
			)}
		</div>
	);
}
