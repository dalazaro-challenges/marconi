import React, { Component } from 'react';
import footer from '../assets/images/footer.jpg';

class Footer extends Component {
  render() {
    return (
      <footer className="fixed-width">
          <div className="clearfix" id="footer-container">
            <div className="footer-logo float-left">
              <img src={footer} alt="footer" />
              <div className="copyright">© 2018 Marconi Foundation</div>
            </div>

            <ul className="footer-link-container clearfix no-bullets float-right">
              <li className="footer-link">
                <a href="https://docsend.com/view/5zragmb">
                  Whitepaper
                </a>
              </li>

              <li className="footer-link">
                <a href="#developers">
                  Developers
                </a>
              </li>

              <li className="footer-link">
                <a href="#core-tech">
                  Core Tech
                </a>
              </li>

              <li className="footer-link">
                <a href="https://www.marconi.org/team/">
                  Team
                </a>
              </li>

              <li className="footer-link">
                <a href="mailto:hello@marconi.org">
                  hello@marconi.org
                </a>
              </li>
            </ul>
          </div>
      </footer>
    )
  }
}

export default Footer;