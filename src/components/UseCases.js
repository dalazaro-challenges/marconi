import React, { Component } from 'react';

class UseCases extends Component {
  render() {
    return (
      <section id="use-cases" className="body-section fixed-width">
        <div className="container">
          
          <h1 className="body-h1">Use Cases</h1>

          <div className="case-item-container">
            <div className="case-item">
              <h2 className="case-h2">
                <span className="case-plus">+</span>
                Virtualized Blockchain
              </h2>

              <p className="case-p">
                Jump start new blockchains that leverage the Marconi Network for secure block creation and persistence.
              </p>
            </div>

            <div className="case-item">
              <h2 className="case-h2">
                <span className="case-plus">+</span>
                Token to Chain Migration
              </h2>

              <p className="case-p">
                Migrate token projects (e.g. ERC20) to a blockchain where the tokens now provide utility by powering the blockchain
              </p>
            </div>

            <div className="case-item">
              <h2 className="case-h2">
                <span className="case-plus">+</span>
                Secure Field Networks
              </h2>
              
              <p className="case-p">
                Rapidly deploy secure networks in battlefields and disaster recovery areas. Record network activity on a ledger for after action reviews.
              </p>
            </div>

            <div className="case-item">
              <h2 className="case-h2">
                <span className="case-plus">+</span>
                Network Admin Apps
              </h2>
              
              <p className="case-p">
                Create administrative applications for network load balancing, changing network topology and IOT device management.
              </p>
            </div>

            <div className="case-item">
              <h2 className="case-h2">
                <span className="case-plus">+</span>
                Security Apps
              </h2>
              
              <p className="case-p">
                Create decentralized security apps like Anti-Phishing, Anti-Malware, Intrusion Prevention Systems and dVPNs
              </p>
            </div>
          </div>

        </div>
      </section>
    )
  }
}

export default UseCases;