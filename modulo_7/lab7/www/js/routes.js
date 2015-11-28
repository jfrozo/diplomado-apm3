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
        
      
    
      
        
    .state('cards', {
      url: '/cards',
      templateUrl: 'templates/cards.html',
      controller: 'cardsCtrl'
    })
        
      
    
      
        
    .state('toggle', {
      url: '/toggle',
      templateUrl: 'templates/toggle.html',
      controller: 'toggleCtrl'
    })
        
      
    
      
        
    .state('actionSheet', {
      url: '/actionsheet',
      templateUrl: 'templates/actionSheet.html',
      controller: 'actionSheetCtrl'
    })
        
      
    
      
        
    .state('modal', {
      url: '/modal',
      templateUrl: 'templates/modal.html',
      controller: 'modalCtrl'
    })
        
      
    
      
        
    .state('popup', {
      url: '/popup',
      templateUrl: 'templates/popup.html',
      controller: 'popupCtrl'
    })
        
      
    
      
        
    .state('event', {
      url: '/event',
      templateUrl: 'templates/event.html',
      controller: 'eventCtrl'
    })
        
      
    
      
        
    .state('forms', {
      url: '/forms',
      templateUrl: 'templates/forms.html',
      controller: 'formsCtrl'
    })
        
      
    
      
        
    .state('checks', {
      url: '/checks',
      templateUrl: 'templates/checks.html',
      controller: 'checksCtrl'
    })
        
      
    
      
        
    .state('range', {
      url: '/range',
      templateUrl: 'templates/range.html',
      controller: 'rangeCtrl'
    })
        
      
    
      
        
    .state('radio', {
      url: '/radio',
      templateUrl: 'templates/radio.html',
      controller: 'radioCtrl'
    })
        
      
    ;

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/home');

});