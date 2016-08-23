$("input:checkbox").click(function () {
    localStorage.setItem(this.id, this.checked);
    getEveryExtractedItem();
    hideTheBars();
    hideTheCheckBoxes();
    if (this.id.indexOf("Stashed") === -1) {
        hideRows(getNameFromId(this.id));
    }
});

$(document).ready(function () {
    $("input:checkbox").each(function () {
        if (localStorage.getItem(this.id) === "true") {
            $("#" + this.id).prop("checked", localStorage.getItem(this.id));
            if (this.id.indexOf("Stashed") === -1) {
                hideRows(getNameFromId(this.id));
            }
        }
    });
    getEveryExtractedItem();
    hideTheBars();
    hideTheCheckBoxes();
});

function updateProgressBar(seasonal, nonseasonal) {

    $.getJSON("./Repository/2.4.json", function (data) {
        var items = data["Weapons"].length + data["Jewelry"].length + data["Armors"].length;
        $("#seasonal").find(".progress-bar").css("width", (seasonal / items) * 100 + "%");
        $("#seasonal").find(".progress-text").text(Math.round((seasonal * 100 / items)) + "% Complete");
        $("#non-seasonal").find(".progress-bar").css("width", (nonseasonal / items) * 100 + "%");
        $("#non-seasonal").find(".progress-text").text(Math.round((nonseasonal * 100 / items)) + "% Complete");
        $("#all").find(".progress-bar").css("width", (nonseasonal / items) * 100 + "%");
        $("#all").find(".progress-text").text(Math.round(((nonseasonal + seasonal) * 100 / items)) + "% Complete");
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

function hideTheBars() {
    if (localStorage.getItem("SeasonalProgressBar") === "true") {
        $("#seasonal").css("display", "none");
    } else {
        $("#seasonal").css("display", "block");
    }
    if (localStorage.getItem("NonSeasonalProgressBar") === "true") {
        $("#non-seasonal").css("display", "none");
    } else {
        $("#non-seasonal").css("display", "block");
    }
    if (localStorage.getItem("BothProgressBar") === "true") {
        $("#seasonal").css("display", "none");
        $("#non-seasonal").css("display", "none");
    } else {
        $("#seasonal").css("display", "block");
        $("#non-seasonal").css("display", "block");
    }
};

function hideTheCheckBoxes() {
    if (localStorage.getItem("HideNonSeasonalCheckboxes") === "true") {
        $("input[name='item.IsCubedSeason']").css("display", "none");
    } else {
        $("input[name='item.IsCubedSeason']").css("display", "inline-block");
    }
    if (localStorage.getItem("HideSeasonalCheckboxes") === "true") {
        $("input[name='item.IsCubedNonSeason']").css("display", "none");
    } else {
        $("input[name='item.IsCubedNonSeason']").css("display", "inline-block");
    }
}

function hideRows(name) {
    if (localStorage.getItem("HideCubed") === "true") {
        $("tr[name='" + name + "']").css("display", "none");
    } else {
        $("tr[name='" + name + "']").css("display", "table-row");
    }
    if (localStorage.getItem("HideCubedNonSeason") === "true") {
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