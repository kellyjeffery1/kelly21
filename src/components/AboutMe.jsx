import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Parallax } from 'react-parallax';

class AboutMe extends Component {
	render() {
		return (
			<div>
				<Parallax
					bgImage="https://images.unsplash.com/photo-1497412159286-98933a0e327f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1919&q=80"
					strength={500}
				>
					<div className='about-parallax' >
                        <div className="aboutMe-section">
                            <Container fluid>
                                <h2 className="me-title">ME<span className="full-stop" style={{ color: '#CA8DFB' }}>.</span></h2>
                                <Row>
									<Col sm={6}>
										<div className="about-text-conatiner1">
											<p>
												Front end developer looking to continue an exciting and challenging
												journey in the tech industry. Determined, disciplined and driven. This comes from being a 5x international open water champion of the Algarve, Portugal. Also with 5+
												years work experience across England and Australia. Self-taught and a
												self-starter with a years worth of personal projects focusing primarily
												on React.
											</p>
										</div>
									</Col>
									<Col sm={6}>
										<div className="about-text-conatiner2">
											<p>
												I attended an intensive coding school with an entrepreneurial focus. Worked in
												small tech teams, collaborating through Github, Trello and Figma.
												Exposed to the tech workflow with regular sprints, stand-ups and demos.
												Taught the following technologies: Javascript, Ruby, Ruby On Rails
												(framework), HTML5, CSS/sass, and Bootstrap. In the final stages,
												built two detailed web applications from start to finish and presented
												the final Minimum Viable Product in front of 300+ people at the Barbican
												Center.
											</p>
										</div>
									</Col>
								</Row>
							</Container>
						</div>
					</div>
				</Parallax>
			</div>
		);
	}
}

export default AboutMe;
