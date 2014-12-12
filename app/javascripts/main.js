'use strict';

var FeedApp = angular.module('FeedApp', ['ngSanitize']);

function NewsCtrl($scope, $http, $sce) {

	$scope.news = [];

	$http.get('app/mock_json/nbc-html.json')
		.success(function(data){
			console.log(data);
			$scope.news.push(data);
			
		});

	$scope.TrustSnippet = function(body) {
		return $sce.trustAsHtml(body);
	};	
}