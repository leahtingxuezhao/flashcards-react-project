const data = require("../data.json");
let id = 8;

module.exports = {
  getCards: (req, res) => {
    res.status(200).send(data);
  },
  updateCard: (req, res) => {
    const { id } = req.params;
    const { question, answer } = req.body;
    const index = data.findIndex(element => element.id === +id);
    data[index].question = question;
    data[index].answer = answer;
    res.status(200).send(data);
  },
  deleteCard: (req, res) => {
    const { id } = req.params;
    console.log(id);
    const index = data.findIndex(element => element.id === +id);
    data.splice(index, 1);
    res.status(200).send(data);
  },
  createCard: (req, res) => {
    const { question, answer } = req.body;
    const cardObj = {
      id,
      question,
      answer
    };
    id++;
    console.log("cardObj :", cardObj);
    data.push(cardObj);
    res.status(200).send(data);
  }
};
