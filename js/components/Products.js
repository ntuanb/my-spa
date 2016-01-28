angular.module('store.products', [])
.factory('ProductFactory', function(
	$id
) {

	var r = {};

	function Product() {
		var self = this;
		this.id = $id.generate_uuid();
		this.name = null;
		this.description = null;
		this.price = null;
	}

	r.construct = function(products) {
		var l = [];
		angular.forEach(products, function(value, key) {
			var p = new Product();
			p.title = value.title;
			p.description = value.description;
			p.price = value.price;
		});
	}

	return r;

});
