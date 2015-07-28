'use strict';

angular.module('geojson')
.controller('userCtrl', userCtrl);

function userCtrl($scope) {
    $scope.savePerson = function(firstname, lastname) {
        var PeopleObject = Parse.Object.extend("PeopleObject");
        var person = new PeopleObject();
        person.set("firstname", firstname);
        person.set("lastname", lastname);
        person.save(null, {});
    };
}