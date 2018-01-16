import React from 'react';
import InputRange from 'react-input-range';
import "react-input-range/lib/css/index.css";
import "./Slider.css";

class Slider extends React.Component {
  constructor(props) {
    super(props);

    this.state = { value: 0 };
  }

  render() {
    return (
      <InputRange
        maxValue={3}
        minValue={0}
        value={this.state.value}
        step={1}
        onChange={value => this.setState({ value })} />
    );
  }
}

export default Slider;