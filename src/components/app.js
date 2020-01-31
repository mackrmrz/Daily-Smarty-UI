import React, { Component } from 'react';

import Logo from "./logo";

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <h1>Daily Smarty Grid Workout</h1>
        <Logo/>
      </div>
    );
  }
}
