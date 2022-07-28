var express = require("express");
const router = express.Router();

const User = require("../models/user");
const Sinseo = require("../models/sinseo");
const Commonsense = require("../models/commonsense");

//친해지길 바라 page (3개의 카테고리 중 선택)
router.get("/", function (req, res) {
  res.render("game_choice");
});

//
router.get("/sinseo", function (req, res) {
  res.render("people_quiz_start");
});

router.get("/sinseo/player", function (req, res) {
  res.render("people_quiz_player");
});

router.get("/sinseo/help", function (req, res) {
  res.render("people_quiz_help");
});

router.get("/sinseo/peoplequiz", function (req, res) {
  res.render("people_quiz");
});

//신서유기 게임 page
router.get("/api/sinseo", async function (req, res, next) {
  try {
    const sinseo = await Sinseo.findAll();
    console.log(sinseo);
    res.send(sinseo);
  } catch (err) {
    console.err(err);
    next(err);
  }
});

//상식 퀴즈 page
router.get("/commonsense", function (req, res) {
  res.render("commonsense_start");
});
router.get("/commonsense/player", function (req, res) {
  res.render("commonsense_player");
});
router.get("/commonsense/help", function (req, res) {
  res.render("commonsense_help");
});
router.get("/commonsense/quiz", function (req, res) {
  res.render("commonsense");
});

router.get("/api/commonsense", async function (req, res, next) {
  try {
    const commonsense = await Commonsense.findAll();
    res.send(commonsense);
  } catch (err) {
    console.error(err);
    next(err);
  }
});

//ranking 표시 및 등록
router.get("/users/:category", function (req, res) {
  res.render("ranking");
});

router.get("/ranking_save", function (req, res) {
  res.render("ranking_save");
});

router
  .route("/api/users/:category")
  .get(async function (req, res, next) {
    try {
      let category = req.params.category;
      const user = await User.findAll({
        attributes: ["category", "username", "score"],
        order: [["score", "DESC"]],
        limit: 10,
        where: { category },
      });
      res.send(user);
    } catch (err) {
      console.error(err);
      next(err);
    }
  })
  .post(async (req, res, next) => {
    try {
      const user = await User.create({
        category: req.params.category,
        username: req.body.username,
        score: req.body.score,
      });
      console.log(user);
      res.status(201).send(user);
    } catch (err) {
      console.log(err);
      console.error(err);
      next(err);
    }
  });

//더 많은 게임 page
router.get("/moregame", function (req, res, next) {
  res.render("more_game");
});

module.exports = router;
