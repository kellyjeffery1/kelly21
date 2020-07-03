import React, { Component } from 'react';
import ScrollButton from './ScrollButton';
import { Link } from 'react-router-dom';

class PortfolioFooter extends Component {
	render() {
		return (
			<footer className="footer">
				<ScrollButton />
				<Link to="/Contact">
					<ul className="contact-ul">
						<li className="contact-li">
								<span />
								<span />
								<span />
								<span />
								<span className="fa fa-copyright" />
						</li>
					</ul>	
				</Link>
			</footer>
		);
	}
}

export default PortfolioFooter;