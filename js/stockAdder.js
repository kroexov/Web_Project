/*(function($){})(jQuery);*/

/*$(document).ready(function() {
    setInterval(window.onload = function () {

        document.getElementById('reviews').addEventListener('submit', function (e) {
            GetStock();
        })

    });
});*/

async function GetStock(){
    var stocks = new Stocks('2TID4B9EQDA8974C');
    var options = {
        symbol: 'AAPL',
        interval: 'weekly',
        amount: 52
    };
    var result = await stocks.timeSeries(options);
    var anotherRes = 0;
    alert(result);
}