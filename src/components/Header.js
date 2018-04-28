import React, { Component } from 'react';
import '../assets/styles/Header.css';

import header from '../assets/images/header.jpg';
import cloud from '../assets/images/cloud.jpg';
import git from '../assets/images/git.jpg';

class Header extends Component {
  render() {
    return (
      <div>
        <header>

          {/* two sections in the header: navbar & splash */}
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
            </ul>
          </section>

          <section className="splash clearfix">
            <div className="splash-img float-left">
              <img className="center" src={cloud} alt="cloud" />
            </div>

            <div className="splash-info float-right">
              <h1 className="m-0">Programmable Ethernet</h1>
              <h2 className="m-0">A new blockchain protocol for jump starting secure networks using programmable packets</h2>

              <p className="m-0">Get early access to the SDK</p>
              <div className="access-buttons">
                <button className="access-btn git-access">
                  Request Git Access
                </button>
                <button className="access-btn other-access">View Sample Code</button>
              </div>
            </div>          
          </section>
        
        </header>
      </div>
    )
  }
}

export default Header;