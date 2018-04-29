import React, { Component } from 'react';
import ReactDOM from "react-dom";
import { translate, Trans } from "react-i18next";

import header from '../assets/images/header.jpg';
import cloud from '../assets/images/cloud.jpg';
import git from '../assets/images/git.jpg';

class Header extends Component {
  render() {
    const { t, i18n } = this.props;

    const changeLanguage = lng => {
      i18n.changeLanguage(lng);
    };

    return (
      <div>
        <header>
          <div className="fixed-width">
            <section className="navbar clearfix">
              <img src={header} alt="header" className="float-left" />

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
                  <button className="language-btn" onClick={() => changeLanguage("ch")}>Simplified Chinese</button>
                </li>
              </ul>
            </section>

            <section className="splash clearfix">
              <div className="floater float-left">
                <img className="center" src={cloud} alt="cloud" />
              </div>

              <div className="floater float-right">
                <h1 id="splash-h1">Programmable Ethernet</h1>

                <h2 id="splash-h2">
                  {t("A new blockchain protocol for jump starting secure networks using programmable packets")}
                </h2>

                <p id="splash-p">Get early access to the SDK</p>
                <div className="access-buttons">
                  <button className="access-btn git-access">
                    <i class="fab fa-github"></i>Request Git Access
                  </button>

                  <button className="access-btn other-access ml-2">
                    View Sample Code
                  </button>
                </div>
              </div>          
            </section>
          </div>
        </header>
      </div>
    )
  }
}

export default translate("translations")(Header);