var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const session = require('express-session');
const authRoutes = require('./routes/auth');
const passport = require('./config/passport');


mongoose.Promise = global.Promise;

mongoose.connect('mongodb+srv://admin:1234@cluster0.l2gof3b.mongodb.net/?retryWrites=true&w=majority')
      .then(() => console.log('conection successfully'))
      .catch((err) => console.log(err))

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var products = require('./routes/products')
var emp_leaves = require('./routes/emp_leaves');
var emp_users = require('./routes/emp_users');
var login_user = require('./routes/login_user');

var app = express();
const corsOptions = {
  origin: 'http://localhost:3000',
  credentials: true,
};
app.use(cors(corsOptions))

// ใช้ body-parser middleware เพื่ออ่านข้อมูลที่ส่งมาในรูปแบบ JSON
app.use(bodyParser.json());
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({ secret: 'secret', resave: false, saveUninitialized: false }));
app.use(passport.initialize());
app.use(passport.session());

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/products', products);
app.use('/emp_leaves', emp_leaves);
app.use('/emp_users',emp_users);
app.use('/login',login_user);
app.use('/auth', authRoutes);

app.get('/api/user', passport.authenticate('jwt', { session: false }), (req, res) => {
  // User data available in req.user
  res.json({ user: req.user });
});

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

module.exports = app;
