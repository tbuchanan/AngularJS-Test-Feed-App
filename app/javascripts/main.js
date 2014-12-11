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