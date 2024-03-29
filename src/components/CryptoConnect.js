import React from 'react'
import WalletConnectProvider from "@walletconnect/web3-provider"
import CoinbaseWalletSDK from '@coinbase/wallet-sdk'
import Web3 from "web3"

class CryptoConnect extends React.Component {

	state = {chain: "1"}

	constructor(props) {
    	super(props);
		this.state = {handleAddressChange: props.handleAddressChange}
		this.connectMM = this.connectMM.bind(this);
		this.connectWC = this.connectWC.bind(this);
		this.connectCBW = this.connectCBW.bind(this);
	}


	async connectMM() {

	    if(typeof window.ethereum !== 'undefined') {
			console.log('window')
	      //const chainID= await window.ethereum.request({ method: 'eth_chainId' });

	      const accounts = await window.ethereum.request({method: 'eth_requestAccounts'})

	        
	      //const web3 = new Web3(window.ethereum)

	      window.ethereum.on('chainChanged', chainId => {
	      });

	      window.ethereum.on('accountsChanged', (accounts) => {
	      });

		  console.log(accounts[0])

		  let account = await accounts[0]

		  this.state.handleAddressChange(account)

		  document.getElementById('walletPopUp').style = "display: none;"

	    } else {
		  console.log('no window')
	      return
	    }

  }

	async connectWC() {
      
	    const provider = new WalletConnectProvider({infuraId: "99850c159db84348b7bdc4bf33a1e267"});
	    
	    provider.walletConnectProvider = undefined;
	    await provider.enable().catch((error) => {
	        if (error) {
	          console.log("Modal Closed")
	          return
	        }
	    })

    	const web3 = new Web3(provider)

      	//let chainID = await web3.eth.getChainId()

		provider.on("chainChanged", chainId => {
		});

		provider.on("accountsChanged", accounts => {
		})

		const accounts = await web3.eth.getAccounts();

		console.log(accounts[0])

		let account = await accounts[0]

		this.state.handleAddressChange(account)

		document.getElementById('walletPopUp').style = "display: none;"

  }
    
	async connectCBW() {

	    const coinbaseWallet = new CoinbaseWalletSDK({
	    appName: `Ape Rides`,
	    appLogoUrl: `https://garage.aperides.io/logo192.png`,
	    darkMode: true
	    })

	    const ethereum = coinbaseWallet.makeWeb3Provider('https://eth-mainnet.g.alchemy.com/v2/FeBF4O8PdhwNkQFNYAnjpWkjBuq74TMQ', 1)

	    const web3 = new Web3(ethereum)

	    await ethereum.enable().then((accounts) => {
	      web3.eth.defaultAccount = accounts[0]
	    })

	    const accounts = await web3.eth.getAccounts();
	    
	    ethereum.on("chainChanged", chainId => {
	    });

	    ethereum.on('accountsChanged', async (accounts) => {
	    });

		let account = await accounts[0]

		this.state.handleAddressChange(account)

		closeModal()

	}


	render() {

		return(
		 <div id="walletPopUp" className="walletPopUpNone">
    		
    		<p className="sm-txt sdark-txt">Choose your preferred wallet</p>

    		{ this.state.chainError ? <p className="xs-txt red-txt">Wrong Network - Please change to Ethereum</p> : <p className="none"></p>}
    
    		<div className="flex walletFlex">
      			<div onClick={this.connectMM} id="metamask" className="flexc wallet">
        			<img src="metamask.png" alt="metamask" className="walletIcon"></img>
        			<p className="xs-txt sdark-txt mgt">Metamask</p>
      			</div>
       			
       			<div onClick={this.connectWC} className="flexc wallet">
         			<img src="walletconnect.png" alt="walletconnect" className="walletIcon"></img>
        			<p className="xs-txt sdark-txt mgt">Wallet Connect</p>
      			</div>

        		<div onClick={this.connectCBW} className="flex-center flex-col wallet">
            		<img src="coinbasewallet.svg" alt="coinbasewallet" className="walletIcon"></img>
            		<p className="xs-txt sdark-txt">Coinbase Wallet</p>
        		</div>
    		</div>

  		</div>
		)
	}

}

function openModal() {
	document.getElementById('walletPopUp').style = "display: flex;"
}
function closeModal() {
	document.getElementById('walletPopUp').style = "display: none;"
}

export { CryptoConnect, openModal, closeModal }