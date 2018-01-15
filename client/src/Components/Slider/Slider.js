import 'rc-slider/assets/index.css';

import React, {Component} from 'react';
import Slider from 'rc-slider';

const style = { width: 400, margin: 50 };

const marks = {
  0: "N/A",
  1: "Beginner",
  2: "Intermediate",
  3: "Advanced",
};

function log(value) {
  console.log(value); //eslint-disable-line
}

class SliderInput extends Component {
	constructor(props){
    super(props);

	this.state = {
		value: 0, 
	}

	onSliderChange = (value) => {
		log(value);
		this.setState({
			value, 
		});
	}

	onAfterchange = (value) => {
		console.log(value);
	}

	render() 
		return (
			<Slider dots
			step={1}
			value={this.state.value}
			onChange={this.onSliderChange}
			onAfterchange={this.onAfterchange}
			/>
		)
	}

} 

export default SliderInput;


