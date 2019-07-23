


import React from 'react';
import ReactDOM from 'react-dom';
import miami from '../images/miami.jpg'


const BlueLetters = {
	width: "700px",
	margin: "auto",
	padding: "10px",
	color: 'skyblue',
	fontSize: '80px',
	display: 'inline',	
}

const thumbnail = {
	padding: 50,
	height: '140px',
	width: '500px',
	opacity: 7,
	borderRadius: '20px'
}

const headerclass = {
	width: "100%",
	textAlign: "center",
	backgroundImage: `url(${miami})`,
	height: '500px',
	backgroundColor: 'brightorange'
}

class Header extends React.Component {
	render() {
		return (
			<header style={headerclass}>
				<h1 style={BlueLetters}>DJ's React Weather App</h1>
			</header>

		)
	}
}

export default Header