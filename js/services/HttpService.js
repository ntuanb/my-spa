angular.module('services.http', [])
.factory('HttpService', function() {
	var r = {};

	/**
    @param url - eg. 192.168.1.1 or localhost.com.au
    @return promise
  **/
  var applyProtocol = function (url) {
    var pattern = /^((http|https):\/\/)/;
    if(!pattern.test(url)) {
      url = "http://" + url;
    }
    return url
  }

	/**
    @param url - eg. 192.168.1.1 or localhost.com.au
    @param link - must begin with '/' and end without a trailing slash. e.g /bob/doe
    @return promise
  **/
	r.get = function() {

		var deferred = $q.defer();
    var startTime = new Date().getTime();

    $http.get(applyProtocol(url) + link)
      .success(function(res, status, header, config) {
        deferred.resolve(res);
      })
      .error(function(res, status, header, config) {
				/** Check for timeout **/
        var respTime = new Date().getTime() - startTime;
        if (respTime >= CONFIG.TIMEOUT) {
          deferred.reject(res);

					/** Fully set value to show that its timed out. */
          deferred.promise.$$state.value = 'TIMEOUT';
        }
        else {
          deferred.reject(res);
        }
      });

    return deferred.promise;

	}

	/** A simple http get for external lnks
    @param link - must begin with '/' and end without a trailing slash. e.g /bob/doe
    @return promise
  **/
	r.externalGet = function(url) {
		var config = { external: true };
    return $http.get(url, config);
	}

	/**
    @param url - eg. 192.168.1.1 or localhost.com.au
    @param link - must begin with '/' and end without a trailing slash. e.g /bob/doe
    @return promise
  **/
	r.post = function() {
		var deferred = $q.defer();
    var startTime = new Date().getTime();

    $http.post(applyProtocol(url) + link, data)
      .success(function(res, status, header, config) {
        deferred.resolve(res);
      })
      .error(function(res, status, header, config) {
        var respTime = new Date().getTime() - startTime;
        if (respTime >= CONFIG.TIMEOUT) {
          deferred.reject(res);
          /** Fully set value to show that its timed out. */
          deferred.promise.$$state.value = 'TIMEOUT';
        }
        else {
          deferred.reject(res);
        }
      });

    return deferred.promise;
	}

	r.update = function() {

	}

	r.delete = function() {

	}

	return r;
});
