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
            .state('collection', {
                url: '/collection',
                controller: 'CollectionCtrl as collection',
                templateUrl: '/templates/collection.html'
     
 });

        
        
            
    }
    angular
        .module('pomodoro', ['ui.router', 'firebase'])
        .constant("CONSTANTS", {
        "SESSION_TIME": 25,
        "BREAK_TIME": 5,
        "LONG_BREAK_TIME": 8
    })
    .config(config);
    
})();