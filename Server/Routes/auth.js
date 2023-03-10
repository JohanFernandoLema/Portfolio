"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const auth_1 = require("../Controllers/auth");
const auth_2 = require("../Controllers/auth");
const auth_3 = require("../Controllers/auth");
const auth_4 = require("../Controllers/auth");
const auth_5 = require("../Controllers/auth");
router.get('/login', auth_1.DisplayLoginPage);
router.get('/register', auth_2.DisplayRegisterPage);
router.get('/login', auth_3.ProcessLoginPage);
router.get('/register', auth_4.ProcessRegiterPage);
router.get('/logout', auth_5.ProcessLogoutPage);
exports.default = router;
//# sourceMappingURL=auth.js.map