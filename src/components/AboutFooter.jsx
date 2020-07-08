import React, { Component } from 'react';
import ScrollButton from './ScrollButton';
import { Link } from 'react-router-dom';

 
class AboutFooter extends Component {
	render() {
		return (
			<footer className="about-footer">
				<ul className="contact-ul">
					<li className="contact-li">
						<a target="blank" href="https://github.com/kellyjeffery1">
							<span />
							<span />
							<span />
							<span />
							<span className="fa fa-github" />
						</a>
					</li>
				</ul>
				<ScrollButton />
				<Link to="/Contact">
					<ul className="contact-ul">
						<li className="contact-li">
							<span />
							<span />
							<span />
							<span />
							<span className="fa fa-user " />
                        </li>
                        
					</ul>
                </Link>
            
			</footer>
		);
	}
}

export default AboutFooter;
