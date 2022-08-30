const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/book-routes");
const cors = require("cors");
const { proppatch } = require("./routes/book-routes");
const app = express();

// Middlewares
app.use(express.json());
app.use(cors());
app.use("/books", router); // localhost:5000/books

const PORT = process.env.PORT || 5000;   // when deploy in heroku

mongoose.connect(   //This is URI
    "mongodb+srv://karthik:bKA40dA1tcrDPBCT@cluster0.o5pv1gd.mongodb.net/bookStore?retryWrites=true&w=majority",{
        useNewUrlParser: true,
    }
)
  .then(() => console.log("Connected To Database"))
  .then(() => {
    app.listen(PORT);
  })
  .catch((err) => console.log(err));
