var express = require('express');
const path = require('path');

const Mbti = require('../models/mbti');
const router = express.Router();

router.get('/', function(req, res) {
    res.render("mbti_start")
});

router.get('/know', function(req, res) {
    res.render("mbti")
});

router.get('/api/know', function (req, res, next) {
    try {
        const mbti = Mbti.findall();
        res.send(mbti);
    } catch (err){
        console.err(err);
        next(err);
    }
});


module.exports = router;
