import React from "react";
import "./App.css";
import DrumPad from "./DrumPad";
const drumPads = [
  {
    text: "Q",
    keyCode: 81,
    id: "urlduson",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
  },
  {
    text: "W",
    keyCode: 87,
    id: "urlduson",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
  },
  {
    text: "E",
    keyCode: 69,
    id: "urlduson",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
  },
  {
    text: "A",
    keyCode: 65,
    id: "urlduson",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
  },
  {
    text: "S",
    keyCode: 83,
    id: "urlduson",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
  },
  {
    text: "D",
    keyCode: 68,
    id: "urlduson",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
  },
  {
    text: "Z",
    keyCode: 90,
    id: "urlduson",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
  },
  {
    text: "X",
    keyCode: 88,
    id: "urlduson",
    url: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
  },
  {
    text: "C",
    keyCode: 67,
    id: "urlduson",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
  }
];
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      drumPad: "",
      drumPadList: []
    };
  }

  componentDidMount() {
    this.setState({
      drumPadList: [...this.state.drumPadList, ...drumPads]
    });
  }

  handleClickDrum = value => {
    console.log(value);
    this.setState({
      drumPad: value
    });

    const element = document.getElementById(value);

    return element.play();
  };
  render() {
    const drumPadList = this.state.drumPadList.map(drumPad => (
      <DrumPad
        key={drumPad.text}
        innerText={drumPad.text}
        url={drumPad.url}
        handleClickDrum={this.handleClickDrum}
        keyCode={drumPad.keyCode}
      />
    ));

    return (
      <div id="drum-machine" className="drum-machine container-fluid ">
        <div className="row">
          <div className="col-md-6">{drumPadList}</div>
          <div id="display" className="col-md-6">
            <div className="jum-drum-pad jumbotron">{this.state.drumPad}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
