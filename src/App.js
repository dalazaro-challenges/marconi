import React, { Component } from 'react';

import Header from './components/Header.js';
import BodyContainer from './components/body/BodyContainer.js';
import Footer from './components/Footer.js';

import './assets/styles/App.css';
import './assets/styles/BodyContainer.css';
import './assets/styles/SampleCode.css';
import './assets/styles/Footer.css';

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
