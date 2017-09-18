var app = angular.module("ms", []);
app.controller("msController", ['$scope', function($scope) {
    $scope.navTopMenuItems = [{
        "name": "A",
        "title": "Animation",
        "items": [
            { "name": "Item 1", "url": "animation/item1" },
            { "name": "Item 2", "url": "animation/item2" }
        ]
    }, {
        "name": "P",
        "title": "Photography",
        "items": [
            { "name": "Item 1", "url": "photography/item1" },
            { "name": "Item 2", "url": "photography/item2" }
        ]
    }, {
        "name": "V"
    }, {
        "name": "C"
    }];

    $scope.timelineItems = [{
        "title": "Cloud Capped",
        "image": "cloudcapped.jpg"
    }, {
        "title": "Columbia Mist",
        "image": "columbia_mist.jpg"
    }, {
        "title": "Crater Lake Color",
        "image": "crater_lake_color.jpg"
    }, {
        "title": "Crown Point Autumn",
        "image": "crown_point_autumn.jpg"
    }, {
        "title": "First Snow",
        "image": "first_snow.jpg"
    }, {
        "title": "Golden Field",
        "image": "golden_field.jpg"
    }, {
        "title": "Golden Winter",
        "image": "golden_winter.jpg"
    }];
    
    $scope.currentImage = undefined;
    $scope.setCurrentSlideshow = function (image) {
        $scope.currentImage = image;
    };

    $scope.timelinePinned = false;
}]);