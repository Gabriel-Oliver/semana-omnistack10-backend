const express = require("express");
const mongoose = require("mongoose");
mongoose.set('useCreateIndex', true);
const cors = require("cors");
const routes = require("./routes");

const app = express();

mongoose.connect(
  "mongodb+srv://Oliver:@Gabrielmed99@cluster0-mtjkz.mongodb.net/banco?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);
// json sempre antes das rotas
app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);
