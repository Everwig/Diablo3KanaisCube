(function () {
    var cubeItemsApp = angular.module("cubeItems", ["ui.bootstrap"]);

    cubeItemsApp.controller("cubeItemsController", function ($scope, $http) {
        var maxItemNumber = 0;
        var cubedSeasonal = 0;
        var cubedNonSeasonal = 0;
        var json = null;
        $scope.showExport = false;

        $http.get('repository/2.4.json').success(function (data) {
            $scope.json = data;
            maxItemNumber = data.Weapons.length + data.Armors.length + data.Jewelry.length;
            json = data;
        });

        $scope.trim = function (name) {
            name = name.replace(/[',\.\s]/g, "");
            return name;
        };

        $scope.checkboxEvaluate = function (id, checked) {
            localStorage.setItem(id, checked);
        };

        $scope.checkAgainstLocalStorage = function (name) {
            var placeOfRow = name.indexOf("Row") - 1;
            if (placeOfRow > 0 && localStorage.getItem("hideCubed") === "true") {
                if (localStorage.getItem(name.substring(0, placeOfRow) + " isCubedSeason") === "true" || localStorage.getItem(name.substring(0, placeOfRow) + " isCubedNonSeason") === "true") {
                    return true;
                }
                return false;
            }
            else {
                return localStorage.getItem(name) === "true";
            }
        };

        $scope.seasonalProgressBar = function () {
            getAllStoredItems();
            return cubedSeasonal / maxItemNumber * 100;
        };

        $scope.nonSeasonalProgressBar = function () {
            getAllStoredItems();
            return cubedNonSeasonal / maxItemNumber * 100;
        };

        $scope.toggleExport = function() {
            $scope.showExport = !$scope.showExport;
            exportLocalStorage();
        };

        function getAllStoredItems() {
            cubedSeasonal = 0;
            cubedNonSeasonal = 0;

            for (var i = 0; i < localStorage.length; i++) {
                if (localStorage.key(i).indexOf("isCubedNonSeason") > 0) {
                    if (localStorage.getItem(localStorage.key(i)) === "true") {
                        cubedNonSeasonal++;
                    }
                } else if (localStorage.key(i).indexOf("isCubedSeason") > 0) {
                    if (localStorage.getItem(localStorage.key(i)) === "true") {
                        cubedSeasonal++;
                    }
                }
            }
        }

        function exportLocalStorage() {
            json.seasonalProgressBar = ("true" === localStorage.getItem("seasonalProgressBar"));
            json.nonSeasonalProgressBar = ("true" === localStorage.getItem("nonSeasonalProgressBar"));
            json.hideSeasonalCheckboxes = ("true" === localStorage.getItem("hideSeasonalCheckboxes"));
            json.hideNonSeasonalCheckboxes = ("true" === localStorage.getItem("hideNonSeasonalCheckboxes"));
            json.hideCubedNonSeason = ("true" === localStorage.getItem("hideCubedNonSeason"));
            json.hideCubed = ("true" === localStorage.getItem("hideCubed"));
            search(json);

            $("#export").text(JSON.stringify(json));
        }

        function search(jsonObj) {
            //Cycle through all the localStorageItems
            for (var j = 0; j < localStorage.length; j++) {
                var itemName = localStorage.key(j).substring(0, localStorage.key(j).indexOf(" is"));
                var storageType = localStorage.key(j).substring(localStorage.key(j).indexOf(" is") + 1);
                /*
                Cycle through json to get all arrays, if an array found it checks if it is stored in
                an the localStorage or not, if yes the json value is overwritten by the localStorage one
                */

                for (var i in jsonObj) {
                    if ($.isArray(jsonObj[i])) {
                        for (var k = 0; k < jsonObj[i].length; k++) {
                            if (jsonObj[i][k].itemName === itemName) {
                                
                                jsonObj[i][k][storageType] = (localStorage.getItem(localStorage.key(j)) === "true");
                            }
                        }
                    }
                }
            }
        }
    });

    cubeItemsApp.controller("tabController", function () {
        this.tab = 1;
        this.setTab = function (selectedValue) {
            this.tab = selectedValue;
        };
        this.isSet = function (givenTab) {
            return this.tab === givenTab;
        };
    });

    cubeItemsApp.controller("importSettingsController", function ($scope) {
        $scope.importToLocalStorage = function() {
            var json = jQuery.parseJSON(document.getElementById("import").value);
            localStorage.setItem("seasonalProgressBar", json.seasonalProgressBar);
            localStorage.setItem("nonSeasonalProgressBar", json.nonSeasonalProgressBar);
            localStorage.setItem("hideSeasonalCheckboxes", json.hideSeasonalCheckboxes);
            localStorage.setItem("hideNonSeasonalCheckboxes", json.hideNonSeasonalCheckboxes);
            localStorage.setItem("hideCubedNonSeason", json.hideCubedNonSeason);
            localStorage.setItem("hideCubed", json.hideCubed);
            saveToLocalStorage(json);
            location.reload();
        };

        function saveToLocalStorage(jsonObj) {
            for (var i in jsonObj) {
                if ($.isArray(jsonObj[i])) {
                    for (var j = 0; j < jsonObj[i].length; j++) {
                        var name = jsonObj[i][j].itemName;                        
                        localStorage.setItem(name + " isCubedNonSeason", jsonObj[i][j].isCubedNonSeason);
                        localStorage.setItem(name + " isCubedSeason", jsonObj[i][j].isCubedSeason);
                        localStorage.setItem(name + " isStashed", jsonObj[i][j].isStashed);
                    }
                }
            }
        }

    });
})();