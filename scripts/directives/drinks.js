angular.module('drinkListApp')
.directive('drinks', function(){
  return {
    templateUrl: 'templates/drinks.html',
    controller: "mainCtrl"
  };
});
