import React, { Component } from 'react';

import header from '../assets/images/header.jpg';
import cloud from '../assets/images/cloud.jpg';
import git from '../assets/images/git.jpg';

class Header extends Component {
  render() {
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
                  <select>
                    <option value="english">English</option>
                    <option value="chinese">Simplified Chinese</option>
                  </select>
                </li>
              </ul>
            </section>

            <section className="splash clearfix">
              <div className="floater float-left">
                <img className="center" src={cloud} alt="cloud" />
              </div>

              <div className="floater float-right">
                <h1 id="splash-h1">Programmable Ethernet</h1>

                {/* TODO: Set conditional to interpolate languages
                English: A new blockchain protocol for jump starting secure networks using programmable packets
                Chinese: 使用可编程数据包跳转启动安全网络的新区块链协议 */}
                <h2 id="splash-h2">A new blockchain protocol for jump starting secure networks using programmable packets</h2>

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

export default Header;