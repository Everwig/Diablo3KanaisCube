$("input:checkbox").click(function () {
    localStorage.setItem(this.id, this.checked);
    getEveryExtractedItem();
});

$(document).ready(function () {
    $("input:checkbox").each(function () {
        if (localStorage.getItem(this.id) === "true") {
            $("#" + this.id).prop("checked", localStorage.getItem(this.id));
        }
    });
    getEveryExtractedItem();
});

function updateProgressBar(seasonal, nonseasonal) {

    $.getJSON("./Repository/2.4.json", function (data) {
        var items = data["Weapons"].length + data["Jewelry"].length + data["Armors"].length;
        $("#seasonal").find(".progress-bar").css("width", (seasonal / items) * 100 + "%");
        $("#seasonal").find(".progress-text").text(Math.round((seasonal * 100 / items)) + "% Complete");
        $("#non-seasonal").find(".progress-bar").css("width", (nonseasonal / items) * 100 + "%");
        $("#non-seasonal").find(".progress-text").text(Math.round((nonseasonal * 100 / items)) + "% Complete");
    });
}

function getEveryExtractedItem() {
    var seasonal = 0;
    var nonseasonal = 0;

    for (var i = 0; i < localStorage.length; i++)
    {   
        if (localStorage.key(i).indexOf("CubedNonSeason") > 0) {
            if (localStorage.getItem(localStorage.key(i)) === "true") {
                nonseasonal++;
            }
        } else if (localStorage.key(i).indexOf("CubedSeason") > 0) {
            if (localStorage.getItem(localStorage.key(i)) === "true") {
                seasonal++;
            }
        }
    }
    updateProgressBar(seasonal, nonseasonal);
}