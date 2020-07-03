import React, { Component } from 'react';
class ContactHeader extends Component {
    
    render() { 
        return ( 
            <div>
                <div className="custom-shape-divider-top-1593164997">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M1200 0L0 0 892.25 114.72 1200 0z" className="shape-fill"></path>
                    </svg>
                </div> 
                <div className="contact-title-container">
					<h1 className="contact-title">
						CONATCT
						<span className="full-stop" style={{ color: '#CA8DFB' }}>
							.
						</span>
					</h1>
				</div>
            </div>
         );
    }
}
 
export default ContactHeader;