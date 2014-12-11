'use strict';

var FeedApp = angular.module('FeedApp', []);

function NewsCtrl($scope, $http) {

	$scope.news = [];

	$http.get('app/mock_json/nbc.json')
		.success(function(data){
			console.log(data);
			$scope.news.push(data);
			
		});
}

FeedApp.config(['$httpProvider', function($httpProvider, $cookieStore) {
	$httpProvider.defaults.headers.common['X-CSRF-Token'] = $('meta[name=csrf-token]').attr('content')
}]);