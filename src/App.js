import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar.js';
import Header from './components/Header.js';
import Slider from './components/Slider.js';

class App extends Component {
  state = {}
  render() {
    return (
      <Router>
        <Navbar />
        <Header />
        <Slider />
      </Router>
    );
  }
}

export default App;
