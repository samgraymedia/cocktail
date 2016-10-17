'use strict';
angular.module("drinkListApp")
  .controller('mainCtrl', function($scope, dataService){


    dataService.getDrinks(function(response){
      $scope.drinks = response.data;
    });

    $scope.addDrink = function(){
      var drink = {strDrink: "click edit to change value"};
      $scope.drinks.drinks.unshift(drink);
    };

    $scope.saveDrinks = function() {

 };
});
