import React from 'react';
import ReactDOM from 'react-dom';

const BlueLetters = {
	padding: 10,
	position: 'relative',
	top: '19px',
	left: '36px',
	color: 'skyblue',
	fontSize: '30px',
	display: 'inline',	
}

const footerclass = {
    textAlign: 'center',
	height: '75px',
    backgroundColor: '#333333',
    color: 'skyblue',
	fontSize: '30px'
}




class Footer extends React.Component {
	render() {
		return (
			<footer style={footerclass}>
				<h3 style={BlueLetters}>&copy; 2019 dmoye@techlaunch.io</h3>
			</footer>

		)
	}
}

export default Footer