import React from 'react';
import '../styles/components/header.css';

export default function Header() {
	return (
		<header id="header" className="header container-fluid">
			<div className="header-heading row">
				<h1 id="app-title" className="app-title">
					SWStarter
				</h1>
			</div>
		</header>
	);
}
