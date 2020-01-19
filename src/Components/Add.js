import React, { Component } from "react";

class Add extends Component {
  constructor(props) {
    super(props);
    this.state = {
      question: "",
      answer: ""
    };
  }

  updateQuestion(val) {
    this.setState({ question: val });
  }
  updateAnswer(val) {
    this.setState({ answer: val });
  }

  createCard = () => {
    const { question, answer } = this.state;
    const { createCardFn } = this.props;

    if (question.length === 0 || answer.length === 0) {
      alert("You can't create an empty card");
    } else {
      createCardFn(question, answer);
      this.setState({ question: "", answer: "" });
    }
  };

  render() {
    console.log(this.state.question);
    console.log(this.state.answer);
    return (
      <div id="addBoxWrap">
        <textarea
          rows="4"
          cols="50"
          className="addNewCardInput"
          placeholder="Enter a question?"
          value={this.state.question}
          onChange={e => this.updateQuestion(e.target.value)}
        ></textarea>
        <textarea
          rows="4"
          cols="50"
          className="addNewCardInput"
          placeholder="Enter your answer..."
          value={this.state.answer}
          onChange={e => this.updateAnswer(e.target.value)}
        ></textarea>

        <button id="addButton" onClick={this.createCard}>
          Add
        </button>
      </div>
    );
  }
}
export default Add;
