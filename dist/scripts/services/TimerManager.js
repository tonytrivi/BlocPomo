(function() {
     function TimerManager($interval) {
     var TimerManager = {};

/**
* @desc Session length.
* @type {Number}
*/
var SESSION_LENGTH = 1500;  //seconds - 25 minutes
         
/**
* @desc 
* @type {void}
*/
var count = function () {
    TimerManager.running = true;
    $interval(function(){
        if (TimerManager.currentTime > 0) {
            TimerManager.currentTime--;
        }
        else {
            TimerManager.running = false;
        }
        
    }, 1000);
};

/**
* @desc Timer time remaining.
* @type {Number}
*/
TimerManager.currentTime = null;

/**
* @desc Let's you know if the timer is counting down.
* @type {Boolean}
*/
TimerManager.running = null;

/**
* @function TimerManager.start
* @scope public
* @desc Starts or resets the timer.
*/
TimerManager.startSession = function() {
    if (TimerManager.running) {
        TimerManager.running = false;
    }
    else {
        TimerManager.currentTime = SESSION_LENGTH;
        //begin countdown
        count();
    }
            
};
             
    return TimerManager;
}
 
     angular
         .module('pomodoro')
         .factory('TimerManager', ['$interval', TimerManager]);
})();