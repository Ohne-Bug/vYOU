var express = require('express');
var router = express.Router();

const quizData = require('./quizData');

router.get('/get', function(req, res, next) {
    res.json(quizData);
});

router.post('/check', function(req, res, next) {
    let quiz = quizData.questions;
    let score = 0;
    for (let i = 0; i < quiz.length; i++) {
        if (req.body[i] && quiz[i].correctAnswer === req.body[i]) {
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
