import React, { Component } from 'react';
import './assets/styles/App.css';
import Header from './components/Header.js';
import BodyContainer from './components/body/BodyContainer.js';
import Footer from './components/Footer.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <BodyContainer />
        <Footer />
      </div>
    );
  }
}

export default App;
