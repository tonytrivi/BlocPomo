(function() {
    function config($stateProvider, $locationProvider){
        $locationProvider
         .html5Mode({
             enabled: true,
             requireBase: false
         });
        
        $stateProvider
            .state('landing', {
                url: '/',
                controller: 'LandingCtrl as landing',
                templateUrl: '/templates/landing.html'
            })
            .state('session', {
                url: '/session',
                controller: 'SessionCtrl as session',
                templateUrl: '/templates/session.html'
            })
             .state('collection', {
                url: '/collection',
                controller: 'CollectionCtrl as collection',
                templateUrl: '/templates/collection.html'
     
 });

        
        
            
    }
    angular
         .module('pomodoro', ['ui.router', 'firebase'])
         .config(config);
    
})();