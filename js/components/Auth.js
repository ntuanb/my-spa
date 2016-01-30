angular.module('auth', ['angularify.semantic.modal'])
.controller('AuthController', function($rootScope, $scope) {

	$scope.doRegister = function() {
		$scope.loadingRegister = true;
	}

	$scope.doLogin = function() {
		$scope.loadingLogin = true;
	}

})

/**
 * Register Buttons
 */
.directive('authRegister', function($rootScope) {

	function link($scope, $el, $attrs) {

		$scope.viewRegister = function() {
			$rootScope.auth.showRegister = true;
		}
		$scope.closeRegister = function() {
			$rootScope.auth.showRegister = false;
		}

	}

	return {
		restrict: 'AE',
		templateUrl: 'views/auth/register-button.html',
		link: link
	}
})

/**
 * Login Buttons
 */
.directive('authLogin', function($rootScope) {

	function link($scope, $el, $attrs) {

		$scope.viewLogin = function() {
			$rootScope.auth.showLogin = true;
		}
		$scope.closeLogin = function() {
			$rootScope.auth.showLogin = false;
		}

	}

	return {
		restrict: 'AE',
		templateUrl: 'views/auth/login-button.html',
		link: link
	}
});
