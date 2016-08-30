(function() {
     function timeconverter() {
         return function(seconds) {
             
             var output = new Date(1970, 0, 1).setSeconds(seconds);
 
             return output;
         };
     }

     angular
         .module('pomodoro')
         .filter('timeconverter', timeconverter);
 })();