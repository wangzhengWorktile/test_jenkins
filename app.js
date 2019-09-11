var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var ErrorTracking = require('@worktile/wt-tracking-sdk-nodejs').ErrorTracking;
var Options = require('@worktile/wt-tracking-sdk-nodejs').Options;
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

const et = new ErrorTracking(
  new Options({
    appId: '5d5a05951e1fc60b9e57f532',
    appKey: '8d070144b33e2f356e927145b68ae8ffa4837014',
    reportMode: 'always',
    reportMultipleResolves: true,
    reportUnhandledRejection: true
  })
);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;