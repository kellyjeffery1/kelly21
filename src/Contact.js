import React from 'react';
import ContactButton from './components/ContactButton';
import ContactHeader from './components/ContactHeader';



function Contact() {
	return (
		<div  className='page'>
			<ContactHeader />
			<ContactButton/>
		</div>
	);
}
export default Contact;