function trimName(name) {
    name = name.replace(/[',\.\s]/g, "");
    return name;
}

function exportLocalStorage() {
    var json = jQuery.parseJSON($("textarea").text());
    json.SeasonalProgressBar = ("true" === localStorage.getItem("SeasonalProgressBar"));
    json.NonSeasonalProgressBar = ("true" === localStorage.getItem("NonSeasonalProgressBar"));
    json.HideSeasonalCheckboxes = ("true" === localStorage.getItem("HideSeasonalCheckboxes"));
    json.HideNonSeasonalCheckboxes = ("true" === localStorage.getItem("HideNonSeasonalCheckboxes"));
    json.HideCubedNonSeason = ("true" === localStorage.getItem("HideCubedNonSeason"));
    json.HideCubed = ("true" === localStorage.getItem("HideCubed"));
    
    search(json);
    
    $("textarea").text(JSON.stringify(json));
    $("textarea").css("display", "inline-block");
}

function search(jsonObj) {
    //Cycle through all the localStorageItems
    for (var j = 0; j < localStorage.length; j++) {
        var itemName = localStorage.key(j).substring(0, localStorage.key(j).indexOf("Is"));
        var storageType = localStorage.key(j).substring(localStorage.key(j).indexOf("Is"));
        
        /*
        Cycle through json to get all arrays, if an array found it checks if it is stored in
        an the localStorage or not, if yes the json value is overwritten by the localStorage one
        */
        for (var i in jsonObj) {
            if ($.isArray(jsonObj[i])) {
                for (var k = 0; k < i.length; k++) {
                    if (trimName(jsonObj[i][k].ItemName) == itemName)
                    {
                        jsonObj[i][k][storageType] = localStorage.getItem(localStorage.key(j));
                    }
                }
            }
        }
    }
}