import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
	return (
		<nav className="nav">
			<div className="menu__right">
				<ul className="nav-links">
					<Link to="/">
						<li className="nav-links-item one">
							<p className="nav-title">HOME</p>
						</li>
					</Link>
					<Link to="/Portfolio">
						<li className="nav-links-item two">
							<p className="nav-title">PORTFOLIO</p>
						</li>
					</Link>
					<Link to="/About">
						<li className="nav-links-item three">
							<p className="nav-title">ABOUT</p>
						</li>
					</Link>
					<Link to="/Contact">
						<li className="nav-links-item four">
							<p className="nav-title">CONTACT</p>
						</li>
					</Link>
					<hr />
				</ul>
			</div>
		</nav>
	);
}

export default Navbar;
