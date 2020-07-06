import React from 'react';

function Header() {
	return (
	
		<header className="pannels">
			<div className="left-pannel" />
			<div className="right-pannel" />

			<div className="title">
				{/* S> */}
				<h1 className="second-title">
				KELLY
					<span className="full-stop" style={{ color: '#CA8DFB' }}>
						.
					</span>
				</h1>
				<h3 className="job-title">
				  Front-End Developer
					<span className="full-stop" style={{ color: '#CA8DFB' }}>
						.
					</span>
				</h3>
			</div>
		</header>

		// <header className="header">
		// 	<div className="header-container">
		// 		<h1>Kel's Pics</h1>
		// 	</div>
		// </header>
	);
}
export default Header;
