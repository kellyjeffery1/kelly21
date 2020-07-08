
import Typical from 'react-typical'
import React, { Component } from 'react';

class Header extends Component {

	render() { 
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
					
					<Typical
						className="job-title"
						steps={['Front-End Developer!', 1000, 'Girl That Codes!', 500]}
						loop={1}
						wrapper="h3"
					/>
						
				</div>
				</header>

			
		 );
	}
}
 
export default Header;
