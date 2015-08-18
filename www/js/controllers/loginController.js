'use strict';

angular.module('geojson')
.controller('loginController', loginController);

function loginController($scope, $cordovaOauth) {

	angular.extend($scope, {
		login: login,
	});

	function login() {
		$cordovaOauth.github(
			'df4515ce686cf9fb2b28',
			'2d7946ee88c11c7375c3c690d89c0685a563754d',
			['user','repo']
		);
	}
}
