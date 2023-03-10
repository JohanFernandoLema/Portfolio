import express from 'express';

//need passport functionality
import passport from 'passport';

//need to include the User model for authentication functions
import User from '../Models/user';

//Display functions
export function DisplayLoginPage(req: express.Request, res: express.Response, next: express.NextFunction)
{
    res.render('index', {title: "Login", page: 'login', messages: req.flash('loginMessage'), displayName: ''});
}

export function DisplayRegisterPage(req: express.Request, res: express.Response, next: express.NextFunction)
{
    res.render('index', {title: "Register", page: 'register', message: req.flash('registerMessage'), displayName: ''});
}

//Process functions
export function ProcessLoginPage(req: express.Request, res: express.Response, next: express.NextFunction)
{

}

export function ProcessRegiterPage(req: express.Request, res: express.Response, next: express.NextFunction)
{

}

export function ProcessLogoutPage(req: express.Request, res: express.Response, next: express.NextFunction)
{
    
}
