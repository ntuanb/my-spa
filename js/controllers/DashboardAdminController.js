"use strict";

angular.module('app.controllers')
.controller('DashboardAdminController', DashboardAdminController);

function DashboardAdminController($scope, UserService) {

	$scope.adminMenuItems = UserService.getMenu('admin');

}
