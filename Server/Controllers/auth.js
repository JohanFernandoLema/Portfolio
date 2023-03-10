"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProcessLogoutPage = exports.ProcessRegiterPage = exports.ProcessLoginPage = exports.DisplayRegisterPage = exports.DisplayLoginPage = void 0;
function DisplayLoginPage(req, res, next) {
    res.render('index', { title: "Login", page: 'login', messages: req.flash('loginMessage'), displayName: '' });
}
exports.DisplayLoginPage = DisplayLoginPage;
function DisplayRegisterPage(req, res, next) {
    res.render('index', { title: "Register", page: 'register', message: req.flash('registerMessage'), displayName: '' });
}
exports.DisplayRegisterPage = DisplayRegisterPage;
function ProcessLoginPage(req, res, next) {
}
exports.ProcessLoginPage = ProcessLoginPage;
function ProcessRegiterPage(req, res, next) {
}
exports.ProcessRegiterPage = ProcessRegiterPage;
function ProcessLogoutPage(req, res, next) {
}
exports.ProcessLogoutPage = ProcessLogoutPage;
//# sourceMappingURL=auth.js.map