"use strict";

angular.module('app.controllers')
.controller('DashboardClientController', DashboardClientController);

function DashboardClientController($scope, UserService) {

	$scope.clientMenuItems = UserService.getMenu('client');

}
