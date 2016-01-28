angular.module('store.cart', [])
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
.directive('storeCart', function(CartFactory) {

	function link($scope, $el, $attrs) {

	}

	return {
		restrict: 'AE',
		templateUrl: 'views/store/cart.html',
		link: link
	}
});
