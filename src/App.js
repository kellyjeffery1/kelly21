import Navbar from './components/Navbar';
import About from './About';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Home from './Home';

// import Card from './components/Card';
// import Like from './components/Like';
import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class App extends Component {
	render() {
		return (
			<div>
				<Router>
					<div>
						<Navbar />
						<Switch>
							<Route path="/" exact component={Home} />
							<Route path="/About" component={About} />
							<Route path="/Portfolio" component={Portfolio} />
							<Route path="/Contact" component={Contact} />
						</Switch>
					</div>
				</Router>

				{/* <Card
					contact={{
						imageUrl:
							'https://images.unsplash.com/photo-1562887284-8ba6b7c90fd8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2900&q=80',
						name: 'Kelly Jeffery',
						email: 'kellyjeffery1@hotmail.com',
						number: '07391023624'
					}}
				/> */}
				{/* <Like /> */}
			</div>
		);
	}
}

export default App;
