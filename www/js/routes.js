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

  .state('mostrecent', {
    url: '/page3',
    templateUrl: 'templates/mostrecent.html',
    controller: 'mostrecentCtrl'
  })

  .state('uploadpic', {
    url: '/page4',
    templateUrl: 'templates/uploadpic.html',
    controller: 'uploadpicCtrl'
  })

  .state('post', {
    url: '/page5',
    templateUrl: 'templates/post.html',
    controller: 'postCtrl'
  })

    .state('menu', {
    url: '/page6',
    templateUrl: 'templates/menu.html',
    controller: 'menuCtrl'
  })


$urlRouterProvider.otherwise('/home')

});





  