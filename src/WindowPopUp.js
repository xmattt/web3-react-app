//WindowPopUp

//Simple React Component for a Window Pop Up
//Title - STRING - Pop Up Title
//Message - STRING OPTIONAL - Pop Up Message
//Type - STRING OPTIONAL - Options [ "c-loader" , "c-error", "c-success"], loading as default
import React from 'react'

class WindowPopUp extends React.Component {

  constructor(props) {
    super(props)
    this.state = {title: props.title, message: props.message, type: props.type}
    if(!this.state.type) {
      this.state.type = "c-loader"
    }
  }

  render() {
    return (
      <div id="PopUp" key={this.state.title}>
        <p className="sm-txt sdark-txt">{this.state.title}</p>

        <div className={this.state.type}></div>

        <p className="xs-txt sdark-txt">{this.state.message}</p>
      </div>
    );
  }

}

export default WindowPopUp