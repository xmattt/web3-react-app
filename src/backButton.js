import React from 'react'

class BackButton extends React.Component {

	constructor(props) {
		super(props)
		this.state = {onClick: this.props.onClick}
	}

	render() {
		return(
			<div className="flex restartBox" onClick={this.props.onClick}>
        		<div className="back"></div>
        		<p className="sm-txt white-txt mgl">back</p>
      		</div>
		);
	}
}

export default BackButton
