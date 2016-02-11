angular.module('app.routes', ['ngRoute'])
.config(function($routeProvider, $httpProvider) {

	/**
	 * HTTP Intercept that intercepts all http calls for before, after
	 */
  $httpProvider.interceptors.push(function ($q, $injector) {
    return {
      'request': function(config) {
        /** If config contains eternal, then we don't apply x-access-token **/
        if (!config.external) {
          config.timeout = CONFIG.TIMEOUT;
        }
        return config;
      },

     'requestError': function(rejection) {
        // do something on error
        if (canRecover(rejection)) {
          return responseOrNewPromise
        }
        return $q.reject(rejection);
      },

      'response': function (response) {
        switch(response.status) {
          case '401':
            return response;
            break;
          default:
            return $q.when(response);
            break;
        }
      },

      'responseError': function (rejection) {
        switch(rejection.status) {
          case '400':
            return rejection;
            break;

          case '401':
            return rejection;
            break;

          case '0':
            return rejection;
            break;
          default:
            return $q.reject(rejection);
            break;
        }
      }
    };
  });

	$routeProvider
		.when('/', {
			templateUrl: 'views/pages/home.html',
			controller: 'HomeController'
		})
		.when('/book', {
			templateUrl: 'views/pages/book.html',
			controller: 'BookController'
		})
		.when('/store', {
			templateUrl: 'views/pages/store.html',
			controller: 'StoreController'
		})
		.when('/menu', {
			templateUrl: 'views/pages/menu.html',
			controller: 'MenuController'
		})
		.when('/gift', {
			templateUrl: 'views/pages/gift.html',
			controller: 'GiftController'
		})
		.when('/contact', {
			templateUrl: 'views/pages/contact.html',
			controller: 'ContactController'
		})

    // DASHBAORD
		.when('/dashboard/client', {
			templateUrl: 'views/dashboard/client.html',
			controller: 'DashboardClientController'
		})
		.when('/dashboard/admin', {
			templateUrl: 'views/dashboard/admin.html',
			controller: 'DashboardAdminController'
		})
	;
});
