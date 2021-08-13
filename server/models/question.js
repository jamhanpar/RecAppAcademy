// Object Data Map aka Mongoose to retrieve non-relational data
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// A question has the following properties/characteristics
const QuestionSchema = Schema({
    name: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    live: {
        type: String
    },
    repo: {
        type: String
    }
}, {timestamps: true})

// creating a Question instance using mongoose and the question schema
module.exports = Question = mongoose.model('Question', QuestionSchema);