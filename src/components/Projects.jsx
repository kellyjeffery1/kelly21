import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

    class Projects extends Component {
        
        render() { 
            return (
                <div className='project-section'>
                    <Container fluid>
                    <h1 className="project-title">
						MORE
						<span className="full-stop" style={{ color: '#CA8DFB' }}>
							.
						</span>
					</h1>
                        <Row>
                            <Col sm={4}>
                                <div className="messageBoard-conatiner">
                                    <h3>Message board
                                        <span className="full-stop" style={{ color: '#CA8DFB' }}>. </span>
                                    </h3>
								    <p className='project-paragraph'>
								     A React frontend app where users can upload blogs, read other users blogs and leave comments.
                                    Gained an insight into Reacts component based library, one-directional dataflow and additional add-ons such as React Router,
                                     Redux and Styled- Component.
									</p>
								</div> 
                            </Col>
                            <Col sm={4}>
                                <div className="meme-container">
                                    <h3>Meme Generator
                                        <span className="full-stop" style={{ color: '#CA8DFB' }}>. </span>
                                    </h3>
                                    <p className='project-paragraph'>
                                      A React app where users are able to create and save their own memes. When creating this app I gained more knowledge on using restful APIs and anxious.
									</p>
								</div>
                            </Col>
                            <Col sm={4}>
                                <div className="check-container">
                                    <h3>Checklist
                                        <span className="full-stop" style={{ color: '#CA8DFB' }}>. </span>
                                    </h3>
                                    <p className='project-paragraph'>
									 A react App where people are able to create a todo list, and keep track of their progress throughout the day.
                                         Not only can they add as many chores as they want they are to check off as they go.
                                          When building the app I gained more of insight into using redux.
									</p>
								</div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            );
        }
    }
    
    export default Projects;