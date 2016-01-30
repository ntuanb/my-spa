angular.module('services.user', [])
.factory('UserFactory', function() {

	function User() {
		var self = this;

		this.authenticated = false;
		this.token = null;

		this.content = null;
	}

	var r = {};

	r.new = function() {
		return new User();
	}

	return r;
})
.factory('UserService', function(AuthService) {
	var r = {};

	r.login = function(formData) {
		var a = AuthService.authenticate(formData);

		// if succes do user details
		var userRes = {
			data: {
				id: 'random',
				attributes: {
					firstname: 'John',
					lastname: 'Smith',
					email: 'test@test.com'
				}
			}
		};
		var u = UserFactory.new();
		u.authenticated = true;
		u.token = a;
		u.content = userRes.data;

		return u;
	}

	return r;
});
