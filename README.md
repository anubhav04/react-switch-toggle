Toggle Switch For ReactJs
====================

This module exposes component for CKEditor 5 for react:

* Get a toggle switch like and ON/OFF for your UI
* Can use it to toggle status
* Fully Customisable
* Functional Component


## Installation
    npm install --save react-switch-toggle
    yarn add react-switch-toggle

## Fully Customisable
* It is fully customisable, you can customise the wrapper, just edit index.js file according to you need

## Usage
```es6
import React, { Component } from 'react';
import ReactSwitch from 'ckeditor-react';

class ckeditor extends Component{
  onChange = () => {
    console.log( 'status changed' );
  }
  render(){
    return(
      <ReactSwitch
      style={{height: '100px'}} // your custom styles
      className="test" // your custom className
      onChange={() => this.onChange()} // function to change switch status
      isChecked={this.state.checked} // checked status of Switch
      />
    );
  }
};
```

## License MIT
* MIT License

Copyright (c) 2018 anubhav04

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
