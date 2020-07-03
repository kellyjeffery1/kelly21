import React, { Component } from 'react';
import { FcLikePlaceholder } from "react-icons/fc";

class Like extends Component {
	constructor() {
		super();
		this.state = {
			count: 0
		};
		this.handleClick = this.handleClick.bind(this);
	}
	handleClick() {
		this.setState((prevState) => {
			return {
				count: prevState.count + 1
			};
		});
	}
	render() {
        return (
            <div>
                {this.state.count}
                <FcLikePlaceholder onClick={this.handleClick}/>
            </div>
        )
	}
}

export default Like;