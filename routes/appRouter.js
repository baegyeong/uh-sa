var express = require('express');
const path = require('path');

const { Mbti } = require('../models');
const router = express.Router();

router.get('/', function(req, res) {
    res.send('<h1>It\'s time to know~</h1>');
});

router.get('/know', function (req, res, next) {
    try {
        const mbti = Mbti.findall();
        res.json(mbti);
    } catch (err){
        console.err(err);
        next(err);
    }
});

router.get('/close', function(req, res, next) {
 //front
});

module.exports = router;
