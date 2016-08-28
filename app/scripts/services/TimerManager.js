(function() {
     function TimerManager() {
     var TimerManager = {};

/**
* @desc Session length.
* @type {Number}
*/
TimerManager.sessionLength = 25000;  //25 minutes

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
TimerManager.start = function() {
    if (TimerManager.running) {
        TimerManager.running = false;
    }
    else {
        TimerManager.running = true;
    }
            
};
             
    return TimerManager;
}
 
     angular
         .module('pomodoro')
         .factory('TimerManager', [TimerManager]);
})();