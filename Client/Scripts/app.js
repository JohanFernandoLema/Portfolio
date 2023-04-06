"use strict";
(function () {
    function Start() {
        console.log("App Started!");
        let XHR = new XMLHttpRequest();
        XHR.open("GET", "../data/data.json");
        XHR.send();
        XHR.addEventListener("readystatechange", function () {
            if (XHR.readyState == 4 && XHR.status == 200) {
                console.log("JSON Data:");
                console.log("===========");
                console.log(XHR.responseText);
            }
        });
    }
    window.addEventListener("load", Start);
})();
const primaryNav = document.querySelector('.primary-navigation');
const navToggle = document.querySelector(".mobile-nav-toggle");
navToggle.addEventListener('click', function () {
    const visibility = primaryNav.getAttribute('data-visible');
    if (visibility === "false") {
        primaryNav.setAttribute("data-visible", "true");
        navToggle.setAttribute("aria-expanded", "true");
    }
    else if (visibility === "true") {
        primaryNav.setAttribute("data-visible", "false");
        navToggle.setAttribute("aria-expanded", "true");
    }
});
//# sourceMappingURL=app.js.map