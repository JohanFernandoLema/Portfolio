import express from 'express';
const router = express.Router();

/*Import controller modules*/
import {DisplayHomePage} from '../Controllers/index';
import {DisplayAboutPage} from '../Controllers/index';
import {DisplayProjectsPage} from '../Controllers/index';
import {DisplayServicesPage} from '../Controllers/index';
import {DisplayContactPage} from '../Controllers/index';



/* GET home page. */
router.get('/', DisplayHomePage);

/* GET home page. */
router.get('/home', DisplayHomePage);

/* GET About page. */
router.get('/about', DisplayAboutPage) ;

/* GET Projects page. */
router.get('/projects', DisplayProjectsPage);

/* GET Services page. */
router.get('/services', DisplayServicesPage);

/* GET Contact page. */
router.get('/contact', DisplayContactPage);


export default router;
