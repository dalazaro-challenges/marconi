import React, { Component } from 'react';
import ReactDOM from "react-dom";

import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";

import Header from './components/Header.js';
import BodyContainer from './components/body/BodyContainer.js';
import Footer from './components/Footer.js';

import './assets/styles/App.css';
import './assets/styles/Header.css';
import './assets/styles/BodyContainer.css';
import './assets/styles/SampleCode.css';
import './assets/styles/Footer.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <I18nextProvider i18n={i18n}>
          <Header />
        </I18nextProvider>
        <BodyContainer />
        <Footer />
      </div>
    );
  }
}

export default App;
