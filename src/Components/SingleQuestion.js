import React, { Component } from "react";

class SingleQuestion extends Component {
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

  handleClickUpdate = () => {
    const getUpdatedQuestion = () => {
      if (this.state.question === "") {
        return this.props.question;
      } else {
        return this.state.question;
      }
    };
    const getUpdatedAnswer = () => {
      if (this.state.answer === "") {
        return this.props.answer;
      } else {
        return this.state.answer;
      }
    };
    const question = getUpdatedQuestion();
    const answer = getUpdatedAnswer();
    const { id, updateCardFn } = this.props;
    updateCardFn(id, question, answer);
  };

  render() {
    const { data } = this.props;

    return (
      <div>
        <div id="singleQuestionWrap">
          <li>{this.props.question}</li>
          <button className="update-button">Update</button>
          <button
            className="delete-button"
            onClick={() => this.props.deleteCardFn(this.props.id)}
          >
            Delete
          </button>
        </div>
        <div>
          <textarea
            rows="4"
            cols="50"
            className="updateNewCardInput"
            onChange={e => this.updateQuestion(e.target.value)}
          >
            {this.props.question}
          </textarea>
          <textarea
            rows="4"
            cols="50"
            className="updateNewCardInput"
            onChange={e => this.updateAnswer(e.target.value)}
          >
            {this.props.answer}
          </textarea>
          <button onClick={this.handleClickUpdate}>Submit</button>
        </div>
      </div>
    );
  }
}

export default SingleQuestion;
