angular.module('store.cart', ['angularify.semantic.modal'])
.factory('CartFactory', function(
	$id
) {

	var r = {};

	function Cart() {
		var self = this;
		this.id = $id.generate_uuid();
		this.products = [];
	}

	r.init = function() {
		return new Cart();
	}

	return r;

})
.controller('CartController', function($scope) {

	$scope.doCheckout = function() {
		$scope.loadingCheckout = true;
	}

})
.directive('storeCart', function($rootScope, CartFactory) {

	function link($scope, $el, $attrs) {

		$scope.viewCart = function() {
			$rootScope.cart.showCart = true;
		}
		$scope.closeCart = function() {
			$rootScope.cart.showCart = false;
		}

	}

	return {
		restrict: 'AE',
		templateUrl: 'views/store/cart-button.html',
		link: link
	}
});
