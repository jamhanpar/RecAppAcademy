const express = require('express');
const router = express.Router();

const Question = require('../../models/question');      // ODM

// router.get('/', (req, res) => {
//     Question.find()
//         .then(questions => res.json(questions))
//             .catch(err => res.status(404).json(err))
// });

router.get("/", (req, res) => {
    const names = [];
    Question.find()
        .then((questions) => {
            questions.forEach(question => {
                names.push(question.name)
            })
        })
        .then(res.json(names))
        .catch((err) => res.status(404).json(err));
});

// const res = {
//     questions: {
//         _id: {
//             name: '',
//             content: '',
//             live: '',
//             repo: ''
//         }
//     }
// }

router.post('/', (req, res) => {
    const newQuestion = new Question({
        name: req.body.name,
        content: req.body.content
    })

    newQuestion
        .save()
        .then(question => res.json(question))
        .catch(err => res.status(404).json(err))
});

module.exports = router