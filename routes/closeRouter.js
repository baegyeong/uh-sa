var express = require('express');
const router = express.Router();

const { User } = require('../models');
const { Sinseo } = require('../models');
const { Commonsense } = require('../models');
/*

*/
router.get('/', function(req, res) { 
    res.send('<h1>It\'s time to close!</h1>');
});

router.get('/sinseo', function(req, res, next) {
    try {
        const sinseo = Sinseo.findall();
        res.json(sinseo);
    } catch (err){
        console.err(err);
        next(err);
    }
});

router.get('/commonsense', function(req, res, next) {
    try{
        const commonsense = Commonsense.findall();
        res.json(commonsense);
    } catch(err){
        console.error(err);
        next(err);
    }
});

router.route('/users')
    .get(function(req, res, next){ 
        try{
            const user = User.findall({
                attributes: ['username', 'score'],
                order: [['score', 'DESC']],
                limit: 10
              });
              res.json(user);                             
            } catch(err){
            console.error(err);
            next(err);
        }

    })
    .post((req, res, next) => { 
        try{
            const user = User.create({
                category : req.body.category,
                username : req.body.username,
                score : req.body.score,
            });
            console.log(user);
            res.status(201).json(user);
        } catch(err){
            console.error(err);
            next(err);
        }
});

router.get('/moregame', function(req, res, next) {
   //front
});

module.exports = router;