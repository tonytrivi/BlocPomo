(function() {
     function timeConverter() {         
         return function(seconds) {

             var output = new Date(1970, 0, 1).setSeconds(seconds);

             return output;
         };
     }
     angular
         .module('pomodoro')
         .filter('timeConverter', [timeConverter]);
 })();