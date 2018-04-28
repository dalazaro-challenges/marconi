import React, { Component } from 'react';

class SampleCode extends Component {
  render() {
    return (
      <div>
        <div className="center-items">
          <button className="">Network Creation</button>
          <button className="">Network Admin</button>
          <button className="">Anti-Phishing</button>
        </div>

        <div className="center-items">
          <p className="dev-p">Spin up a new virtualized blockchain network in just a few lines of code</p>
        </div>

        <div id="code-box">
          <div className="font">
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