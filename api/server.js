const express = require("express");
const rootRouter = require("../routes/index");
const mongoose = require("mongoose");
require("dotenv").config();
mongoose.connect(process.env.DATABASE_URL).then(console.log("connexr")).catch((error) => console.log(error));

const cors = require("cors");

const app = express();

app.get("/", (req, res) => res.send("Express on Vercel"));
app.use(cors());
app.use(express.json());

app.use("/api/v1", rootRouter);

app.listen(5000);

module.exports = app;
