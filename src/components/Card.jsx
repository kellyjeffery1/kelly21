import React from 'react';

function Card(props) {
	return (
		<div>
			<img src={props.contact.imageUrl} alt="" />
			<h3>{props.contact.name}</h3>
			<p>Email: {props.contact.email}</p>
			<p>Number: {props.contact.number}</p>
		</div>
	);
}
export default Card;