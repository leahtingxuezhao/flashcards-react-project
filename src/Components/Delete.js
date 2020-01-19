import React, { Component } from "react";
import SingleQuestion from "./SingleQuestion";

class Delete extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { data } = this.props;
    let list = data.map((element, index) => {
      return (
        <SingleQuestion
          key={index}
          question={element.question}
          answer={element.answer}
          id={element.id}
          deleteCardFn={this.props.deleteCardFn}
        />
      );
    });

    return <div id="deleteList">{list}</div>;
  }
}

export default Delete;
