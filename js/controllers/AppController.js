"use strict";

angular.module('app.controllers', [])
.controller('AppController', [
	'$rootScope', '$scope', '$location', '$timeout', 'CartFactory', 'ProductFactory', function(
	$rootScope, $scope, $location, $timeout, CartFactory, ProductFactory
) {
	$rootScope.CONFIG = CONFIG;
	$scope.loading = true;
	$scope.container = false;

	$timeout(function() {
		$scope.loading = false;
		$timeout(function() {
			$scope.container = true;
		}, 50);
	}, 750);

	$rootScope.$on('$routeChangeStart', function(
		event, toState, toParams, fromState, fromParams) {
			console.warn('State changing.');
	    var ls = $location.path().split('/');

			$scope.container = false;
			$scope.loading = true;
			$timeout(function() {
				$scope.loading = false;
				$timeout(function() {
					$scope.container = true;
				}, 50);
			}, 1500);
	});

	$scope.cart = CartFactory.init();
	$scope.products = ProductFactory.construct(CONFIG.PRODUCTS);
	console.log($scope.products);
}]);
