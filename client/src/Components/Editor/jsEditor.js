import brace from 'brace';
import AceEditor from 'react-ace';
import React, { Component } from 'react';
 
export class JavascriptEditor extends Component {
  constructor() {
    super();
    this.onChange = this.onChange.bind(this);
  }
  onChange(newValue, e) {
    console.log(newValue, e);
 
    const editor = this.ace.editor; // The editor object is from Ace's API
    console.log(editor.getValue()); // Outputs the value of the editor
  }

  // Code from doc used to extract text from the editor
  onSelectionChange(selection) {
    const content = this.refs.aceEditor.editor.session.getTextRange(selection.getRange());
    // use content
  }

  render() {
    return (
      <AceEditor
        mode="javascript"
        theme="terminal"
        setReadOnly= 'false'
        onChange={this.onChange}
        style={{ height: '400px' }}
        ref={instance => { this.ace = instance; }} // Let's put things into scope
      />
    );
  }
}

