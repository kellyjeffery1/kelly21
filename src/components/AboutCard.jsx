import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
class AboutCard extends Component {
	render() {
		return (
			<div className="picture-section">
				<Container fluid>
					<Row>
						<Col sm={6}>
							<div>
								<img
									className="image1"
									alt="something"
									src="./images/IMG_1118.jpeg"
									height="40%"
									width="60%"
								/>
							</div>
						</Col>
						<Col sm={6}>
							<div>
								<img className="image3" alt="something" src="./images/IMG_1912.jpg" />
							</div>
						</Col>
					</Row>
					<Row>
						<Col sm={6}>
							<div>
								<img
									className="image1"
									alt="something"
									src="./images/IMG_3549.jpg"
									height="40%"
									width="60%"
								/>
							</div>
						</Col>
						<Col sm={6}>
							<div>
								<img
									className="image2"
									alt="something"
									src="./images/IMG_6011.jpg"
									height="40%"
									width="60%"
								/>
							</div>
						</Col>
					</Row>
				</Container>
			</div>
		);
	}
}

export default AboutCard;
