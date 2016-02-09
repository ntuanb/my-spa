"use strict";

var m = angular.module('app.controllers', []);
m.controller('AppController', AppController);

function AppController(
	$rootScope, $scope, $location, $timeout, CartFactory, ProductFactory, PageFactory
) {

	$rootScope.CONFIG = CONFIG;
	$rootScope.user = null; console.log($rootScope.user);

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
	$scope.pages = PageFactory.construct(CONFIG.PAGES);
}
