$("input:checkbox").click(function () {
    localStorage.setItem(this.id, this.checked);
    getEveryExtractedItem();
    hideSeasonalProgressBar();
    hideNonSeasonalProgressBar();
    hideTheCheckBoxes();
    if (this.id.indexOf("Stashed") === -1) {
        hideRows(getNameFromId(this.id));
    }
});

$(document).ready(function () {
    $("input:checkbox").each(function () {
        if (localStorage.getItem(this.id) === "true") {
            $("#" + this.id).prop("checked", localStorage.getItem(this.id));
            console.log(this.id);
            if (this.id.indexOf("Stashed") === -1) {
                hideRows(getNameFromId(this.id));
            }
        }
    });
    getEveryExtractedItem();
    hideSeasonalProgressBar();
    hideNonSeasonalProgressBar();
    hideTheCheckBoxes();
});

function updateProgressBar(seasonal, nonseasonal) {

    $.getJSON("./Repository/2.4.json", function (data) {
        var items = data["Weapons"].length + data["Jewelry"].length + data["Armors"].length;
        $("#seasonal").find(".progress-bar").css("width", (seasonal / items) * 100 + "%");
        $("#seasonal").find(".progress-text").text(Math.floor((seasonal * 100 / items)) + "% Complete");
        $("#non-seasonal").find(".progress-bar").css("width", (nonseasonal / items) * 100 + "%");
        $("#non-seasonal").find(".progress-text").text(Math.floor((nonseasonal * 100 / items)) + "% Complete");
        $("#all").find(".progress-bar").css("width", (nonseasonal + seasonal) * 100 / (items * 2) + "%");
        $("#all").find(".progress-text").text(Math.floor(((nonseasonal + seasonal) * 100 / (items * 2))) + "% Complete");
    });
};

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
};

function hideSeasonalProgressBar() {
    if (localStorage.getItem("SeasonalProgressBar") === "true") {
        $("#seasonal").css("display", "none");
        $("#seasonaldisp").css("display", "none");
    } else {
        $("#seasonal").css("display", "block");
        $("#seasonaldisp").css("display", "block");
    }
};

function hideNonSeasonalProgressBar() {
    if (localStorage.getItem("NonSeasonalProgressBar") === "true") {
        $("#non-seasonal").css("display", "none");
        $("#non-seasonaldisp").css("display", "none");
    } else {
        $("#non-seasonal").css("display", "block");
        $("#non-seasonaldisp").css("display", "block");
    }
}
function hideTheCheckBoxes() {
    if (localStorage.getItem("HideNonSeasonalCheckboxes") === "true") {
        $("td:nth-child(4),th:nth-child(4)").hide();
    } else {
        $("td:nth-child(4),th:nth-child(4)").show();
    }
    if (localStorage.getItem("HideSeasonalCheckboxes") === "true") {
        $("td:nth-child(3),th:nth-child(3)").hide();
    } else {
        $("td:nth-child(3),th:nth-child(3)").show();
    }
}

function hideRows(name) {
    if (localStorage.getItem("HideCubed") === "true") {
        $("tr[name='" + name + "']").css("display", "none");
    } else {
        $("tr[name='" + name + "']").css("display", "table-row");
    }
}

function getNameFromId(id) {
    if (id.indexOf("Is") > 0) {
        return id.split("Is")[0]+"Row";
    }
    return null;
}