import React, { Component } from 'react';
import header from '../assets/images/header.jpg';

class Header extends Component {
  render() {
    return (
      <div className="navbar">
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
      </div>
    )
  }
}

export default Header;