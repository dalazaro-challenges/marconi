import React, { Component } from 'react';

class SampleCode extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tab: 'networkCreation'
    };
    this.networkCreation = this.networkCreation.bind(this);
    this.networkAdmin = this.networkAdmin.bind(this);
    this.antiPhishing = this.antiPhishing.bind(this);
  }

  networkCreation() {
    this.setState({
      tab: 'networkCreation'
      // description: 'Spin up a new virtualized blockchain network in just a few lines of code'
    });
  }

  networkAdmin() {
    this.setState({
      tab: 'networkAdmin'
      // description: 'Establish policies to determine what type of traffic is permitted on the network'
    });
  }

  antiPhishing() {
    this.setState({
      tab: 'antiPhishing'
      // description: 'Analyze network traffic for phishing attacks such as masquerading URLs with unicode characters'
    });
  }

  render() {
    return (
      <div>
        <div className="center-items">
          <button className="sample-btn" onClick={this.networkCreation}>Network Creation</button>
          <button className="sample-btn" onClick={this.networkAdmin}>Network Admin</button>
          <button className="sample-btn" onClick={this.antiPhishing}>Anti-Phishing</button>
        </div>

        <div className="sample-info center-items">
          <p>{this.state.description}</p>
        </div>

        <div id="code-container">
          
          {/* Network Creation code */}
          <p className="sample-p">
            $ marconi branch foo<br />
            <span className="green">>>> Success. Created branch foo.</span>
          </p>

          <p className="sample-p">
            $ marconi status --branch_name=foo<br />
            <span className="green">>>> Branch foo: uninitialized</span>
          </p>

          <p className="sample-p">
            $ marconi init --config=/tmp/config.txt --branch_name=foo<br />
            <span className="green">>>> Success. Configured branch foo.</span>
          </p>

          <p className="sample-p">
            $ marconi run --branch_name=foo<br />
            <span className="green">>>> Success. Running branch foo.</span>
          </p>

          {/* Network Admin code */}
          {/* <p className="sample-p">
            {`Contract IntranetFirewall {`}<br />
              {`Init(Address target_address) {`}<br /> 
                {`TunnelRef handle = mOpen(target_address);`}<br />
                {`mApply(handle, {AllowOnlyCorpOrHTTPS});`}<br />
              {`}`}<br />
            {`}`}
          </p>
        
          <p className="sample-p">
            {`Status AllowOnlyCorpOrHTTPS(PacketRef packet) {`}<br />
              {`if (packet.src().port() != 443 &&`}<br />
                  {`!packet.src().url().as_string().match`}<br />('intranet.example.com'){`) {`}<br />
                {`return Status::UNSAFE;`}<br />
              {`}`}<br />
              {`return Status::OK;`}<br />
            {`}`}<br />
          </p> */}

          {/* Anti-Phishing code */} 
          {/* <p className="sample-p">
            {`Contract PhishCatcher {`}<br />
              {`Init(Address client_address) {`}<br />
                {`TunnelRef handle = mOpen(client_address);`}<br />
                {`mApply(handle, {PhishFunc});`}<br />
              {`}`}<br />
            {`}`}<br />
          </p>

          <p className="sample-p">
            {`Status PhishFunc(PacketRef packet) {  `}<br />
              {`if (packet.src().url().as_string().match([^\u0000-\u007F]')) {`}<br />
                {`return Status::UNSAFE;`}<br />
              {`}`}<br />
              return Status::OK;`}<br />
            {`}`}<br />
          </p> */}

        </div>
      </div>
    )
  }
}

export default SampleCode;