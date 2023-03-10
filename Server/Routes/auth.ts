import express from 'express';
const router = express.Router();

/*Import controller modules*/
import {DisplayLoginPage} from '../Controllers/auth';
import {DisplayRegisterPage} from '../Controllers/auth';
import {ProcessLoginPage} from '../Controllers/auth';
import {ProcessRegiterPage} from '../Controllers/auth';
import {ProcessLogoutPage} from '../Controllers/auth';

/* GET home page. */
router.get('/login', DisplayLoginPage);

/* GET About page. */
router.get('/register', DisplayRegisterPage) ;

/* Post login page. */
router.get('/login', ProcessLoginPage);

/* Post register page. */
router.get('/register', ProcessRegiterPage);

/* GET logout page. */
router.get('/logout', ProcessLogoutPage);


export default router;
