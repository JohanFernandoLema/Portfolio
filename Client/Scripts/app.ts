//IIFE
(function()
{
    function Start()
    {
        console.log("App Started!");

        // use AJAX to read JSON file

        // Step 1: Create a new XHR object
        let XHR = new XMLHttpRequest();

        // Step 2: Create the request
        XHR.open("GET", "../data/data.json");

        // Step 3: Send the request
        XHR.send();

        // Step 4: create an event listener/handler
        XHR.addEventListener("readystatechange", function()
        {
            if(XHR.readyState == 4 && XHR.status == 200)
            {
                console.log("JSON Data:");
                console.log("===========");
                console.log(XHR.responseText);
            }
        });
    }
    window.addEventListener("load", Start);
})();

const primaryNav = document.querySelector('.primary-navigation') as HTMLButtonElement;
const navToggle = document.querySelector(".mobile-nav-toggle") as HTMLButtonElement;
navToggle.addEventListener('click', function () {
    const visibility = primaryNav.getAttribute('data-visible');
    if(visibility === "false")
    {
        primaryNav.setAttribute("data-visible", "true");
        navToggle.setAttribute("aria-expanded", "true");
    }else if(visibility === "true") 
    {
        primaryNav.setAttribute("data-visible", "false");
        navToggle.setAttribute("aria-expanded", "true");
    }
});


