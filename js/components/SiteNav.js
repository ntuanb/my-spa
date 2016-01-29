angular.module('site.nav', [])
.factory('SiteNavFactory', function(
	$id
) {

	var r = {};

	function SiteNav() {
		var self = this;
		this.id = $id.generate_uuid();
		this.content = null;
	}

	r.construct = function(items) {
		console.log(items);
		var menuItems = [];
		angular.forEach(items, function(value, key) {
			var item = new SiteNav();
			item.content = value;
			menuItems.push(item);
		});
		console.log(menuItems);
		return menuItems;
	}

	return r;

})
.directive('siteNav', function(SiteNavFactory) {

	function link($scope, $el, $attrs) {

		console.log(CONFIG);
		$scope.menuItems = SiteNavFactory.construct(CONFIG.MENU);
		console.log($scope.menuItems);

	}

	return {
		restrict: 'AE',
		templateUrl: 'views/partials/site-nav.html',
		link: link
	}
});
