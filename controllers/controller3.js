angular.module('myApp.pageTwo', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/pageTwo', {
    templateUrl: 'views/pageTwo.html',
    controller: 'PageTwoCtrl'
  });
}])

.controller('PageTwoCtrl', ['$scope',function($scope) {
 
 }]);