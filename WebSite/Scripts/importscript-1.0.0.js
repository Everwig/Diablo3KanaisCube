function importToLocalStorage() {
    var json = jQuery.parseJSON(document.getElementById("import").value);
    localStorage.setItem("SeasonalProgressBar", json.SeasonalProgressBar);
    localStorage.setItem("NonSeasonalProgressBar", json.NonSeasonalProgressBar);
    localStorage.setItem("HideSeasonalCheckboxes", json.HideSeasonalCheckboxes);
    localStorage.setItem("HideNonSeasonalCheckboxes", json.HideNonSeasonalCheckboxes);
    localStorage.setItem("HideCubedNonSeason", json.HideCubedNonSeason);
    localStorage.setItem("HideCubed", json.HideCubed);
    set(json);
    location.reload();
}

function set(jsonObj) {
    for (var i in jsonObj) {
        if ($.isArray(jsonObj[i])) {
            for (var j = 0; j < i.length; j++) {
                var name = trimName(jsonObj[i][j].ItemName);
                localStorage.setItem(name + "IsCubedNonSeason", jsonObj[i][j].IsCubedNonSeason);
                localStorage.setItem(name + "IsCubedSeason", jsonObj[i][j].IsCubedSeason);
                localStorage.setItem(name + "IsStashed", jsonObj[i][j].IsStashed);
            }
        }
    }
}