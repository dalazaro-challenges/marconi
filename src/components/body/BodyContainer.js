import React, { Component } from 'react';
import SampleCode from './SampleCode.js';
import encryption from '../../assets/images/encryption.jpg';
import packets from '../../assets/images/packets.jpg';
import branchchains from '../../assets/images/branchchains.jpg';

class BodyContainer extends Component {
  render() {
    return (
      <div>
        <section className="body-section" id="core-tech">
          <div className="container">
            <h1 className="body-h1">Core Technology</h1>
            <h2 className="tech-h2">The Marconi protocol is designed down to the ethernet level and powers a decentralized networking stack that provides privacy, security, net neutrality and upgradability</h2>

            <div className="tech clearfix">
              <div className="floater float-left mr-8 tech-blurb">
                <h3 className="tech-h3">Ethernet-Level Encryption</h3>
                <hr className="tech-hr" />
                <p className="tech-p">Secure communication pipes established at Layer 2 of the OSI model provide packet-level encryption and custom packet routing and processing</p>
              </div>

              <div className="floater float-right">
                <img className="center" src={encryption} alt="encryption" />
              </div>
            </div>

            <div className="tech clearfix">
              <div className="floater float-left mr-8">
                <img src={packets} alt="packets" />
              </div>

              <div className="floater float-right tech-blurb">
                <h3 className="tech-h3 center">Programmable Packets</h3>
                <hr className="tech-hr" />
                <p className="tech-p">Smart contracts for network packets allow the creation of packet level decentralized applications for improved network security and operation</p>
              </div>
            </div>

            <div className="tech clearfix">
              <div className="floater float-left mr-8 tech-blurb">
                <h3 className="tech-h3">Branch Chains</h3>
                <hr className="tech-hr" />
                <p className="tech-p">Branchable blockchains enable the programmatic creation and jump starting of new secure networks</p>
              </div>

              <div className="floater float-right">
                <img className="center" src={branchchains} alt="branchchains" />
              </div>
            </div>

            <div className="center-items">
              <h4 className="tech-h4">Learn more about the Marconi Platform</h4>
              <button className="tech-btn access-btn other-access">Read Whitepaper</button>
            </div>
          </div>
        </section>

        <section className="body-section" id="use-cases">
          <div className="container">
            <h1 className="body-h1">Use Cases</h1>

            <div className="case-item-container">
              <div className="case-item">
                <h2 className="case-h2">
                  <span className="case-plus">+</span>
                  Virtualized Blockchain
                </h2>
                <p className="case-p">Jump start new blockchains that leverage the Marconi Network for secure block creation and persistence.</p>
              </div>
              <div className="case-item">
                <h2 className="case-h2">
                  <span className="case-plus">+</span>
                  Token to Chain Migration
                </h2>
                <p className="case-p">Migrate token projects (e.g. ERC20) to a blockchain where the tokens now provide utility by powering the blockchain</p>
              </div>
              <div className="case-item">
                <h2 className="case-h2">
                  <span className="case-plus">+</span>
                  Secure Field Networks
                </h2>
                <p className="case-p">Rapidly deploy secure networks in battlefields and disaster recovery areas. Record network activity on a ledger for after action reviews.</p>
              </div>
              <div className="case-item">
                <h2 className="case-h2">
                  <span className="case-plus">+</span>
                  Network Admin Apps
                </h2>
                <p className="case-p">Create administrative applications for network load balancing, changing network topology and IOT device management.</p>
              </div>
              <div className="case-item">
                <h2 className="case-h2">
                  <span className="case-plus">+</span>
                  Security Apps
                </h2>
                <p className="case-p">Create decentralized security apps like Anti-Phishing, Anti-Malware, Intrusion Prevention Systems and dVPNs</p>
              </div>
            </div>

          </div>
        </section>

        <section className="body-section" id="developers">
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

                <div className="center-items">
                  <h2 className="dev-h2 dev-access">Get early access to the SDK</h2>
                  <button className="access-btn git-access">Request Git Access</button>
                </div>
              </div>
            </div>

            <SampleCode />
          </div>
        </section>
      </div>
    )
  }
}

export default BodyContainer;