angular.module('services.auth', [])
.factory('AuthFactory', function() {

	function Auth() {
		var self = this;
		this.token = null;
	}

	var r = {};

	r.new = function() {
		return new Auth();
	}

	return r;
})
.factory('AuthService', function(AuthFactory) {
	var r = {};

	r.authenticate = function(formData) {
		// Set up basic auth or soemthing
		// HttpService.post().then(function(res))
		// Do some http request
		// if successful, do the user http requets for the body
		// Will have an epxiry of 1hr if no usage
		var authRes = {
			data: {
				token: 'token'
			}
		};
		var a = AuthFactory.new();

		// Set the values based on returned Http POST res.
		// Will also return an object with user e.g { auth: obj, user: { etc: etc}}
		a.token = 'token';
		return a;
	}

	return r;
});
