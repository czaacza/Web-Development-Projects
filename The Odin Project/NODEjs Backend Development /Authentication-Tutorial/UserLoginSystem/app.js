// imports
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const session = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcryptjs');

const User = require('./models/userModel');

const mongoDB =
  'mongodb+srv://mati:najak@cluster0.dj5gbnw.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', function () {
  console.log('Connected to DB');
});

const app = express();
app.set('views', `${__dirname}/views`);
app.set('view engine', 'ejs');

app.use(session({ secret: 'cats', resave: false, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.urlencoded({ extended: false }));

passport.use(
  new LocalStrategy(async (username, password, done) => {
    try {
      const user = await User.findOne({ username: username });
      if (!user) {
        return done(null, false, { message: 'Incorrect username' });
      }
      if (bcrypt.compareSync(password, user.password) === false) {
        return done(null, false, { message: 'Incorrect password' });
      }
      return done(null, user);
    } catch (err) {
      return done(err);
    }
  })
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id);
    done(null, user);
  } catch (err) {
    done(err);
  }
});

app.use((req, res, next) => {
  res.locals.user = req.user;
  next();
});

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/sign-up', (req, res) => {
  res.render('sign-up-form');
});

app.post('/sign-up', async (req, res, next) => {
  try {
    bcrypt.hash(req.body.password, 10, async (err, hashedPassword) => {
      if (err) {
        throw new Error('Hashing error');
      }
      const user = new User({
        username: req.body.username,
        password: hashedPassword,
      });
      const result = await user.save();
      if (!result) {
        throw new Error('User not saved');
      }
    });

    res.redirect('/');
  } catch (err) {
    return next(err);
  }
});

app.post(
  '/login',
  passport.authenticate('local', { successRedirect: '/', failureRedirect: '/' })
);

app.get('/logout', function (req, res, next) {
  req.logout(function (err) {
    if (err) {
      return next(err);
    }
    res.redirect('/');
  });
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
