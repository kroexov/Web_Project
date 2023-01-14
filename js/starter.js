window.addEventListener('load', function () {
    let doc = document.location.pathname.split("/").reverse()[0];
    const nav = document.getElementById('nav').children[0];
    for (i = 0; i<nav.children.length; i++){
        if (nav.children[i].children[0].getAttribute("href") == "#"){
            nav.children[i].classList.toggle('active');
        }
    }
    /*const mainPage = document.getElementById('mainPage');
    const stocksPage = document.getElementById('stocksPage');
    const advicesPage = document.getElementById('advicesPage');
    switch (doc) {
        case "index.html":
            mainPage.classList.toggle('active');
            break;
        case "stocks.html":
            stocksPage.classList.toggle('active');
            break;
        case "advices.html":
            advicesPage.classList.toggle('active');
            break;
    }*/

/*    var loadTime = window.performance.timing.domContentLoadedEventEnd - window.performance.timing.navigationStart;
    const pageLoad = document.getElementById('pageLoad');
    pageLoad.textContent = "loadtime is " + loadTime/1000 + " seconds";*/
});