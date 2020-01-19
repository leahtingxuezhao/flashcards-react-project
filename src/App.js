import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import OneCard from "./Components/OneCard";
import Delete from "./Components/Delete";
import Add from "./Components/Add";
import Header from "./Components/Header";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          id: 0,
          question: "test",
          answer: "test"
        }
      ]
    };
  }

  componentDidMount() {
    axios.get("/api/data").then(results => {
      this.setState({ data: results.data });
    });
  }

  deleteCard = id => {
    axios.delete(`/api/data/${id}`).then(results => {
      this.setState({ data: results.data });
    });
  };

  updateCard = (id, question, answer) => {
    axios.put(`/api/data/${id}`, { question }, { answer }).then(results => {
      this.setState({ data: results.data });
    });
  };

  createCard = (question, answer) => {
    axios.post("/api/data", { question }, { answer }).then(results => {
      this.setState({ data: results.data });
    });
  };

  render() {
    const { data } = this.state;

    return (
      <div className="App">
        <Header />
        <div id="mainpage">
          <img src="https://images.unsplash.com/photo-1566640240577-181c1793dad3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" />
        </div>
        <div className="container">
          <OneCard data={data} />
          <Add createCardFn={this.createCard} />
          <Delete data={data} deleteCardFn={this.deleteCard} />
        </div>
      </div>
    );
  }
}
export default App;
