import React, {Component} from 'react';
import Typist from 'react-typist';
import "./Typewriter.css";

export default class Typewriter extends Component {

  render() {
    
    return (
      <Typist cursor= {{ show: false }}>
        <span className="typed-text">{this.props.text}</span>
      </Typist>
    );
  }
}