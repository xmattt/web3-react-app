import React from 'react'
import LazyLoad from 'react-lazyload';

const NFTCard = ({ apeCallback, nft }) => {

	const sendApe = () => {
		apeCallback(nft)
	}

	return(
		<div className="flexc fwrap square30">
		<LazyLoad>
			<img onClick={sendApe} className="mgb mgt" width = "90%" alt = {nft.name} src = {nft.url}></img>
		</LazyLoad>
		</div>
	
	)
}

export default NFTCard
