import React, { Component } from "react";

class OneCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0
    };
  }

  handleClickPlus = () => {
    this.state.index === this.props.data.length - 1
      ? this.setState({ index: 0 })
      : this.setState({ index: this.state.index + 1 });
  };

  handleClickMinus = () => {
    this.state.index === 0
      ? this.setState({
          index: this.props.data.length - 1
        })
      : this.setState({ index: this.state.index - 1 });
  };

  render() {
    const { data } = this.props;
    const { index } = this.state;

    console.log(data[index]);
    return (
      <div className="oneBoxContainer">
        <div id="green-box"></div>
        <div id="card-container">
          <div id="white-card">
            <p id="data-question">{data[index].question}</p>
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
