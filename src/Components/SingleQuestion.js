import React, { Component } from "react";
class SingleQuestion extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { id } = this.props;
    return (
      <div id="singleQuestionWrap">
        <li>{this.props.question}</li>

        <button
          className="delete-button"
          onClick={() => this.props.deleteCardFn(id)}
        >
          Delete
        </button>
      </div>
    );
  }
}

export default SingleQuestion;
