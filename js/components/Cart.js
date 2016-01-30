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
.directive('storeCart', function(CartFactory) {

	function link($scope, $el, $attrs) {

		console.log('doing site store cart nav');



		$scope.viewCart = function() {
			$scope.show_modal = true;
		}
    $scope.closeCart = function() {
      $scope.show_modal = false;
    }


	}

	return {
		restrict: 'AE',
		templateUrl: 'views/store/cart-button.html',
		link: link
	}
});
