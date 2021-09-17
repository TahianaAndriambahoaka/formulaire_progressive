var app = angular.module("app", []);

app.controller("ctrl", function ctrl($scope, $http) {

    $scope.show = null;
    var liste = [];

    $scope.un1Fonc = function() {
        liste.push(document.getElementById("un1").innerHTML);
    };

    $scope.un2Fonc = function() {
        liste.push(document.getElementById("un2").innerHTML);
    };

    $scope.deux1Fonc = function() {
        liste.push(document.getElementById("deux1").innerHTML);
    };

    $scope.deux2Fonc = function() {
        liste.push(document.getElementById("deux2").innerHTML);
    };

    $scope.trois1Fonc = function() {
        liste.push(document.getElementById("trois1").innerHTML);
    };

    $scope.trois2Fonc = function() {
        liste.push(document.getElementById("trois2").innerHTML);
    };

    $scope.valider = function() {
        $scope.liste = liste;
        $scope.show = "Voici la liste de vos choix";
    };

});