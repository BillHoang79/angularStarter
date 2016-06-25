// var App = angular.module('App',['ngRoute']);


// App.config(function($routeProvider){
// 	$routeProvider

// 	.when('/',{
// 		templateUrl :"",
// 		controller: ""
// 	})
// 	.when('/',{
// 		templateUrl :"",
// 		controller: ""
// 	})
// 	.when('/',{
// 		templateUrl : "",
// 		controller: ""
// 	})
// });

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.home',
  'myApp.submit'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/home'});
}]);






