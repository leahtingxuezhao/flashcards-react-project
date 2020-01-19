const express = require("express");
const cors = require("cors");
const app = express();
const cardsCtrl = require("./controllers/cardsCtrl");

app.use(cors());
app.use(express.json());

app.get("/api/data", cardsCtrl.getCards);
app.put("/api/data/:id", cardsCtrl.updateCard);
app.post("/api/data", cardsCtrl.createCard);
app.delete("/api/data/:id", cardsCtrl.deleteCard);

const port = 3333;
app.listen(port, () => console.log(`Server running on ${port}`));
