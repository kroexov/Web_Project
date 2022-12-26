window.onload = function () {
    var t = document.getElementById("table");
    var trs = t.getElementsByTagName("tr");
    var tds = null;

    for (var i=1; i<trs.length; i++)
    {
        tds = trs[i].getElementsByTagName("td");
        if (parseFloat(tds[3].innerHTML) >= 0.0)
            tds[3].style["color"] = "green";
        else
            tds[3].style["color"] = "red";
    }
}

