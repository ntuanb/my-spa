angular.module('user.nav', [])
.directive('userNav', function() {

	function link($scope, $el, $attrs) {
	}

	return {
		restrict: 'AE',
		templateUrl: 'views/partials/user-nav.html',
		link: link
	}
});
