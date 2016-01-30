angular.module('user', ['angularify.semantic.modal'])
.controller('UserController', function($rootScope, $scope, $timeout, UserService) {

	$scope.login = CONFIG.LOGIN;
	$scope.register = CONFIG.REGISTER;

	$scope.doRegister = function() {
		$scope.loadingRegister = true;
	}

	$scope.doLogin = function() {
		$scope.loadingLogin = true;
		$timeout(function() {
			$rootScope.user = UserService.login($scope.formData);
			console.log($rootScope.user);
			$scope.loadingLogin = false;
			$rootScope.auth.showLogin = false;
		}, 500);
	}

})

/**
 * Register Buttons
 */
.directive('userRegister', function($rootScope) {

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
		templateUrl: 'views/user/register-button.html',
		link: link
	}
})

/**
 * Login Buttons
 */
.directive('userLogin', function($rootScope) {

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
		templateUrl: 'views/user/login-button.html',
		link: link
	}
});
