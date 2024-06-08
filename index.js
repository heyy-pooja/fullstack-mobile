const express = require("express")
const mongoose = require("mongoose")
require("dotenv").config({ path: "./.env" })
const cors = require("cors")
const app = express()

app.use(express.json())
app.use(cors())

mongoose.connect(process.env.MONGO_URL)
app.use("/api/todos", require("./routes/todo.routes"))

app.use("*", (req, res) => {
    res.status(404).json({ message: "Resource Not Found" })
})

// error handler
app.use((err, req, res, next) => {
    console.log(err)
    res.status(500).json({ message: err.message || "Something Went Wrong" })
})


mongoose.connection.once("open", () => {
    console.log("MONGO CONNECT")
    app.listen(process.env.PORT, console.log("SERVER RUNNING"))
})