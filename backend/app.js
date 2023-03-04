const express = require('express');
const app = express()
const port = process.env.port || 5000;
const mongoose = require("mongoose");
const { mongoUrl } = require("./keys");
const cors = require("cors");
const path = require("path")

app.use(cors())
require('./models/model')
app.use(express.json())
app.use(require("./routes/auth"))
mongoose.connect(mongoUrl);

mongoose.connection.on("connected", () => {
    console.log("MongoDB connection successfull ...")
})

mongoose.connection.on("error", () => {
    console.log("MongoDB connection error !!!")
})


const server = app.listen(port, () => {
    console.log("Server is running on port" + " " + port + " ...")

})

