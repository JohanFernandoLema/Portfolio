import express from 'express';

//need passport functionality
import passport from 'passport';

//need to include the User model for authentication functions
import User from '../Models/user';

import { UserDisplayName } from '../Util';

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
    passport.authenticate('local', function(err, user, info)
    {
        if(err)
        {
            console.error(err);
            res.end(err);
        }

        if(!user)
        {
            req.flash('loginMessage', 'Authentication Error!');
            return res.redirect('/login');
        }

        //no problems - user and password are correct
        req.logIn(user, function(err)
        {
            if(err)
            {
                console.error(err);
                res.end(err);
            }

            return res.redirect('/movie-list');
        });
    })(req, res, next);
}

export function ProcessRegiterPage(req: express.Request, res: express.Response, next: express.NextFunction)
{

}

export function ProcessLogoutPage(req: express.Request, res: express.Response, next: express.NextFunction)
{
    
}
