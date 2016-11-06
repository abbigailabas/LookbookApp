angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

  .state('home', {
    url: '/home',
    templateUrl: 'templates/home.html',
    controller: 'homeCtrl'
  })

  .state('details', {
    url: '/page2/:postid',
    templateUrl: 'templates/details.html',
    controller: 'detailsCtrl'
  })

  .state('mOSTRECENT', {
    url: '/page3',
    templateUrl: 'templates/mOSTRECENT.html',
    controller: 'mOSTRECENTCtrl'
  })

  .state('uPLOADPIC', {
    url: '/page4',
    templateUrl: 'templates/uPLOADPIC.html',
    controller: 'uPLOADPICCtrl'
  })

  .state('pOST', {
    url: '/page5',
    templateUrl: 'templates/pOST.html',
    controller: 'pOSTCtrl'
  })

$urlRouterProvider.otherwise('/home')

  

});