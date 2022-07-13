var express = require('express');
const router = express.Router();

router.get('/', function(req, res) {
    res.render('main');
});

router.get('/balance_start', function(req, res) {
    res.render('balance_start');
});

router.get('/balance_start', function(req, res) {
    res.render('balance_start');
});
module.exports = router;