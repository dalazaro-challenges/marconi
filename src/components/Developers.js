import React, { Component } from 'react';

// Snippets held in object as components, then passed down as props to the sample code component
import { SnippetOne, SnippetTwo, SnippetThree } from './snippets.js';

import SampleCode from './SampleCode.js';

const panes = [
  { title: 'Network Creation', description: 'Spin up a new virtualized blockchain network in just a few lines of code', content: <SnippetOne /> },
  { title: 'Network Admin', description: 'Establish policies to determine what type of traffic is permitted on the network', content: <SnippetTwo /> },
  { title: 'Anti-Phishing', description: 'Analyze network traffic for phishing attacks such as masquerading URLs with unicode characters', content: <SnippetThree /> }
];

class Developers extends Component {
  render() {
    return (
      <section id="developers" className="body-section fixed-width">
        <div className="container">
        
          <h1 className="body-h1">Developers</h1>

          <div className="dev-container clearfix">
            <div className="floater float-left">
              <div className="dev-item">
                <h2 className="dev-h2">
                  Marconi Applications
                </h2>

                <p className="dev-p">
                  Write decentralized applications using Marconi Script, a Turing-complete language with access to network packets.
                </p>

                <p className="dev-p">
                  Decentralized Apps can be submitted to the global chain or branch chains for public and private networks.
                </p>
              </div>
            </div>

            <div className="floater float-right">
              <div className="dev-item">
                <h2 className="dev-h2">
                  Marconi Library
                </h2>

                <p className="dev-p">
                  APIs enable traffic routing, packet analysis, pattern recognition, branch chain creation and token migration.
                </p>
              </div>

              <div className="center">
                <h2 className="dev-h2 dev-access">
                  Get early access to the SDK
                </h2>
                <button className="access-btn git-btn">
                  <i className="fab fa-github" />Request Git Access
                </button>
              </div>
            </div>
          </div>

          <SampleCode panes={panes} />

        </div>
      </section>
    )
  }
}

export default Developers;