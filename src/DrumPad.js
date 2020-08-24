import React from "react";

class DrumPad extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyPress);
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyPress);
  }

  handleKeyPress = e => {
    if (e.keyCode === this.props.keyCode) {
      this.handleClickDrum(this.props.innerText);
    }
  };

  handleClickDrum = element => {
    this.props.handleClickDrum(element);
  };
  render() {
    return (
      <button
        id={`key-${this.props.innerText}`}
        onClick={e => this.handleClickDrum(this.props.innerText)}
        className="drum-pad btn btn-outline-primary col-md-4"
      >
        {this.props.innerText}
        <audio
          src={this.props.url}
          id={this.props.innerText}
          className="clip"
        ></audio>
      </button>
    );
  }
}
export default DrumPad;
