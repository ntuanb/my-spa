angular.module('site.nav', [])
.factory('SiteNavFactory', function(
	$id
) {

	var r = {};

	function SiteNav() {
		var self = this;
		this.id = $id.generate_uuid();
		this.p = null;
		this.c = null;
		this.url = null;
	}

	r.construct = function(items) {
		var menuItems = [];
		angular.forEach(items, function(value, key) {
			var item = new SiteNav();
			item.p = value.p;
			item.c = value.c;
			item.url = value.url;
			menuItems.push(item);
		});
		return menuItems;
	}

	return r;

})
.directive('siteNav', function(SiteNavFactory) {

	function link($scope, $el, $attrs) {

		$scope.menuItems = SiteNavFactory.construct(CONFIG.MENU);

	}

	return {
		restrict: 'AE',
		templateUrl: 'views/partials/site-nav.html',
		link: link
	}
});
