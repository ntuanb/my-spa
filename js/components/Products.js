angular.module('store.products', [])
.factory('ProductFactory', function(
	$id
) {

	var r = {};

	function Product() {
		var self = this;
		this.id = $id.generate_uuid();
		this.content = null;
	}

	r.construct = function(products) {
		var l = [];
		angular.forEach(products, function(value, key) {
			var p = new Product();
			p.content = value;
			l.push(p);
		});
		return l;
	}

	return r;

});
