import React, { Component } from 'react';
class AboutHeader extends Component {
    
    render() { 
        return (
            <header className='about-header'>
                <div className="custom-shape-divider-top-1593002502">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M1200 0L0 0 598.97 114.72 1200 0z" className="shape-fill"></path>
                    </svg>
                </div>

                <div className="about-title-container">
					<h1 className="about-title">
						ABOUT
						<span className="full-stop" style={{ color: '#CA8DFB' }}>
							.
						</span>
					</h1>
				</div>
            </header>
          );
    }
}
 
export default AboutHeader;