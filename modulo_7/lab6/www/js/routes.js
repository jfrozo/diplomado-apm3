angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
      
        
    .state('page', {
      url: '/inicio',
      templateUrl: 'templates/page.html',
      controller: 'pageCtrl'
    })
        
      
    
      
        
    .state('page2', {
      url: '/botones',
      templateUrl: 'templates/page2.html',
      controller: 'page2Ctrl'
    })
        
      
    
      
        
    .state('page3', {
      url: '/listas',
      templateUrl: 'templates/page3.html',
      controller: 'page3Ctrl'
    })
        
      
    ;

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/inicio');

});