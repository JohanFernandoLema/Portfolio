import createError from 'http-errors';
import express, { NextFunction } from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';

//import db package
import mongoose from 'mongoose';


import session from 'express-session';
import passport from 'passport';
import passportLocal from 'passport-local';
import flash from 'connect-flash';


import cors from 'cors';

let localStrategy = passportLocal.Strategy;


//import the router data
import indexRouter from '../Routes/index';
import movieListRouter from '../Routes/movie-list';


const app = express();


//DB configuaration import
import * as DBconfig from "./db";
mongoose.connect(DBconfig.LocalURI);

const db = mongoose.connection;

db.on("open", function()
{
  console.log(`Connected at mongoDB at: ${DBconfig.HostName}`);
});

db.on("error", function()
{
  console.error("Connection Error");
});

// view engine setup
app.set('views', path.join(__dirname, '../Views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../../Client')));
app.use(express.static(path.join(__dirname, '../../node_modules')));

app.use(cors());

//For auth - set up express session
app.use(session({
  secret: DBconfig.Secret,
  saveUninitialized: false,
  resave:false
}));

//Set up flash
app.use(flash());

//initialize passport and session
app.use(passport.initialize());
app.use(passport.session());



//Use Routes
app.use('/', indexRouter);
app.use('/', movieListRouter);

  

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err: createError.HttpError, req:express.Request, res: express.Response, next: NextFunction) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

export default app;
