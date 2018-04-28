import React, { Component } from 'react';

class SampleCode extends Component {
  render() {
    return (
      <div>
        <div className="center-items">
          <button className="sample-btn">Network Creation</button>
          <button className="sample-btn">Network Admin</button>
          <button className="sample-btn">Anti-Phishing</button>
        </div>

        <div className="sample-code-p center-items">
          <p>Spin up a new virtualized blockchain network in just a few lines of code</p>
        </div>

        <div id="code-box">
          <div className="sample-font">
          $ marconi branch foo
          >>> Success. Created branch foo. 
          
          $ marconi status --branch_name=foo
          >>> Branch foo: uninitialized 
          
          $ marconi init --config=/tmp/config.txt --branch_name=foo
          >>> Success. Configured branch foo. 
          
          $ marconi run --branch_name=foo
          >>> Success. Running branch foo.
          </div>
        </div>
      </div>
    )
  }
}

export default SampleCode;