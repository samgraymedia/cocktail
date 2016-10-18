'use strict';
angular.module("drinkListApp")
.service('dataService', function($http){
  this.getDrinks = function(callback){
    $http.get('mock/drinks.json')
      .then(callback);
};
this.deleteDrink = function(drink) {
  console.log("The " + drink.name + " drink has been deleted!");
};


this.saveDrinks = function(drink) {
  console.log(drink.length + " drinks have been saved");
};


});
