import React, { Component } from 'react';
import { translate, Trans } from "react-i18next";

import headerImage from '../assets/images/header.jpg';
import cloudImage from '../assets/images/cloud.jpg';

class Header extends Component {
  render() {
    const { t, i18n } = this.props;

    const changeLanguage = lng => {
      i18n.changeLanguage(lng);
    };

    return (
      <header className="fixed-width">
        <nav id="navbar" className="clearfix">
            <img src={headerImage} alt="header" className="float-left" />

            <ul className="navbar-links float-right no-bullets">
              <li className="nav-link">
                <a href="https://docsend.com/view/5zragmb">
                  Whitepaper
                </a>
              </li>

              <li className="nav-link">
                <a href="#developers">
                  Developers
                </a>
              </li>

              <li className="nav-link">
                <a href="#core-tech">
                  Core Tech
                </a>
              </li>

              <li className="nav-link">
                <a href="https://www.marconi.org/team/">
                  Team
                </a>
              </li>

              <li className="nav-link">
                <button className="language-btn" onClick={() => changeLanguage("en")}>English</button>
                <button className="language-btn" onClick={() => changeLanguage("ch")}>简化字</button>
              </li>
            </ul>
          </nav>

          <section className="splash clearfix">
            <div className="floater float-left">
            <img className="center-items" src={cloudImage} alt="cloud" />
            </div>

            <div className="floater float-right">
              <div className="splash-text">
                <h1 id="splash-h1">Programmable Ethernet</h1>

                <h2 id="splash-h2">
                  <Trans>
                    A new blockchain protocol for jump starting secure networks using programmable packets
                  </Trans>
                </h2>
              </div>

              <p id="splash-p">Get early access to the SDK</p>
              <div className="access-buttons">
                <button className="access-btn git-btn">
                  <i class="fab fa-github" />Request Git Access
                </button>

                <button className="access-btn code-access">
                  View Sample Code
                </button>
              </div>
            </div>          
          </section>
      </header>
    )
  }
}

export default translate("translations")(Header);