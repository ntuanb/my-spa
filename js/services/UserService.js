angular.module('services.user', [])
.factory('UserFactory', function() {

	function User() {
		var self = this;

		this.authenticated = false;
		this.token = null;

		this.content = null;
	}

	var r = {};

	r.newUser = newUser;

	return r;

	function newUser() {
		return new User();
	}


})
.factory('UserService', function(AuthService, StorageService, UserFactory) {
	var r = {};

	r.login = login;
	r.save = save;
	r.getMenu = getMenu;

	return r;

	function save(data) {
		console.log(data);
		StorageService.set(data.content.type, data);
	}

	function login(formData) {
		var a = AuthService.authenticate(formData);

		// if succes do user details
		var userRes = {
			data: {
				id: 'random',
				type: 'users',
				attributes: {
					firstname: 'John',
					lastname: 'Smith',
					email: 'test@test.com'
				}
			}
		};
		var u = UserFactory.newUser();
		u.authenticated = true;
		u.token = a;
		u.content = userRes.data;

		r.save(u);

		return u;
	}

	function getMenu(role) {
		var menuItems;

		if (role === 'admin') {
			menuItems = CONFIG.MENU_ADMIN;
		} else {
			menuItems = CONFIG.MENU_CLIENT;
		}

		return menuItems
	}

});
