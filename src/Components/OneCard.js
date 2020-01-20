import React, { Component } from "react";

class OneCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      data: [{ answer: "", question: "" }]
    };
  }

  handleClickPlus = () => {
    this.state.index === this.props.data.length - 1
      ? this.setState({ index: 0 })
      : this.setState({ index: this.state.index + 1 });
    this.setState({ count: 0 });
  };

  handleClickMinus = () => {
    this.state.index === 0
      ? this.setState({
          index: this.props.data.length - 1
        })
      : this.setState({ index: this.state.index - 1 });
    this.setState({ count: 0 });
  };

  render() {
    const { data } = this.props;
    const { index } = this.state;
    if (data.length < 1) {
      this.setState.index = 0;
      data.push({ answer: "", question: "" });
    }

    return (
      <div className="oneBoxContainer">
        <div id="green-box"></div>
        <div id="card-container">
          <div id="main-container">
            <div id="the-card">
              <div id="front-card">
                <p id="theFront">{data[index].question}</p>
              </div>
              <div id="back-card">
                <p id="theBack">{data[index].answer}</p>
              </div>
            </div>
          </div>
          <div id="arrowButton-container">
            <button
              className="next-button"
              onClick={e => this.handleClickMinus()}
            >
              {"<"} Previous{" "}
            </button>
            <p id="count">{`${index + 1}/${data.length}`}</p>
            <button
              className="next-button"
              onClick={e => this.handleClickPlus()}
            >
              Next {">"}{" "}
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default OneCard;
