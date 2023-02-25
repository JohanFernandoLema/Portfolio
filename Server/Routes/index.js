"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const index_1 = require("../Controllers/index");
const index_2 = require("../Controllers/index");
const index_3 = require("../Controllers/index");
const index_4 = require("../Controllers/index");
const index_5 = require("../Controllers/index");
router.get('/', index_1.DisplayHomePage);
router.get('/home', index_1.DisplayHomePage);
router.get('/about', index_2.DisplayAboutPage);
router.get('/projects', index_3.DisplayProjectsPage);
router.get('/services', index_4.DisplayServicesPage);
router.get('/contact', index_5.DisplayContactPage);
exports.default = router;
//# sourceMappingURL=index.js.map