// var app = angular.module('App',['ngRoute']);


// App.controller ('Controller1', ['$scope', function($scope){

// }]);

angular.module('myApp.home', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {
    templateUrl: 'views/home.html',
    controller: 'HomeCtrl'
  });
}])

.controller('HomeCtrl', ['$scope',function($scope) {
 
 }]);
