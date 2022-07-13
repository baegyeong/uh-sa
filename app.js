var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var nunjucks = require('nunjucks');

var sequelize = require('./models').sequelize;

sequelize.sync();

const app = express();
const router = express.Router();

// port
app.set('httpPort', 3000);

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'pug');
app.set('view engine', 'html');
nunjucks.configure(path.join(__dirname, './Front/html'), {
  express: app,
  watch: true
});

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, './Front/public')));

var appsRouter = require('./routes/appRouter');
app.use('/app', appsRouter);

var closesRouter = require('./routes/closeRouter');
app.use('/close', closesRouter);

var mainRouter = require('./routes/mainRouter');
app.use('/', mainRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// server start
app.listen(app.get('httpPort'), () => {
  console.log(app.get('httpPort'), '번 포트에서 대기중');
});

module.exports = app;
