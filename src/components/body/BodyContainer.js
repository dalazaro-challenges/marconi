import React, { Component } from 'react';
import { SnippetOne, SnippetTwo, SnippetThree } from './snippets.js';

import CoreTech from './CoreTech.js';
import UseCases from './UseCases.js';
import SampleCode from './SampleCode.js';

const panes = [
  { title: 'Network Creation', description: 'Spin up a new virtualized blockchain network in just a few lines of code', content: <SnippetOne /> },
  { title: 'Network Admin', description: 'Establish policies to determine what type of traffic is permitted on the network', content: <SnippetTwo /> },
  { title: 'Anti-Phishing', description: 'Analyze network traffic for phishing attacks such as masquerading URLs with unicode characters', content: <SnippetThree /> }
];

class BodyContainer extends Component {
  render() {
    return (
      <div>
        <CoreTech />
        <UseCases />

        <section className="body-section" id="developers">
          <div className="fixed-width">
            <div className="container">
              <h1 className="body-h1">Developers</h1>

              <div className="dev-container clearfix">
                <div className="floater float-left">
                  <div className="dev-item">
                    <h2 className="dev-h2">Marconi Applications</h2>
                    <p className="dev-p">Write decentralized applications using Marconi Script, a Turing-complete language with access to network packets.</p>
                    <p className="dev-p">Decentralized Apps can be submitted to the global chain or branch chains for public and private networks.</p>
                  </div>
                </div>

                <div className="floater float-right">
                  <div className="dev-item">
                    <h2 className="dev-h2">Marconi Library</h2>
                    <p className="dev-p">APIs enable traffic routing, packet analysis, pattern recognition, branch chain creation and token migration.</p>
                  </div>

                  <div className="center">
                    <h2 className="dev-h2 dev-access">Get early access to the SDK</h2>
                    <button className="access-btn git-btn">
                      <i class="fab fa-github"></i>Request Git Access
                    </button>
                  </div>
                </div>
              </div>

              <SampleCode panes={panes} />
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default BodyContainer;