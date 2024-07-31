const express = require("express");
const rootRouter = require("../routes/index");
const mongoose = require("mongoose");
require("dotenv").config();
mongoose.connect(process.env.DATABASE_URL).then(console.log("connexr")).catch((error) => console.log(error));

const cors = require("cors");

const app = express();
const corsOptions = {
    origin: ['http://localhost:3000', 'http://127.0.0.1:3000'],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  };
  
  app.use(function (req, res, next) {

    res.setHeader('Access-Control-Allow-Origin', 'https://trello-clone-backend-mu.vercel.app/');

    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.get("/", (req, res) => res.send("Express on Vercel"));
app.use(cors());
app.use(express.json());

app.use("/api/v1", rootRouter);

app.listen(5000);

module.exports = app;
