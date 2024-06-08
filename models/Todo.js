const mongoose = require("mongoose")

const todoSchema = new mongoose.Schema({

    task: { type: String, required: true },
    desc: { type: String, required: true },
    complete: { type: String, required: true },
})

module.exports = mongoose.model("todo",todoSchema)

// git remote add origin https://github.com/heyy-pooja/fullstack-mobile.git