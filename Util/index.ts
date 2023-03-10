import express from 'express';

//Convinience function to return displayName of the user
export function UserDisplayName(req: express.Request): string
{   
    if(req.user)
    {
        let user = req.user as UserDocument
        return user.DisplayName.toString();
    }
    return '';
}

//helper function for guarding secure locations
export function AuthGuard(req: express.Request, res: express.Response, next: express.NextFunction)
{
    if(!req.isAuthenticated)
    {
        return res.redirect('/login');
    }
    next();
}