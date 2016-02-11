angular.module('site.dashboard', [])
.factory('Dashboard', function(
	$id
) {

	var r = {};
	return r;


	function Dashboard() {
		var self = this;
		this.id = $id.generate_uuid();
		this.type = null;
	}

});
