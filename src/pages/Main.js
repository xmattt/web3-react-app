import React from "react";
import { CryptoConnect, openModal } from "../components/CryptoConnect.js"
import shortenAddress from "../services/shortenAddress.js";

class Main extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = { connectedAddress: '' };
    this.handleAddressChange = this.handleAddressChange.bind(this);
  }

  async handleAddressChange(address) {
    await this.setState({
      connectedAddress: address,
    });
  }

  //RETURN
  render() {
    return (
      <>
      <CryptoConnect handleAddressChange={this.handleAddressChange} chain="1" />
      <div className="flexContainer alignCenter junglebg">
        <div className="header flexBetween posRelative">
          <div className="apeRidesText ml-3 op85"></div>
          <div className="is-flex is-align-items-center">
            <button className="mr-4" onClick={openModal}>{this.state.connectedAddress ? shortenAddress(this.state.connectedAddress) : 'connect wallet'}</button>
          </div>
        </div>
        <div className="App columns is-centered has-background-white-ter pr-4 pl-4">
          <div className="container column is-11 has-background-white-bis mt-5 shadowBox is-flex is-justify-content-center is-flex-direction-column">
            <p className="is-size-1 has-text-dark is-family-primary has-text-weight-medium">Ape Rides React App Template</p>
            <p className="is-size-4 has-text-dark is-family-primary has-text-weight-normal mt-4 mb-6">Connect a wallet to get started</p>
            <div className="is-flex is-justify-content-center">
            <figure className="image is-32x32 bikeArena">
              <img src="./bike.png" alt="bike" />
            </figure>
            <hr className="has-background-dark"/>
            </div>
          </div>
        </div>
      </div>
      </>
    );
  }
}

export default Main;
