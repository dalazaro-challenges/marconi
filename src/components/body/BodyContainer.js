import React, { Component } from 'react';
import SampleCode from './SampleCode.js';
// import footer from '../assets/images/footer.jpg';

class BodyContainer extends Component {
  render() {
    return (
      <div>
        <section className="core-tech clearfix">
          <h1>Core Tech</h1>
          <h2>The Marconi protocol is designed down to the ethernet level and powers a decentralized networking stack that provides privacy, security, net neutrality and upgradability</h2>
          <div>
            <h3>Ethernet-Level Encryption</h3>
            <p>Secure communication pipes established at Layer 2 of the OSI model provide packet-level encryption and custom packet routing and processing</p>
          </div>
          <div>
            <h3>Programmable Packets</h3>
            <p>Smart contracts for network packets allow the creation of packet level decentralized applications for improved network security and operation</p>
          </div>
          <div>
            <h3>Branch Chains</h3>
            <p>Branchable blockchains enable the programmatic creation and jump starting of new secure networks</p>
          </div>
          <div>
            <h4>Learn more about the Marconi Platform</h4>
            <button className="access-btn other-access">Read Whitepaper</button>
          </div>
        </section>

        <section className="use-cases clearfix">
          <h1>Use Cases</h1>
          <div>
            <h2>Virtualized Blockchain</h2>
            <p>Jump start new blockchains that leverage the Marconi Network for secure block creation and persistence.</p>
          </div>
          <div>
            <h2>Token to Chain Migration</h2>
            <p>Migrate token projects (e.g. ERC20) to a blockchain where the tokens now provide utility by powering the blockchain</p>
          </div>
          <div>
            <h2>Secure Field Networks</h2>
            <p>Rapidly deploy secure networks in battlefields and disaster recovery areas. Record network activity on a ledger for after action reviews.</p>
          </div>
          <div>
            <h2>Network Admin Apps</h2>
            <p>Create administrative applications for network load balancing, changing network topology and IOT device management.</p>
          </div>
          <div>
            <h2>Security Apps</h2>
            <p>Create decentralized security apps like Anti-Phishing, Anti-Malware, Intrusion Prevention Systems and dVPNs</p>
          </div>

        </section>

        <section className="developers clearfix">
          <h1>Developers</h1>

          <div>
            <h2>Marconi applications</h2>
            <p>Write decentralized applications using Marconi Script, a Turing-complete language with access to network packets.</p>
            <p>Decentralized Apps can be submitted to the global chain or branch chains for public and private networks.</p>
          </div>

          <div>
            <h2>Marconi Library</h2>
            <p>APIs enable traffic routing, packet analysis, pattern recognition, branch chain creation and token migration.</p>
          </div>

          <div>
            <h3>Get early access to the SDK</h3>
            <button className="access-btn git-access">Request Git Access</button>
          </div>
          
          <div>
            <button className="">Network Creation</button>
            <button className="">Network Admin</button>
            <button className="">Anti-Phishing</button>
          </div>

          <div>
            <p>Establish policies to determine what type of traffic is permitted on the network</p>
          </div>

          <SampleCode />

        </section>
      </div>
    )
  }
}

export default BodyContainer;