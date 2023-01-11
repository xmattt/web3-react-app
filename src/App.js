import React from "react";
import Main from "./Main.js";

class App extends React.Component {
  state = { currentWindow: "Main" };

  constructor(props) {
    super(props);
    this.setCurrentWindow = this.setCurrentWindow.bind(this);
  }

  async setCurrentWindow(cWindow) {
    await this.setState({
      currentWindow: cWindow,
    });
  }

  render() {
    switch (this.state.currentWindow) {
      case "Main":
        return (
          <>
            <Main
              window={this.state.currentWindow}
              setWindow={this.setCurrentWindow}
            />
          </>
        );
      default:
        return <></>;
    }
  }
}

export default App;
