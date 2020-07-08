import React, { Component } from 'react';

class PortHeader extends Component {
	render() {
		return (
			<div className="header-section">
				<div className="custom-shape-divider-top-1592842874">
					<svg
						data-name="Layer 1"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 1200 120"
						preserveAspectRatio="none"
					>
						<path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" className="shape-fill" />
					</svg>

					<div className="port-title-container">
						<h1 className="portfolio-title">
							PORTFOLIO
						<span className="full-stop" style={{ color: '#CA8DFB' }}>
								.
						</span>
						</h1>
					</div>
				</div>
			</div>
		);
	}
}

export default PortHeader;