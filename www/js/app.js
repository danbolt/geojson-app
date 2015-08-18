angular.module('geojson', ['ionic','ngCordova'])
.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
      Parse.initialize("7EtDKIluLC2jWykndVkIN2tuxUxPiOQP2OHIUBI6", "0kgIpZlubm0FgvKEUDZ9geQkHIdMnVB5sd2Nx3Br");
  });
})
.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('/', {
        url: '/',
        templateUrl: 'views/login.html',
        controller: 'loginController as login'
    })
    .state('logging', {
        url: '/logging',
        templateUrl: 'views/form.html'
    })
});