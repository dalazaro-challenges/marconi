import React, { Component } from 'react';

import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";

import Header from './components/Header.js';
import CoreTech from './components/CoreTech.js';
import UseCases from './components/UseCases.js';
import Developers from './components/Developers.js';
import Footer from './components/Footer.js';

import './assets/styles/App.css';
import './assets/styles/Header.css';
import './assets/styles/CoreTech.css';
import './assets/styles/UseCases.css';
import './assets/styles/Developers.css';
import './assets/styles/SampleCode.css';
import './assets/styles/Footer.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <I18nextProvider i18n={i18n}>
          <Header />
        </I18nextProvider>
        <CoreTech />
        <UseCases />
        <Developers />
        <Footer />
      </div>
    );
  }
}

export default App;
