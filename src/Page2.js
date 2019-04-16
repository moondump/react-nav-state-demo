import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Page2 extends Component {
  render() {
    return (
      <div>
        <h1>Page 2</h1>
        <p>hello page 2</p>
        <p>props: {Object.keys(this.props)}</p>
        <p>location: {Object.keys(this.props.location)}</p>
        <p>state: {Object.keys(this.props.location.state)}</p>
        <p>from?: {this.props.location.state && '' + this.props.location.state.fromDashboard}</p>
      </div>
    );
  }
}

export default Page2;
