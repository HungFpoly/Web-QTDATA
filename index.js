const express = require("express");
const expressHbs = require("express-handlebars");
const mongoose = require("mongoose");
const bodyParser = require("body-parser")
const routes = require("./backend/router.js")

var app = express();

const url =
  "mongodb+srv://nhannbt:nhanne@cluster0-hw1yh.mongodb.net/dbQTData?retryWrites=true&w=majority";

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Đã kết nối đến Mongodb");
  })
  .catch((error) => {
    console.log("Lỗi kết nối đến database\n" + error);
  });

app.listen(2020);
app.use(express.static("css"));
app.use(express.static("js"));
app.use(express.static("images"));

app.engine(".hbs", expressHbs());
app.set("view engine", ".hbs");
app.use("/",routes)


