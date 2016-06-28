angular.module('myApp.pageOne', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/pageOne', {
    templateUrl: 'views/pageOne.html',
    controller: 'PageOneCtrl'
  });
}])

.controller('PageOneCtrl', ['$scope',function($scope) {
 
 }]);