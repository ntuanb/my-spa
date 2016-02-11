// #############################################################################
// Storage Factory
// #############################################################################
/*  - a factory to store all the site's slides as objects to allow extra functionalliy
    - order: 1. Cache 2. Storage

    Note: Cache removed to decrease memory usage and increase performance.
*/
angular.module('services.storage', [])
.factory('StorageService', function(
  $window,
  $ionicHistory
) {

  //////////////////////////////////////

  var r = {};

  r.create = create;
  r.set = set;
  r.get = get;
  r.remove = remove;
  r.clearAll = clearAll;

  //////////////////////////////////////

  return r;

  function create(key, value) {
    $window.localStorage.setItem(key, JSON.stringify(value));
    return JSON.parse($window.localStorage.getItem(key));
  }
  function set(key, value) {
    $window.localStorage.setItem(key, JSON.stringify(value));
    return JSON.parse($window.localStorage.getItem(key));
  }
  function get(key) {
    // Try the memory
    try {
      return JSON.parse($window.localStorage.getItem(key));
    } catch(e) {
      return null;
    }
  }
  function remove(key){
    $window.localStorage.removeItem(key);
    return true;
  }
  function clearAll() {
    $window.localStorage.clear();
    $ionicHistory.clearCache();
    $ionicHistory.clearHistory();
    return true;
  }

});
