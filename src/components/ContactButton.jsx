import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';



class ContactButtons extends Component {
	render() {
		return (
			<div className="contact-container">
				<Container>
					<Row>
						<Col sm={6}>
							<div className="SM-buttons">
								<ul className="contact-ul">
									<li className="contact-li">
										<a target="blank" href="https://github.com/kellyjeffery1">
											<span />
											<span />
											<span />
											<span />
											<span className="fa fa-github"/>
										</a>
									</li>
									<li className="contact-li">
										<a target="blank" href="https://twitter.com/home">
											<span />
											<span />
											<span />
											<span />
											<span className="fa fa-twitter" />
										</a>
									</li>
									<li className="contact-li">
										<a target="blank" href="https://www.instagram.com/?hl=en">
											<span />
											<span />
											<span />
											<span />
											<span className="fa fa-instagram" />
										</a>
									</li>
									<li className="contact-li">
										<a target="blank" href="https://www.linkedin.com/in/kelly-jeffery/">
											<span />
											<span />
											<span />
											<span />
											<span className="fa fa-linkedin" />
										</a>
									</li>
								</ul>
							</div>
						</Col>
						<Col sm={6}>
							<div className="contact-information">
								<div className="text-container-information">
									<h5 className="information-title">LOCATION:</h5>
									<p className="information-paragrapgh">
										16 ayrton Gould House,<br />
										Bethnal Green,<br />
										E2 OSD
									</p>
								</div>
								<div className="email-container-information">
									<h5 className="information-title">EMAIL:</h5>
									<p className="information-paragrapgh">kellyjeffery1@hotmail.com</p>
								</div>
							</div>
						</Col>
					</Row>
				</Container>
			</div>
		);
	}
}

export default ContactButtons;

