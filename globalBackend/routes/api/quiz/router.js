var express = require('express');
var router = express.Router();

const quizData = require('./quizData');

router.get('/get', function(req, res, next) {
    let quiz = {...quizData}.questions;
    for (let i of quiz) {
        i.correctAnswer = undefined;
    }
    res.json(quiz);
});

router.post('/check', function(req, res, next) {
    let quiz = quizData.questions;
    let score = 0;
    for (let i = 0; i < quiz.length; i++) {
        if (quiz[i].correctAnswer === req.body[i]) {
            score++;
        }
    }
    if (score === quiz.length) {
        //TODO: Give user a discount code
    }
    res.json({
        score
    });
});

module.exports = router;
