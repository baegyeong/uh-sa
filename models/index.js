const Sequelize = require('sequelize');

const env = process.env.NODE_ENV || 'development';
const config = require('../config/config')[env];

const Mbti = require('./mbti');
const Sinseo = require('./sinseo');
const User = require('./user');
const Commonsense = require('./commonsense');

// connecting to a database
const sequelize = new Sequelize(
  config.database, 
  config.username, 
  config.password, 
  config
);

// add db object
const db = {};
db.sequelize = sequelize; 
db.mbti = Mbti;
db.sinseo = Sinseo;
db.user = User;
db.commonsense = Commonsense;

// Sequelize adds a getter & a setter for each attribute defined through Model.init
Mbti.init(sequelize);
Sinseo.init(sequelize);
User.init(sequelize);
Commonsense.init(sequelize);

module.exports = db;