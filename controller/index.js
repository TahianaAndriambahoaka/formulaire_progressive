var app = angular.module("app", []);

app.controller("ctrl", function ctrl($scope, $http) {

    $scope.show = null;
    var liste = [];

    $scope.un1Fonc = function() {
        alert("Vous avez choisi " + document.getElementById("un1").innerHTML);
        liste.push(document.getElementById("un1").innerHTML);
    };

    $scope.un2Fonc = function() {
        alert("Vous avez choisi " + document.getElementById("un2").innerHTML);
        liste.push(document.getElementById("un2").innerHTML);
    };

    $scope.deux1Fonc = function() {
        alert("Vous avez choisi " + document.getElementById("deux1").innerHTML);
        liste.push(document.getElementById("deux1").innerHTML);
    };

    $scope.deux2Fonc = function() {
        alert("Vous avez choisi " + document.getElementById("deux2").innerHTML);
        liste.push(document.getElementById("deux2").innerHTML);
    };

    $scope.trois1Fonc = function() {
        alert("Vous avez choisi " + document.getElementById("trois1").innerHTML);
        liste.push(document.getElementById("trois1").innerHTML);
    };

    $scope.trois2Fonc = function() {
        alert("Vous avez choisi " + document.getElementById("trois2").innerHTML);
        liste.push(document.getElementById("trois2").innerHTML);
    };

    $scope.valider = function() {
        $scope.liste = liste;
        $scope.show = "Voici la liste de vos choix";
    };

});