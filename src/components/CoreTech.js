import React, { Component } from 'react';

import encryptionImage from '../assets/images/encryption.jpg';
import packetsImage from '../assets/images/packets.jpg';
import branchchainsImage from '../assets/images/branchchains.jpg';

class CoreTech extends Component {
  render (){
    return(
      <section id="core-tech" className="body-section fixed-width">
        <div className="container">

          <h1 className="body-h1">Core Technology</h1>
          <h2 className="tech-h2">The Marconi protocol is designed down to the ethernet level and powers a decentralized networking stack that provides privacy, security, net neutrality and upgradability</h2>

          <div className="tech clearfix">
            <div className="floater float-left tech-blurb-left">
              <h3 className="tech-h3">Ethernet-Level Encryption</h3>
              <hr className="tech-hr" />
              <p className="tech-p">Secure communication pipes established at Layer 2 of the OSI model provide packet-level encryption and custom packet routing and processing</p>
            </div>

            <div className="floater float-right">
              <img className="center-items" src={encryptionImage} alt="encryption" />
            </div>
          </div>

          <div className="tech clearfix">
            <div className="floater float-left">
              <img className="center-items" src={packetsImage} alt="packets" />
            </div>

            <div className="floater float-right tech-blurb-right">
              <h3 className="tech-h3">Programmable Packets</h3>
              <hr className="tech-hr" />
              <p className="tech-p">Smart contracts for network packets allow the creation of packet level decentralized applications for improved network security and operation</p>
            </div>
          </div>

          <div className="tech clearfix">
            <div className="floater float-left tech-blurb-left">
              <h3 className="tech-h3">Branch Chains</h3>
              <hr className="tech-hr" />
              <p className="tech-p">Branchable blockchains enable the programmatic creation and jump starting of new secure networks</p>
            </div>

            <div className="floater float-right">
              <img className="center-items" src={branchchainsImage} alt="branchchains" />
            </div>
          </div>

          <div className="center">
            <h4 className="tech-h4">Learn more about the Marconi Platform</h4>

            <button className="access-btn whitepaper-access">
              Read Whitepaper
            </button>
          </div>
          
        </div>
      </section>
    )
  }
}

export default CoreTech;